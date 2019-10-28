import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {
  @Input() componentModules:any;
  @Output() compDragEvent = new EventEmitter<any>();

  constructor(
    private elementRef:ElementRef,
  ) { }

  ngOnInit() {
  }

  dragCompEnd(event, data, idVal){
    event['compType'] = data;
    this.compDragEvent.emit(event);

    // TODO 拖拽优化
  }


}
