import { Component, OnInit, AfterContentInit, OnDestroy, ViewChild, ElementRef, ComponentFactoryResolver, Inject, forwardRef } from "@angular/core";
import { TempBasicComponent } from "src/app/component/basic/temp-basic/temp-basic.component";
import { ViewContainRefHostDirective } from "src/app/directive/view-contain-ref-host.directive";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { renderComponent } from "@angular/core/src/render3";
import { SettingObjComponent } from "src/app/module/setting-object.component";
import { DynamicComponentServiceService } from "src/app/code/provider/dynamic-component-service.service";
import { ViewChildContainRefHostDirective } from "src/app/directive/view-child-contain-ref-host.directive";
import { CompEmitService } from "src/app/providers/comp-emit.service";

@Component({
  selector: 'app-tabs-temp',
  templateUrl: './tabs-temp.component.html',
  styleUrls: ['./tabs-temp.component.scss']
})
export class TabsTempComponent extends TempBasicComponent implements OnInit,  AfterContentInit {
  @ViewChild("childContentComp", {read: ViewContainRefHostDirective }) viewContRef: ViewChildContainRefHostDirective;
  data:any;
  currentCompList: any;
  tempList:any;

  compList: any[];
  currentViewContRef:any;
  constructor(
    @Inject(forwardRef(() => DynamicComponentServiceService)) public dynamicService: DynamicComponentServiceService,
    private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private emitSerive: CompEmitService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private route: Router){
    super()
  }

  ngOnInit(): void {
    this.initData();
    this.getData();
  }

  ngAfterContentInit() {

  }

  test(index) {
     console.log('click',index, this.tempList)
     this.emitSerive.setChildComp(this.tempList[index])
  }


  compEvent(event) {
    this.onChildComponentChange.emit(event);
  }

  getData() {
    this.data = [
      {
        title:'电池',
  
      },
      {
        title:'机柜',
      }
    ]

    this.tempList = [  {
      compIndex: 2,
      name:'文本',
      type:'text',
      data: {
          text_val:'双击修改文本',
      },
      style: {
          height:100,
          width: 100,
          position: 'absolute',
          top:200,
          left:500,
          border: '',
          borderColor: '',
          borderWidth: 0,
          borderStyle: ''
        }
    },
    {
      compIndex: 3,
      name:'列表',
      type:'list',
      data: {
        api_val:'http://10.169.43.4:8100/api/dutys',
        list_val:{
            list_tit_val:'列表',
            list_cols_number_val:1,
            list_cols_width:[],
            list_style_grid_bool:true,
            list_cols:[{
                tit:"标题",
                width:10,
                prefix:"",
                suffix:""
            }]
        }
      },
      style: {
        height:400,
        width: 500,
        position: 'absolute',
        top:100,
        left:400,
        border: '',
        borderColor: '',
        borderWidth: 0,
        borderStyle: ''
        }
      },
    ]
  }
}
