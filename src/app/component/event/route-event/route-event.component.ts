import { EventBasicComponent } from './../event-basic/event-basic.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-route-event',
  templateUrl: './route-event.component.html',
  styleUrls: ['./route-event.component.scss']
})
export class RouteEventComponent extends EventBasicComponent implements OnInit {
  constructor() { 
    super();
  }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.event_type = 'route';
  }
}
