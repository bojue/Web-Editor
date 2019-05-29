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
  treeNodes: any[];
  compList:any[];
  showBool:boolean;

  constructor(
    private service: AppServiceService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.treeNodes = [
      {
        value: '登录',
        children: [{ value: '登录' }, { value: '注册' }]
      },
      {
        value: '商品',
        children: [{ value: '列表' }, { value: '详情' }]
      }
    ]
    this.showBool = true;
    this.compList = this.service.getComponentModeules();
  }

  dragCompEnd(event){
    this.compDragEvent.emit(event);
  }

  showGrigFun() {
    this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
  }

}
