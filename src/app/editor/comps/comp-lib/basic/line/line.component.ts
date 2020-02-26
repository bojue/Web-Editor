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
  changeY = 0;
  changeX = 0;
  x1 = 0;
  x2 = 0;
  y1 = 0;
  y2 = 0;
  dragCompStartX = 0;
  dragCompStartY = 0;
  constructor(
    private element: ElementRef
  ) {
    super();
  }

  ngOnInit() {
    this.initData();
    this.initLine();
  }
  initLine() {
    this.svgDom = document.getElementById('svg');
    this.svgDom.setAttribute('width', 1200 +'')
    this.svgDom.setAttribute('height',  750+'')

    this.lineDom = document.getElementById('line');
    this.lineDom.setAttribute('x1', this.style['x1'])
    this.lineDom.setAttribute('y1', this.style['y1'])
    this.lineDom.setAttribute('x2', this.style['x2'] +'')
    this.lineDom.setAttribute('y2', this.style['y2'] +'')
  }

  expandLineUnit(param, state?:string) {
    let startBool = state === 'start';
    let _x = startBool ? this.style['x1'] : this.style['x2'];
    let _y = startBool ? this.style['y1'] : this.style['y2'];
    return param === 'x' ? _x+ 'px' :   _y+ 'px';
  }

  emitDrapFun(event, status) {
    if(!(this.eventSubObj && this.eventSubObj['clientX'] === event['clientX'] && 
      this.eventSubObj['clientY'] === event['clentY'])) {
        event['dynamicData'] = this.settingObj;
        this.dragLine(event, status)
      } 
      event.stopPropagation();
  }


  dragLine(e, status) {
    e.stopPropagation();
    let eventType = e && e.type;
    if(eventType === 'dragstart') {
      this.x1 = this.style['x1'];
      this.y1 = this.style['y1'];
      this.x2= this.style['x2'];
      this.y2 = this.style['y2'];
      this.dragCompStartX = e.clientX;
      this.dragCompStartY = e.clientY;
      this.changeX = this.dragCompStartX - this.style['x1'];
      this.changeY = this.dragCompStartY - this.style['y1'];
      console.log('start', this.style['top'])
    }else if(eventType === 'drag') {
      console.log("status",status)
      if(e.clientY  === 0 && e.clientY === 0) return;
      let _x = e.clientX - this.x1 - this.changeX;
      let _y = e.clientY - this.y1 -  this.changeY;
      if(status === 'start') {
        this.style['x1'] = this.x1 +_x;
        this.style['y1'] = this.y1 + _y;
      }else if(status === 'end'){
        this.style['x2'] = this.x2 + _x;
        this.style['y2'] = this.y2 + _y;
      }

    } 
    this.initLine()
  }
}
 