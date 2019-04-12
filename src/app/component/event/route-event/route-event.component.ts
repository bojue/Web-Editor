import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-route-event',
  templateUrl: './route-event.component.html',
  styleUrls: ['./route-event.component.scss']
})
export class RouteEventComponent implements OnInit {
  @Input() event:any;
  event_type: string = 'route_event';
  constructor() { }

  ngOnInit() {

  }


}
