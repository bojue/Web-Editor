import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from 'src/app/core/provider/baseHttp/base-http.service';
import { PageObject } from '../../model/page.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin } from 'rxjs';
import * as _ from "loadsh";
import { IndexDBService } from 'src/app/core/provider/indexDB/indexDB.service';
import { TempoToastrService } from 'src/app/core/provider/toaster/toastr.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.scss','./../page-add/page-add.component.scss']
})
export class PageEditComponent extends BaseHttpService implements OnInit {
  page:PageObject;
  datas:any;
  pagesUrl:string = 'pages';

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal,
    public indexDBService:IndexDBService,
    private toaster: TempoToastrService,
  ) { 
    super(http, 'page')
  }

  ngOnInit() {
    this.page = this.datas['page']
  }

  save() {
    let params = _.cloneDeep(this.page);
    if('actived' in params) {
      delete params['actived'];
    }
    forkJoin[this.indexDBService.updateData(this.pagesUrl, params)]).subscribe(res => {
      this.toaster.showToaster({
        state: this.toaster.STATE.SUCCESS,
        info:'页面更新成功'
      })
      this.modal.close('success');
    },error => {
      this.toaster.showToaster({
        state: this.toaster.STATE.ERROR,
        info:'页面更新失败'
      })
      this.modal.close("error");
    })
  }

  cancel() {
    this.modal.close("close");
  }
}
