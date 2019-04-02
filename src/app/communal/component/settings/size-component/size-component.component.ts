import { SettingObject } from '../../../module/setting-object.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-size-component',
  templateUrl: './size-component.component.html',
  styleUrls: ['./size-component.component.scss']
})
export class SizeComponentComponent implements OnInit {
  @Input() style:SettingObject;

  constructor() { }

  ngOnInit() {
  }

}
