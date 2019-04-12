import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-event',
  templateUrl: './click-event.component.html',
  styleUrls: ['./click-event.component.scss']
})
export class ClickEventComponent implements OnInit {
  @Input() event:any;
  event_type: string;
  constructor() { }

  ngOnInit() {
    console.log(this.event)
  }

}
