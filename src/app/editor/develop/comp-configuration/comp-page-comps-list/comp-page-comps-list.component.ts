import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import * as _ from 'loadsh';

@Component({
  selector: 'app-comp-page-comps-list',
  templateUrl: './comp-page-comps-list.component.html',
  styleUrls: ['./comp-page-comps-list.component.scss']
})
export class CompPageCompsListComponent implements OnInit {
  @Input() pageComps:any;
  @Output() activeComp = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  initCompState(comp?:any) {
    if(comp['actived']) return;
    _.map(this.pageComps , item => {
      item['actived'] = false;
    })
    if(comp) {
      comp['actived'] = true;
    }
  }

  selectComp(comp) {
    this.initCompState(comp);
    this.activeComp.emit(comp);
  }
}
