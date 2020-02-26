import { Component, OnInit, ElementRef } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends BasicComponent implements OnInit, SettingObjComponent{
  lineCompDom:HTMLElement;
  svgDom:HTMLElement;
  lineDom:HTMLElement;
  height = 200;
  width = 200;
  constructor(
    private element: ElementRef
  ) {
    super();
  }

  ngOnInit() {
    this.initData();
    this.init();
  }

  init() {

    this.svgDom = document.getElementById('svg');
    this.svgDom.setAttribute('width', '200');
    this.svgDom.setAttribute('height', '200');

    this.lineDom = document.getElementById('line');
    this.lineDom.setAttribute('x1', '0')
    this.lineDom.setAttribute('y1', '0')
    this.lineDom.setAttribute('x2', this.style['x2'] - this.style['x2'] + '')
    this.lineDom.setAttribute('y2', this.style['y2'] - this.style['y2'] +'')
  }
}
 