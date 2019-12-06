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
    if(comp['active']) return;
    _.map(this.pageComps , item => {
      item['active'] = false;
    })
    if(comp) {
      comp['active'] = true;
    }
  }

  selectComp(comp) {
    this.initCompState(comp);
    console.log(comp)
    this.activeComp.emit(comp);
  }
}
