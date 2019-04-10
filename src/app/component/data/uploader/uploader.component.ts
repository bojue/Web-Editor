import { Component, OnInit, Input } from '@angular/core';
import { DataBasicComponent } from '../data-basic/data-basic.component';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent extends DataBasicComponent implements OnInit {
  constructor() {
    super()
  }

  ngOnInit() {

  }

}
