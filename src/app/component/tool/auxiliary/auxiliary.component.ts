import { Component, OnInit, ElementRef } from '@angular/core';
import { BasicComponent } from '../../basic/basic/basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';

@Component({
  selector: 'app-auxiliary',
  templateUrl: './auxiliary.component.html',
  styleUrls: ['./auxiliary.component.scss']
})
export class AuxiliaryComponent extends BasicComponent implements OnInit, SettingObjComponent{
  element: any;
  constructor(
    private elementRef: ElementRef
  ) {
    super();
  }

  ngOnInit() {
    this.element = this.elementRef.nativeElement;
    this.initData();
  }

  initData() {

    let topLineEle = this.element.querySelector('#line-top');
    console.log(topLineEle)
    topLineEle.setAttribute('x1', 0)
    topLineEle.setAttribute('y1', 0)
    topLineEle.setAttribute('width', '100%')
  }
}