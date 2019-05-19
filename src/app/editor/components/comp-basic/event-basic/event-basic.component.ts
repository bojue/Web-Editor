import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-basic',
  templateUrl: './event-basic.component.html',
  styleUrls: ['./event-basic.component.scss']
})
export class EventBasicComponent implements OnInit {
  @Input() event:any;
  event_type: string;
  constructor() { }

  ngOnInit() {
  }

  showBoolHeader() {
    return this.event && this.event.hasOwnProperty(this.event_type);
  }
  
}
