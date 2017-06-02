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

  constructor(private _prof:ProfileService){
    if(this._prof.user==null ){
       this._prof.getProfile().subscribe(function(e){
         if(e){
          this._prof.user = e.json();
          this._prof.processTweets();
         }
       });
    }
       this.resize();
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

