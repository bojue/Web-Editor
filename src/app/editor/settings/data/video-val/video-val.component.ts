import { Component, OnInit } from '@angular/core';
import { DataBasicComponent } from './node_modules/src/app/component/dev/basic/data-basic/data-basic.component';

@Component({
  selector: 'app-video-val',
  templateUrl: './video-val.component.html',
  styleUrls: ['./video-val.component.scss']
})
export class VideoValComponent  extends DataBasicComponent implements OnInit {
  data_type = 'video_val';

  constructor() { 
    super()
  }

  ngOnInit() {}
}
