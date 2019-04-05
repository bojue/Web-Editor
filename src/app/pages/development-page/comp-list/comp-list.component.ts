import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {
  @Input() componentModules:any;
  @Output() compDragEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  dragCompStart(event, data){
    event['compType'] = data;
    this.compDragEvent.emit(event);
  }


}
