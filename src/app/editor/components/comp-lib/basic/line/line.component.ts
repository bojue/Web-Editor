import { Component, OnInit, ElementRef } from "@angular/core";
import { BasicComponent } from "../../../comp-basic/basic/basic.component";
import { SettingObjComponent } from "src/app/editor/module/setting-object.component";

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor(
    private element: ElementRef
  ) {
    super();
  }

  ngOnInit() {
    this.initData();
    this.getLine();
  }

  getLine() {
    let _qEle = "#canvas-line";
    let line_canvas = this.element.nativeElement.querySelector(_qEle);
    var ctx = line_canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.lineCap="butt";
    ctx.moveTo(0,0);
    ctx.lineTo(200,200);
    ctx.stroke();
  }
}
 