import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/core/provider/baseHttp/base-http.service';
import { PageObject } from '../../model/page.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import * as _ from "loadsh";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss','./../page-add/page-add.component.scss']
})
export class PageEditComponent extends BaseHttpService implements OnInit {
  page:PageObject;
  datas:any;

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal
  ) { 
    super(http, 'page')
  }

  ngOnInit() {
    this.page = _.cloneDeep( this.datas['page'])
  }

  save() {
    Observable.forkJoin([this.update(this.page)]).subscribe(res => {
      this.modal.close('success');
    },error => {
      this.modal.close('error');
    })
  }

  cancel() {
    this.modal.close("close");
  }
}
