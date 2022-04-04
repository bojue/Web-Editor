
import { Component, OnInit, Input } from '@angular/core';
import { EventBasicComponent } from '../../../comp-basic/event-basic/event-basic.component';

@Component({
  selector: 'app-route-event',
  templateUrl: './route-event.component.html',
  styleUrls: ['./route-event.component.scss']
})
export class RouteEventComponent extends EventBasicComponent implements OnInit {
  constructor() { 
    super();
  }

  override ngOnInit() {
    this.initData();
  }

  initData() {
    this.event_type = 'route';
  }

  changeVal() {
    this.event['routeBool'] = !this.event['routeBool'];
  }
}
