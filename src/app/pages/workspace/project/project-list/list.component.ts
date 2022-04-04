import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseHttpService } from '../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TempoToastrService } from 'src/app/core/provider/toaster/toastr.service';
import { SweetalertService } from 'src/app/core/provider/toaster/sweetalert.service';
import { PageAddComponent } from '../../page/page-add/page-add.component';
import { ProjectAddComponent } from '../project-add/project-add.component';
import { IndexDBService } from '../../../../core/provider/indexDB/indexDB.service';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseHttpService implements OnInit {
  projects:any[];
  states:any[];
  projectsUrl:string = 'projects';
  statesUrl:string = 'states';
  sub:Subscription;

  constructor(
      private http: HttpClient,
      private router:Router,
      private route: ActivatedRoute,
      private modalService: NgbModal,
      private toaster: TempoToastrService,
      private sweet:SweetalertService,
      private indexDBService:IndexDBService,
      public emitSerice: EmitSubService, 
  ) { 
    super(http, "projects")
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    forkJoin([this.indexDBService.getDataAll(this.projectsUrl)]).subscribe(res => {
      this.projects = res && res[0];
    })
  }

  toDetail(projectId: string, path: string) {
      this.router.navigate([`${path}/` ], {queryParams: {project: projectId}})
  }

  toAddProject() {
    let addProject = this.modalService.open(ProjectAddComponent);
    addProject.componentInstance.datas = {
      state:'addProject',
    };
    addProject.result.then((result) => {
      if(result === 'success') {
        this.getData();
      }
    });
  }

  delProject(id: string) {
    if(id !== null) {
      this.sweet.deleteAlert().then((res: any) => {
        if(res['value']) {
          forkJoin([this.indexDBService.deleteData(this.projectsUrl, id)]).subscribe(res => {
            this.getData();
            this.toaster.showToaster({
              state: this.toaster.STATE.SUCCESS,
              info:'项目删除成功'
            })
          },error => {
            this.toaster.showToaster({
              state: this.toaster.STATE.ERROR,
              info:'项目删除失败'
            })
          })
        }
      })
    }
  }

}
