import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AppService } from "src/app/providers/app.service";
import { CompListService } from "../../provider/comp-list.service";
import { forkJoin, Subscription } from 'rxjs';
import { BaseHttpService } from '../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';  
import { CompStorageLocalService } from '../../provider/comp-storage-local.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { PageAddComponent } from '../../../pages/workspace/page/page-add/page-add.component';
import { TempoToastrService } from '../../../core/provider/toaster/toastr.service';
import { SweetalertService } from 'src/app/core/provider/toaster/sweetalert.service';
import { PageEditComponent } from '../../../pages/workspace/page/page-edit/page-edit.component';
import { IndexDBService } from 'src/app/core/provider/indexDB/indexDB.service';
import { EmitSubService } from 'src/app/core/emitSub/emit-sub.service';
import removeGhosting from 'remove-drag-ghosting';
@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent extends BaseHttpService implements OnInit ,OnDestroy{
  url: 'page';
  projectId:string;
  @Input() pageGridSetting: any;
  @Input() currnetPageComps : any;
  @Output() dragCompCreateCompEvent = new EventEmitter<any>();
  @Output() compChangeByDrag = new EventEmitter<any>()
  @Output() selCurrentPage = new EventEmitter<any>();
  @Output() activeCompFun = new EventEmitter<any>();
  @Output() addPage = new EventEmitter<any>();
  pages: any;
  pageId:number;
  compList:any[];
  showBool:boolean;
  currentTab:string;
  pagesUrl = 'pages';
  sub:Subscription;
  constructor(
    private http:HttpClient,
    private service: AppService,
    private activatedRoute: ActivatedRoute,
    private compListService: CompListService,
    private localService:CompStorageLocalService,
    private modalService: NgbModal,
    private toaster: TempoToastrService,
    private sweet:SweetalertService,
    private indexDBService:IndexDBService,
    public emitSerice: EmitSubService, 
  ) { 
    super(http, 'page');
  }

  ngOnInit() {
    this.getParams();
    this.initData();
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  getParams() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.projectId = res['project'];
      this.pageId = res['page'];
    })
  }
  
  initData() {
    this.getData();
    this.sub = this.emitSerice.getEmitEvent().subscribe(res => {
      if(res && res['type'] === 'update-projects') {
        this.getData();
      }
    });
  }

  getData() {
    let query = {
      prop:'projectId',
      val:parseInt(this.projectId)
    }
    forkJoin([this.indexDBService.getDataAll(this.pagesUrl,query)]).subscribe(res => {
      this.pages = res && res[0];
      this.initPage();
    })
    this.showBool = true;
    this.compList = this.compListService.getCompList();
    this.selectTabs();
    
  }

  initPage() {
    let page: any = _.find(this.pages, {id: Number(this.pageId)});
    if(page) {
      page['actived'] = true;
      this.seledCurrentPage(page, 'init');
    }
  }

  // 拖拽创建组件
  dragCompCreateComp(event: any){
    removeGhosting(event)
    this.dragCompCreateCompEvent.emit(event);
  }

  changeByDrag(event: any) {
    removeGhosting(event)
    this.compChangeByDrag.emit(event);
  }

  showGrigFun() {
    this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
  }

  selectTabs(tab:string = 'tabList') {
    this.currentTab = tab;
  }

  //选择当前页面的组件列表
  seledCurrentPage(page: any, state?: string) {
    if(state !== 'init') {
      this.localService.clearEditorLocalStorage();
    } 
    this.selCurrentPage.emit(page);
  }

  activeComp(comp: any) {
    this.activeCompFun.emit(comp);
  }

  createPage() {
    this.addPageComponet();
    // this.addPage.emit()
  }

  addPageComponet() {
    let addComp = this.modalService.open(PageAddComponent);
    addComp.componentInstance.datas = {
      state:'addPage'
    };
    addComp.result.then((result) => {
      if(result === 'success') {
        this.initData();
      }else {
      
      }
  
    })
  }

  editorCurrentPage(event: any) {
    let comp = this.modalService.open(PageEditComponent);
    comp.componentInstance.datas = {
      state:'editorPage',
      page:event
    };
    comp.result.then((result) => {
      if(result === 'success') {
        this.initData();
      }else {
      
      }
  
    }, (reason) => {
    });
  }

  delCurrentPage(page: any) {
    let id = page['id'];
    if(id !== null) {
      this.sweet.deleteAlert().then(res => {
        if(res['value']) {
          forkJoin([this.indexDBService.deleteData(this.pagesUrl, id)]).subscribe(res => {
            this.initData();
            this.toaster.showToaster({
              state: this.toaster.STATE.SUCCESS,
              info:'页面删除成功'
            })
          },error => {
            this.toaster.showToaster({
              state: this.toaster.STATE.ERROR,
              info:'页面删除失败'
            })
          })
        }
      })
    }
  }
}
