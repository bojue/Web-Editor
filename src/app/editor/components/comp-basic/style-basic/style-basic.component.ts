import { Component, OnInit, Input } from "@angular/core";
import { SettingStyle } from "src/app/editor/module/setting-style.module";
import { BasicComponent } from "../basic/basic.component";
import { CompEmitService } from "src/app/providers/comp-emit.service";

@Component({
  selector: 'app-style-basic',
  templateUrl: './style-basic.component.html',
  styleUrls: ['./style-basic.component.scss']
})
export class StyleBasicComponent implements OnInit {
  @Input() style: SettingStyle;
  showMoreBool:boolean;
  iconUrl:string;

  constructor() {}

  ngOnInit() {

  }

  initParentData() {
    this.showMoreBool = true; 
    this.initIcon();
  }

  showMoreFun() {
    this.showMoreBool = !this.showMoreBool;
    this.initIcon();
  }

  initIcon() {
    this.iconUrl = this.showMoreBool ? './../../../../../../assets/icons/up.svg' :  './../../../../../../assets/icons/down.svg' ;
  }
}