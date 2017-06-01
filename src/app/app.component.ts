import { Component ,HostListener,OnInit } from '@angular/core';

import {ProfileService} from './profile.service'


//update domains
//here we query trending domains
//
function updateDomain(tweets,callback){
		tweets = tweets.json();
        let data = []
			
            function DomainListItem(user,name,dp){
                this.count = 0;
				this.user = user;
				this.name = name;
				this.dp  = dp;
                this.domains = [];
            }
            let rex =/https?:\/\/[\[\w\-\.]*\.[\w]*/i;
            for(let i = 0 ;i< tweets.length;i++) {
                    data[tweets[i].user] =  data[tweets[i].user] || new DomainListItem(tweets[i].user,tweets[i].name,tweets[i].dp)
                    for(let j = 0 ;j< tweets[i].urls.length;j++) {
                        data[tweets[i].user].count++;
                        let tmp = rex.exec(tweets[i].urls[j].expanded_url)[0]
                        data[tweets[i].user].domains[tmp] = data[tweets[i].user].domains[tmp] || 0
                        data[tweets[i].user].domains[tmp]++;
                    }
                
            }
           return callback(null,data)
    
      
        
    
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = "";
  tweets:TwitterProfile[]  = []
  img:any;
  name:any;
  username:any;
  topSharer:any;
  domains:any[] = [];
  constructor(private _prof:ProfileService){
       this._prof.getProfile().subscribe(e => {
        this.img = e.json().photos[0].value?e.json().photos[0].value:"/user.png";
        this.name = e.json().displayName;
        this.username = e.json().username
         console.log(e.json())
       });
       this._prof.getContent().subscribe(e => {
			console.log("domain",e.json())
       })

    this.doit();
       this.resize();
       
  }
  doit(){
       this._prof.getTweets().subscribe(e=>{
            if(e.text.toString()==""){
              console.log("try again")
              setTimeout(this.doit,3000)
            }else{
              console.log("start replace")
              this.tweets = e.json();
              let domains = []
              let rex =/https?:\/\/[\[\w\-\.]*\.[\w]*/i;
             for(let i = 0 ;i< this.tweets.length;i++) {
                for(let j = 0 ;j< this.tweets[i].urls.length;j++) {
                 this.tweets[i].text =  this.tweets[i].text.
                 replace(
                        this.tweets[i].urls[j].url,
                        "<a href=\""+this.tweets[i].urls[j].expanded_url+"\">"+this.tweets[i].urls[j].display_url+"</a>"
                        );
                 let res = rex.exec(this.tweets[i].urls[j].expanded_url);
                 if(domains[res[0]])
                  {
                    domains[res[0]]++;
                  }else{
                    domains[res[0]] = 1;
                  }
                
                }
              }
			  let dt = []
			  for(let i in domains){
				dt.push({name : i,value : domains[i]})
			  }
			 
			  dt.sort((a,b)=>{return b.value - a.value})
			  let len = dt.length < 10 ? dt.length: 10
			   for(let i=0;i<len;i++){
				   
				  this.domains.push(dt[i])
			  }
              console.log(dt)
			  updateDomain(e,(e,data)=>{
				  let count = 0;
				  let user = null;
				  for(let i in data){
					  if(count < data[i].count){
						  count = data[i].count;
						  user = data[i];
					  }
				  }
				  this.topSharer = user;
				  console.log(user)
			  })

            }
         
       })
  }
  log(){
  }
    dl:boolean = false;
  @HostListener('window:resize',['$event'])
  resize(){
    if(window.innerWidth > 700 ){ 
      this.dl = true;
      this.show = "flex"
    } else {

      this.dl = false;
      this.show = "none";
    }
  }
  ngOnInit(){
       this.resize();
  }
  show:string;
  sd(){
    this.show = this.show== "none"?"flex":"none";
  }
}

interface TwitterProfile{
  user:string,
  name:string,
  urls:Url[],
  dp:string,
  text:string
}

interface Url{
  url:string,
  display_url:string,
  expanded_url:string
}

