import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import removeGhosting from 'remove-drag-ghosting';

@Component({
  selector: 'app-comp-list',
  templateUrl: './comp-list.component.html',
  styleUrls: ['./comp-list.component.scss']
})
export class CompListComponent implements OnInit {
  @Input() compList:any;
  @Input() currnetPageComps:any;
  @Output() dragCompCreateComp = new EventEmitter<any>();
  @Output() compChangeByDrag = new EventEmitter<any>();

  constructor(
    private elementRef:ElementRef,
  ) { }

  ngOnInit() {
  }

  dragCompCreate(event: any, data: any, idVal: any){
    if(!!this.currnetPageComps) {
      event['compType'] = data;
      removeGhosting(event)
      this.dragCompCreateComp.emit(event);
    }
  }

  dragCompEvent(event:any) {
    removeGhosting(event)
    this.compChangeByDrag.emit(event);
  }


}

