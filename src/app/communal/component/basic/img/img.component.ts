import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  @Output() dragComponentStart = new EventEmitter;
  @Output() dragComponentEnd = new EventEmitter;

  inputObj: any;


  constructor() { }

  ngOnInit() {
 
  }

  dragComponetStart(event){
    this.dragComponentStart.emit(event)
  }

  dragComponetEnd(event) {
    this.dragComponentEnd.emit(event)
  }

}
