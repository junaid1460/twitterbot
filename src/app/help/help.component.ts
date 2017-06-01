import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common'
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private _loc:Location) { }

  goback(){
    this._loc.back();
  }
  ngOnInit() {
  }

}
