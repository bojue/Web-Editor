import { Component, OnInit, ElementRef } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/model/setting-object.interface";
import removeGhosting from 'remove-drag-ghosting';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends BasicComponent implements OnInit, SettingObjComponent{
  lineCompDom:HTMLElement;
  svgDom:SVGSVGElement;
  pathDom:SVGAElement;
  LINE_DEF_WIDTH = 200;
  LINE_DEF_HEIGHT = 200;
  height = 200;
  width = 200;
  changeY = 0;
  changeX = 0;

  x1 = 0;
  x2 = 0;
  y1 = 0;
  y2 = 0;
  left = 0;
  top = 0;
  dragCompStartX = 0;
  dragCompStartY = 0;
  constructor(
    private element: ElementRef
  ) {
    super();
  }

  override ngOnInit() {
    this.initData();
    this.svgDom = this.element.nativeElement.querySelector('svg');
    this.pathDom = this.element.nativeElement.querySelector('path');
    this.initStyle();
    this.initLine();
  }

  initStyle() {
    this.style['width'] = this.LINE_DEF_WIDTH;
    this.style['height'] = this.LINE_DEF_HEIGHT;
    this.style['x1'] = this.style['left'];
    this.style['y1'] = this.style['top'];
    this.style['x2'] = this.style['left'] + this.style['width'];
    this.style['y2'] = this.style['top'] + this.style['height'];
  }
  initLine() {
    this.svgDom.setAttribute('width', `${this.style['width']}`);
    this.svgDom.setAttribute('height',  `${this.style['height']}`);
    let xVal = this.style['x2'] - this.style['x1'];
    let yVal = this.style['y2'] - this.style['y1'];

    let _x1 = xVal > 0 ? 0 : this.style['width'];
    let _y1 = yVal > 0 ? 0: this.style['height'];
    let _x2 = xVal > 0 ? this.style['width'] : 0;
    let _y2 = yVal > 0 ? this.style['height'] : 0;
    this.pathDom.setAttribute('d', `M${_x1}, ${_y1}, L${_x2},  ${_y2}`)

  }

  expandLineUnit(param: string, state?:string) {
    let xVal = this.style['x2'] - this.style['x1'];
    let yVal = this.style['y2'] - this.style['y1'];
    let startBool = state === 'beigin';
    let _x = startBool ?  
            xVal  > 0 ? 0 : this.style['width']: 
            xVal  > 0 ? xVal : 0;
    let _y = startBool ? 
            yVal > 0 ? 0 : this.style['height']:
            yVal > 0 ? yVal :0;
    return param === 'x' ? _x+ 'px' :   _y+ 'px';
  }

  override emitDrapFun(event: any, status: any) {
    removeGhosting(event)
    if(!(this.eventSubObj && this.eventSubObj['clientX'] === event['clientX'] && 
      this.eventSubObj['clientY'] === event['clentY'])) {
        event['dynamicData'] = this.settingObj;
        this.dragLine(event, status)
      } 
      event.stopPropagation();
  }


  dragLine(e: any, status: any) {
    removeGhosting(e)
    let eventType = e && e.type;
    if(eventType === 'dragstart') {
      this.x1 = this.style['x1'];
      this.y1 = this.style['y1'];
      this.x2= this.style['x2'];
      this.y2 = this.style['y2'];
      this.top = this.style['top'];
      this.left = this.style['left'];
      this.dragCompStartX = e.clientX;
      this.dragCompStartY = e.clientY;
      this.changeX = this.dragCompStartX - this.style['x1'];
      this.changeY = this.dragCompStartY - this.style['y1'];
    }else if(eventType === 'drag') {
      let _x = e.clientX - this.x1 - this.changeX;
      let _y = e.clientY - this.y1 -  this.changeY;
      if(status === 'startingPoint') {
        this.style['x1'] = this.x1 +_x;
        this.style['y1'] = this.y1 + _y;
        if(this.style['x2'] - this.style['x1'] > 0 ) {
          this.style['left'] = this.style['x1']
          this.style['width'] = this.style['x2'] - this.style['x1'];
        } else {
          this.style['width'] = this.style['x1'] - this.style['x2'];
          this.style['left'] = this.style['x2']; 
        }

        if(this.style['y2'] - this.style['y1'] > 0 ) {
          this.style['top'] = this.style['y1'];
          this.style['height'] = this.style['y2'] - this.style['y1']
        } else {
          this.style['top'] = this.style['y2'];
          this.style['height'] = this.style['y1'] - this.style['y2']
        }
      }else if(status === 'endPoint'){
        this.style['x2'] = this.x2 + _x;
        this.style['y2'] = this.y2 + _y;
        if(this.style['x2'] - this.style['x1'] > 0 ) {
          this.style['left'] = this.style['x1']
          this.style['width'] = this.style['x2'] - this.style['x1'];
        } else {
          this.style['width'] = this.x1 - this.style['x2'];
          this.style['left'] = this.style['x2']; 
        }

        if(this.style['y2'] - this.style['y1'] > 0 ) {
          this.style['top'] = this.style['y1'];
          this.style['height'] = this.style['y2'] - this.style['y1']
        } else {
          this.style['top'] = this.style['y2'];
          this.style['height'] = this.style['y1'] - this.style['y2']
        }
       
      }

    } 
    this.initLine()
    this.onChildComponentChange.emit(event);
  }
}
 