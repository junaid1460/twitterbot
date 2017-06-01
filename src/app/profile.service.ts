import { Injectable } from '@angular/core';
import {HttpModule,Http} from '@angular/http'

@Injectable()
export class ProfileService {
  
  constructor(private _http:Http) { }
  getProfile(){
    return this._http.get("/api/profile")
  }
  getContent(){
    return this._http.get("/api/getdomains")
  }
  getTweets(){
    return this._http.get("/api/gettweets")
  }
}
