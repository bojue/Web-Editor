import { Component, OnInit, Input } from '@angular/core';
import removeGhosting from 'remove-drag-ghosting';

@Component({
  selector: 'app-event-basic',
  templateUrl: './event-basic.component.html',
  styleUrls: ['./event-basic.component.scss']
})
export class EventBasicComponent implements OnInit {
  @Input() event:any;
  event_type: string;
  showMoreBool:boolean;
  iconUrl: string;
  constructor() { }

  ngOnInit() {
  }

  showBoolHeader() {
    removeGhosting(event)
    return this.event && this.event.hasOwnProperty(this.event_type);
  }

  initParentData() {
    this.showMoreBool = true; 
    this.initIcon();
  }

  showMoreFun() {
    this.showMoreBool = !this.showMoreBool;
    this.initIcon();
  }

  initIcon() {
    this.iconUrl = this.showMoreBool ? 'assets/icons/up.svg' :  'assets/icons/down.svg' ;
  }
  
}
