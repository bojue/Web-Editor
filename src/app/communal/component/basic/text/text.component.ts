import { Component, OnInit ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Output() dragComponentStart = new EventEmitter();
  @Output() dragComponentEnd = new EventEmitter();

  inputObj: any;
  constructor() { }

  ngOnInit() {

  }

  dragComponetStart(event) {
    this.dragComponentStart.emit(event)
  }

  dragComponetEnd(event) {
    this.dragComponentEnd.emit(event)
  }

}
