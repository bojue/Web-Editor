import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from 'src/app/providers/app-service.service';

@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent implements OnInit {
  @Output() compDragEvent = new EventEmitter<any>();
  compList:any[];

  constructor(
    private service: AppServiceService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.compList = this.service.getComponentModeules();
  }

  dragCompEnd(event){
    this.compDragEvent.emit(event);
  }

}
