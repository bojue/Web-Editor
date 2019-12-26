import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageList: any[];
  desciptions:any[];

  constructor(
    private router: Router
  ) {
    this.getDate();
   }

  ngOnInit() {

  }

  getDate() {
    this.desciptions = [
      {
        id:1,
        name:"页面生成",
        children:[
          {
            name:"拖拽创建组件",
            state:true,
            description:"拖拽布局系统优化了一部分，后续优化自动定位"
          },
          {
            name:"样式绑定",
            state:true,
            description:"样式可以动态设置"
          },
          {
            name:"静态数据绑定",
            state:true,
            description:"目前仅仅支持文本数据绑定"
          },
          {
            name:"动态数据绑定（restful API）",
            state:false,
            description:"目前没做后端，无法绑定RestFul"
          },
          {
            name:"事件绑定",
            state:false,
            description:"",
          }, 
          {
            name:"动画",
            state:false,
            description:"目前没有开发计划",
          }, 
          {
            name:"导入导出",
            state:false,
            description:"正在开发",
          },
          {
            name:"快捷键",
            state:true,
            description:"目前支持组态copy和位置快捷键",
          },
          {
            name:"预览",
            state:true,
            description:"支持预览",
          }
        ]
      },
      {
        id:2,
        name:"项目管理", 
        children:[
          {
            name:"项目管理",
            state:true,
            description:"目前完成了前端项目管理的骨架，需要后端配合"
          },
          {
            name:"页面管理",
            state:true,
            description:"已经支持页面切换，页面创建需要后台支持"
          }
        ]
      },
      {
        id:3,
        name:"开发模式",
        children:[
          {
            name:"开源",
            state:true,
            description:"前端已经开源"
          },
          {
            name:"服务端支持",
            state:false,
            description:"计划有一版Tempo编辑器对应的服务端项目"
          },
          {
            name:"在线试用",
            state:false,
            description:"目前没有部署上线"
          },
          {
            name:"二级域名",
            state:false,
            description:"无"
          },
          {
            name:"定制",
            state:false,
            description:"无"
          },
          {
            name:"本地部署",
            state:false,
            description:"无"
          }
        ]
      },
    ]
  }

  route(route = '/home') {
    this.router.navigate([route])
  }

}
