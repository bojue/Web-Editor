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
  svgDom:SVGSVGElement;
  lineDom:SVGAElement;
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

  ngOnInit() {
    this.initData();
    this.svgDom = this.element.nativeElement.querySelector('svg');
    this.lineDom = this.element.nativeElement.querySelector('line');
    this.initStyle();
    this.initLine();
  }

  initStyle() {
    this.style['left'] = Math.min(this.style['x2'],this.style['x1']);
    this.style['top'] = Math.min(this.style['y2'] , this.style['y1']);
    this.style['width'] = this.style['x2'] - this.style['y1'];
    this.style['height'] = this.style['y2'] - this.style['y1'];
  }
  initLine() {
    // this.svgDom.setAttribute('width', `${this.style['width']}`)
    // this.svgDom.setAttribute('height',  `${this.style['height']}`)
    // this.lineDom.setAttribute('x1',  `${this.style['x1'] - this.style['left']}`)
    // this.lineDom.setAttribute('y1',  `${this.style['y1'] - this.style['top']}`)
    // this.lineDom.setAttribute('x2',  `${this.style['width'] }`)
    // this.lineDom.setAttribute('y2',  `${ this.style['y2'] -  this.style['left'] }`)
  }

  expandLineUnit(param, state?:string) {
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

  emitDrapFun(event, status) {
    if(!(this.eventSubObj && this.eventSubObj['clientX'] === event['clientX'] && 
      this.eventSubObj['clientY'] === event['clentY'])) {
        event['dynamicData'] = this.settingObj;
        this.dragLine(event, status)
      } 
      event.stopPropagation();
  }


  dragLine(e, status) {
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
      if(e.clientY  === 0 && e.clientY === 0) return;
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
    event['ignoreDragBool'] = true;
    event['dynamicData'] = this.settingObj;
    this.onChildComponentChange.emit(event);
  }
}
 