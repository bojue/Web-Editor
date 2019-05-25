import { Component, OnInit } from '@angular/core';
import { DataBasicComponent } from '../../../comp-basic/data-basic/data-basic.component';

@Component({
  selector: 'app-audio-val',
  templateUrl: './audio-val.component.html',
  styleUrls: ['./audio-val.component.scss']
})
export class AudioValComponent  extends DataBasicComponent implements OnInit {
  data_type = 'audio_val';

  constructor() { 
    super()
  }

  ngOnInit() {
    this.initParentData();
  }
}
