import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from 'src/app/providers/app-service.service';

@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent implements OnInit {
  @Input() pageGridSetting;
  @Output() compDragEvent = new EventEmitter<any>();
  compList:any[];
  showBool:boolean;

  constructor(
    private service: AppServiceService,
  ) { }

  ngOnInit() {
    this.initData();
    console.log(this.pageGridSetting)
  }

  initData() {
    this.showBool = true;
    this.compList = this.service.getComponentModeules();
  }

  dragCompEnd(event){
    this.compDragEvent.emit(event);
  }

  changeShowBool(showState) {
    this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
  }

}
