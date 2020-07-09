import { Component, OnInit } from '@angular/core';
import { ProjectObject } from '../../model/project.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseHttpService } from 'src/app/core/provider/baseHttp/base-http.service';
import { IndexDBService } from '../../../../core/provider/indexDB/indexDB.service';
import { TempoToastrService } from 'src/app/core/provider/toaster/toastr.service';


@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent extends BaseHttpService implements OnInit {
  projectObj: ProjectObject;
  pagesUrl="projects";
  id:number;

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal,
    public indexDBService:IndexDBService,
    private toaster: TempoToastrService,
  ) { 
    super(http, 'project');
  }

  ngOnInit() {
    this.projectObj = new ProjectObject();
  }

  getPageParams() {
    this.projectObj.id = this.id + 1;
    this.projectObj['description'] =  this.projectObj['description'] || '无';
    return this.projectObj;
  }

  save() {
    let params = this.getPageParams();
    Observable.forkJoin([this.indexDBService.createData(this.pagesUrl, params)]).subscribe(res => {
      this.toaster.showToaster({
        state: this.toaster.STATE.SUCCESS,
        info:'项目创建成功'
      })
      this.modal.close('success');
    },error => {
      this.toaster.showToaster({
        state: this.toaster.STATE.ERROR,
        info:'创建失败'
      })
      this.modal.close("error");
    })
    
  }

  cancel() {
    this.modal.close("close");
  }

}
