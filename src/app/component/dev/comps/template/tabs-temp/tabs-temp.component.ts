import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver, Inject, forwardRef, AfterContentInit } from "@angular/core";
import * as _ from "lodash";
import { TempBasicComponent } from "src/app/component/basic/temp-basic/temp-basic.component";
import { ViewContainRefHostDirective } from "src/app/directive/view-contain-ref-host.directive";
import { ViewChildContainRefHostDirective } from "src/app/directive/view-child-contain-ref-host.directive";
import { DynamicComponentServiceService } from "src/app/code/provider/dynamic-component-service.service";
import { ActivatedRoute, Router } from "@angular/router";
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
          text_val:'电池 dashboard',
      },
      style: {
          height:100,
          width: 200,
          position: 'absolute',
          top:100,
          left:420,
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
            list_tit_val:'机柜列表',
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
        top:80,
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
