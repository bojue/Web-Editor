import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from "@angular/core";
import { SettingObject } from "src/app/editor/model/setting-object.module";
import * as _ from "loadsh";
import { SettingStyle } from "src/app/editor/model/setting-style.model";
import { PageStyle } from '../../model/setting-page-style.model';

@Component({
  selector: 'app-comp-setting',
  templateUrl: './comp-setting.component.html',
  styleUrls: ['./comp-setting.component.scss']
})
export class CompSettingComponent implements OnInit, OnChanges{
  @Input() activeSettingObj: SettingObject;
  @Input() pageGridSetting;
  @Input() hasPageBool;
  @Input() currentPage;
  @Output() settingObjChange = new EventEmitter<any>();
  @Output() deleteComponent = new EventEmitter<any>();
  @Output() preViewComp = new EventEmitter<any>();
  @Output() changeBackground = new EventEmitter<any>();
  @Output() updateCurrentPage = new EventEmitter<any>();
  pageName:string;
  pageStyles:PageStyle;
  styles: SettingStyle;
  showBool:boolean = true;
  DEFAULT_PAGE = {
    width:1600,
    height:820,
    background:"#fff"
  }
  states = [
    {
      state:'style',
      name:"样式",
      active:true
    },
    {
      state:"data",
      name:'数据',
      active:false
    },{
      state:"event",
      name:"事件",
      active:false
    }
  ];
  stateObj:string;

  constructor() { 
  
  }

  ngOnInit() {
    this.initData()
  }

  initData() {
    this.stateObj = 'style';
    this.styles = this.activeSettingObj && this.activeSettingObj['style'];
  }

  ngOnChanges() {
    if(this.currentPage){
      this.pageName = this.currentPage['value'];
      console.log(this.currentPage)
    }
  }

  deleteComp(event){
    this.deleteComponent.emit(event)
  }

  paramsChange(key: string) {
    this.settingObjChange.emit(this.activeSettingObj)
  }

  showGrigFun() {
    this.pageGridSetting['showRight'] = !this.pageGridSetting['showRight'];
  }

  preView(event) {
    this.preViewComp.emit(event);
  }

  changeBg(event) {
    this.changeBackground.emit(event);
  }

  activeState(tab) {
    if(!tab || tab && tab['active']) return ;
    _.map(this.states, item => {
      item['active'] = false;
    });
    tab['active'] = true;
    this.stateObj = tab['state'];
  }

  // 页面保存
  updatePage() {
    this.updateCurrentPage.emit()
  }

}
