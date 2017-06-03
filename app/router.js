var express = require("express")
var router = express.Router();
var passport  = require("passport")
var TwitterLoginCred = require("passport-twitter").Strategy
var twit = require("twitter")
var database = require('./database')


//passport
const callback_URL  = '--callback--';
//don't tell anybody
var consumer_key    = '--sssshhhh--';
var consumer_secret = '--sssshhhh--';
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





function subtract(t = new Date(),t1 = 0){
    return new Date(
        t.getFullYear() ,
        t.getMonth(),
        t.getDate() - t1,
        0,0,0,0
    )
}

function lesserThan(range = new Date(),check = new Date()){
    return check >= range;
}




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


 //the data structure for storing necessary information of each tweet
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


function getData(T,username,cb){ //query data from twitter

//here the function flow






    //  1. get current user's tweets
    obtainTweets('statuses/user_timeline',{q:"http:// since:2017-05-23",count : 3000},1,null,null, (error,dataset) =>{
        //console.log(dataset);
        //  2. get user's friends list/array
        obtainTweets('followers/ids',{ count:3000}, 1, null, null, (error, data) => {
            //  3. for each user id get posts related to user id 
            //  4. concatinate dataset, the variable data set having current user data is passed to function 
            //     to concatinate friends' tweets
            
            foreach(data[0].ids.length -1,data[0].ids,null,dataset,(e,datas) => {
            // romove old data if exist. don't want to go out of memory
            // following things are mongoose stuffs
            // Now I have all tweets I need
            // let's do some post processing on the data
            console.log("processing data");
            database.Tweet.remove({user : username }).exec((error,res) => {
                if(error){
                    // we will be here in case of connection error
                    console.log("database error");
                    cb(null)
                    //when returned is null, the call back function can take some actions
                    //so when user trys again we can repeat this process again,
                }else{
                        //old data deleted now let's store new
                        console.log("deleted old data!");
                        console.log("saving data")
                        //let's go serially
                        new Promise(function(res,red){

                            var dt = []; //this var will have processed data
                            //promise resolver
                            res(function(){
                                // subtract date by 7
                                date  = subtract(new Date() - 7);
                                //iterate thru all received tweets
                                for(i=0;i<datas.length;i++){
                                    //  her we are filtering tweets
                                    //  take only those tweets which has some sort of link in it
                                    //  and withingthe range from today and (today - 7) ie: within past 7 days 
                                    //  5. extract what you need
                                    if(datas[i].entities.urls.length > 0 && lesserThan(date,new Date(datas[i].created_at)))
                                    {
                                            dt.push(
                                                new Tweet(
                                                    datas[i].user.screen_name,
                                                    datas[i].user.name,
                                                    datas[i].user.profile_image_url,
                                                    datas[i].entities.urls,
                                                    datas[i].text,
                                                    datas[i].created_at
                                                )
                                            );
                                    }
                                }
                                
                            }())

                            // another promise resolver
                            // for uploading tweets
                            res(function(){
                                    //  6. push it to data base
                                    database.Tweet({ // the tweet's collection
                                        user : username,
                                        tweets :dt      
                                    }).save(function(e,r){
                                        if(!e){
                                            console.log("data pulled from twitter and saved successfully!")
                                            cb(dt);
                                        } else {
                                            
                                            console.log("couldn't pull data!")
                                             //logs are always good easy debugging see the message ctrl + f search lmao :p
                                            cb(null)//so when user trys again i could repeat this process again,
                                    }
                                });
                            }())
                            //second promise ends here
                            //seriously saying I have no habit of writing comments
                            //sorry if there is spelling mistake
                        })
                        //end promise
                    }//out from old data's 'else'
                })// out from datbase delete query
        
            });
        })

    });
}


//for accessing passport session with $request
router.use(passport.initialize());
router.use(passport.session());


// some databse related routes if I want make in future lol
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
        /*
            the main job here to fetch data and store it in session variable
            the messy function up there is called with a callback in the call back im gonna redirect into panic page 
            and in /panic exactly in 1 second after loading panic page i'm gonna redirect back to home 
            so that i could repeat the process of pulling data :p
        */
    if(!req.session.tweets){

        database.User.findOne({username : req.user.username},function(err,obj){
        return getData(new twit({   //important
            consumer_key: consumer_key,
            consumer_secret: consumer_secret, 
            access_token_key: obj.token,
            access_token_secret: obj.secret
        }),obj.username,function(e){
            console.log("session var")
            if(e==null) //redirect in case of error
                res.redirect('/panic')
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
    //delete session variable and logout
    req.session.tweets = null;
    req.logout();
    res.redirect("/guest")
});

// updating data while user is still logged in
// simply set tweet session variable null and redirect to /redirect for an intermediate messaage
router.get("/update",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    req.session.tweets = null;
    res.redirect("/redirect")
});


//for the sake of angular 
router.get("/help",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    //i have defined and /help route in angular 
    // so this route is here to avoid error :( cannot get /help
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



router.get("/api/profile",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.json(req.user);
});



//twitter specific
router.get('/login/twitter',passport.authenticate('twitter'));

//intermediate redirect page
router.get("/redirect",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.render("redirect.html")
});


//error page
router.get("/panic",require('connect-ensure-login').ensureLoggedIn("/guest"),function(req,res,next){
    res.render("panic.html")
});


//twitter call back
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
