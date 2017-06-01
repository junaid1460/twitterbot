var express = require("express")
var router = express.Router();
var passport  = require("passport")
var TwitterLoginCred = require("passport-twitter").Strategy
var twit = require("twitter")
var database = require('./database')


//passport
const callback_URL  = 'http://localhost:8000/twitter/authenticated';
//don't tell anybody
var consumer_key    = 'p8YmEA7Fur40BH1imRQzvgiIA';
var consumer_secret = 'zhHuquI8HF8d5d1V0xuDZ7tKBbNjZhlCMQcMkzojdNAViy3g5X';
var userToken = "";
var userTokenSecret = "";
var userProfile = null;
var tweets = null;
var user = null;
var ExistingUser = false;
// set up passport
passport.use(new TwitterLoginCred({
    consumerKey: consumer_key,
    consumerSecret: consumer_secret,
    callbackURL: callback_URL
  },
  function(token, tokenSecret, profile, cb) {
      var data = database.User({
            id:profile.id,
            username : profile.username,
            displayName : profile.displayName,
            token : token,
            secret : tokenSecret,
            photos : profile.photos

        });

        //important we have to serialize ooperations of creating user. since user data is again
      new Promise(function(res,red){
         
         res(database.User.findOneAndUpdate({username : profile.username},{$set:{token:token,secret:tokenSecret}}, {new: true},
         (err,rres) =>{

      if(rres==null){
        
        //save user
        data.save(function(e,s){
            if(e){
                console.log("Could not save user data!") 
            } else{
                console.log("saved data successfully!")
                user = data;
            }
            cb(e,s);
        })
      }else{
          console.log("User Record exist!")
          console.log(rres);
          console.log("Updated token")
      }
      return true;
    
    }));
    return res(cb(null, profile))
     });
    
   

     

        // var client = new twit({
        //     consumer_key: consumer_key,
        //     consumer_secret: consumer_secret,
        //     access_token_key: token,
        //     access_token_secret: tokenSecret
        // });

        // getData(client,profile.username,profile.id)

      
    
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});



//some function will go lengthy and messy 
//coz javascript's many dunction are async and that's not good for 
//our app. serializing is hell :p
function getData(T,username,cb){

    // callback function for retriving data
    // method : twitter api function , javascript {}
    // params : api params
    // number : pagecount
    // offsetId : keeping some page count
    // dataset : final data
    // callback : function where final data is passed 
    function obtainTweets (method,params, number, offsetId, dataset, callback) {
        dataset = dataset || []
        if (number < 0) return callback(null, dataset)

        return T.get(method, params, (error, data) => {

            if (error) return callback(error)

            dataset = dataset.concat(data)
            return obtainTweets(method,params, number-100, offsetId, dataset, callback)
        })
    }
    // callback function for retriving friend's /follower's tweets
    //array : array of friends's ids
    // params : api params
    // number : pagecount
    // dataset : final data
    // callback : function where final data is passed 
    function foreach(number,array,params,dataset,callback){
        dataset = dataset||[]
        if(number<=0){
            console.log("calling callback\n")
            return callback(null,dataset);
        }
        else{
            console.log(array[number])
        
            return T.get('statuses/user_timeline', { user_id : parseInt(array[number]),count : 3200 }, (error, data) => {
                if(!error)
                dataset = dataset.concat(data);
                console.log(dataset.length);
                return foreach(number-1,array,params,dataset,callback);
        });
        }
    }

//here the function flow
//  1. get current user's tweets
//  2. get user's friends list/array
//  3. for each user id get posts related to user id 
//  4. concatinate dataset
//  5. extract what you need
//  6. push it to data base


//1
obtainTweets('statuses/user_timeline',{q:"http:// since:2017-05-23",count : 3000},1,null,null, (error,dataset) =>{
    console.log(dataset);
    //2
    obtainTweets('followers/ids',{ count:3000}, 1, null, null, (error, data) => {
        //3 and 4
        foreach(data[0].ids.length -1,data[0].ids,null,dataset,(e,datas) => {
          var pdata = [];
          //romove old data if exist. don't want to go
          // following things are mongoose stuffs
          console.log("processing data");
          database.Tweet.remove({user : username }).exec((error,res) => {
            if(error){
                console.log("database error");
                return;
            }else{
                    console.log("deleted old data!");
                    console.log("saving data")
                    new Promise(function(res,red){
                        var dt = [];
                        res(function(){
                            class Tweet{
                                constructor(user,name,dp,urls,text,date,img){
                                    this.user = user;
                                    this.urls = urls;
                                    this.text = text;
                                    this.name = name;
                                    this.dp = dp;
                                    this.date = date;
                                }

                            } 


                            for(i=0;i<datas.length;i++){
                                if(datas[i].entities.urls.length > 0)
                                    {

                                        dt.push(new Tweet(datas[i].user.screen_name,

                                            datas[i].user.name,
                                            datas[i].user.profile_image_url,
                                            datas[i].entities.urls,
                                            datas[i].text,
                                            datas[i].created_at
                                        ));
                                    }
                                }
                            
                        }())
                        res(function(){
                            
                             database.Tweet({
                        user : username,
                        tweets :dt
                    }).save(function(e,r){
                            if(!e){
                                console.log("data pulled successfully!")
                                cb(dt);
                            } else {
                                console.log("could not pull data!")
                                
                            }
                    });
                        }())
                    })
                    
                    
                   
                }
        })
       
    });
})

});



}


//for accessing passport session with $request
router.use(passport.initialize());
router.use(passport.session());


// app routes
require("./database").registerRoutes(router);

router.get("/guest",require('connect-ensure-login').ensureLoggedOut(),function(req,res,next){
    res.render("unauthenticated.html")
    
})

// loading all tweets when redirected to home
// asynch task may cause problem. since we can't
// predict when task will get completed I prefer making user
// wait for 3-4 seconds rather than letting user  
// get pissed of seeing no data.
router.get("/",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    if(!req.session.tweets){

        database.User.findOne({username : req.user.username},function(err,obj){
        return getData(new twit({
            consumer_key: consumer_key,
            consumer_secret: consumer_secret,
            access_token_key: obj.token,
            access_token_secret: obj.secret
        }),obj.username,function(e){
            console.log("session var")
            req.session.tweets = e;
            res.render("index.ejs");
        })
        });
    }
    else
        res.render("index.ejs");
    
});

//logout lol
router.get("/logout",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    req.session.tweets = null;
    req.logout();
    
    res.redirect("/")
});

// updating data while user is still logged in
// simply set tweet session variable null and redirect to /redirect for an intermediate messaage
router.get("/update",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    req.session.tweets = null;
    res.redirect("/redirect")
});


//for the sake of angular 
router.get("/help",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    
    res.render("index.ejs")
});


//rest api

router.get("/api/gettweets",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,n){
   if(!req.session.tweets){
    res.send('')
   }else{
       res.json(req.session.tweets);
   }


});




//update domains
//here we query trending domains
//
function updateDomain(tweets,callback){
   
    return new Promise((res,red) => {
        let data = []
        res(function(){
            function DomainListItem(){
                this.count = 0;
                this.domains = [];
            }
            let rex =/https?:\/\/[\[\w\-\.]*\.[\w]*/i;
            for(let i = 0 ;i< tweets.length;i++) {
                    data[tweets[i].user] =  data[tweets[i].user] || new DomainListItem()
                    for(let j = 0 ;j< tweets[i].urls.length;j++) {
                        data[tweets[i].user].count++;
                        let tmp = rex.exec(tweets[i].urls[j].expanded_url)[0]
                        data[tweets[i].user].domains[tmp] = data[tweets[i].user].domains[tmp] || 0
                        data[tweets[i].user].domains[tmp]++;
                    }
                
            }
           return callback(null,data)
        }());
      
        
    })
}


//oh yea if session variable is set. then use itto calculate
router.get("/api/getdomains",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    if(req.session.domains){
        res.json(req.session.domains)
    }else{
       return updateDomain(req.session.tweets,function(e,data){
           
            res.json(JSON.stringify(data))
        })
    }
});

router.get("/api/profile",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.json(req.user);
});



//twitter specific

router.get('/login/twitter',passport.authenticate('twitter'));

router.get("/redirect",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.render("redirect.html")
});

router.get("/panic",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.render("panic.html")
});

router.get('/twitter/authenticated', passport.authenticate('twitter', { failureRedirect: '/panic' }),
    function(req, res) {
         res.redirect('/redirect');
  });







//function to be called by upper layer router to register all the abouve defined routes
function registerRoutes(app){
    app.use("/",router);
    return app;
}
module.exports.registerRoutes = registerRoutes;
