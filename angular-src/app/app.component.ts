import { Component ,HostListener,OnInit } from '@angular/core';

import {ProfileService} from './profile.service'


//update domains
//here we query trending domains
//



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

    if(this._prof.tweets == null || this._prof.domains == null || this._prof.username == null ){
       this._prof.getProfile().subscribe(e => {
        // console.log(e.json().photos);
        this._prof.img = e.json().photos[0].value?e.json().photos[0].value:"/user.png";
        this._prof.name = e.json().displayName;
        this._prof.username = e.json().username
        this._prof.processTweets(()=>{ this.setLocalVars()});
        //console.log(this._prof.tweets)
      
       });
    }else{
      this.setLocalVars();
    }
       this.resize();
       
  }
  setLocalVars(){
            this.username = this._prof.username;
            this.img = this._prof.img;
            this.tweets = this._prof.tweets;
            this.name = this._prof.name;
            this.topSharer  =this._prof.topSharer;
            this.domains = this._prof.domains;
            //console.log(this._prof.tweets)
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

