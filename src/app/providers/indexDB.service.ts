import { Injectable, OnInit } from '@angular/core';
import { BaseHttpService } from '../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexDBService extends BaseHttpService implements OnInit{
     projects = [
        {
            "id": 1,
            "name": "运营报表系统",
            "appendName": "运营报表系统",
            "description": "运营报表数据",
            "status": 0,
            "vip_staus": 0,
            "creator": "1",
            "create_time": "2020-01-05T03:02:58.000Z",
            "update_time": "2020-01-05T03:02:58.000Z",
            "type": "cutome"
        }
       
    ]
    status =  [
        {
            "id": 1,
            "name": "已发布",
            "src": "assets/icons/state_official.svg",
            "description": "已发布"
        },
        {
            "id": 2,
            "name": "待发布",
            "src": "assets/icons/state_pres.svg",
            "description": "待发布"
        },
        {
            "id": 3,
            "name": "未发布",
            "src": "assets/icons/state_pre.svg",
            "description": "未发布"
        }
    ]
    
    pages = [
        {
            "id": 1,
            "projectId": 1,
            "name": "列表",
            "appendName": "列表",
            "description": "无",
            "status": 0,
            "creator_id": null,
            "create_time": "2020-01-05T06:38:23.000Z",
            "update_time": "2020-01-09T07:27:56.000Z",
            "type": null,
            "creator": 1,
            "style": "{'width':'1000','height':'800','background':'#fff'}",
            "componentList": "[]", 
            "vip_status": null,
            "width": 1200,
            "height": 700
        },
        {
            "id": 2,
            "projectId": 2,
            "name": "详情",
            "appendName": "0",
            "description": "0",
            "status": null,
            "creator_id": null,
            "create_time": "2020-03-26T16:38:44.000Z",
            "update_time": "2020-03-26T16:38:44.000Z",
            "type": "default",
            "creator": 1,
            "style": "0",
            "componentList": "[]",
            "vip_status": 1,
            "width": 1200,
            "height": 700
        }
    ]
    
    
    tempoIndexDBTab =[
        {
            name:"projects",
            keyPath:"id",
            data:this.projects
        }, {
            name:"status",
            keyPath:"id",
            data:this.status
        }, {
            name:"pages",
            keyPath:"id",
            data:this.pages
        }
    ]

    DB = {
        name:"tempoEditor",
        request:null,
        db:null,
        objectStore:null,
        customerObjectStore:null
    }
    
    constructor(
    private http: HttpClient
    ) {
    super(http, '')
    }

    ngOnInit() {
        
    }



    create_data() {
        let request = this.DB.db.transaction('pages', 'readwrite').objectStore('pages');
        request.add({
            "id": 4,
            "projectId": 1,
            "name": "列表",
            "appendName": "列表",
            "description": "无",
            "status": 0,
            "creator_id": null,
            "create_time": "2020-01-05T06:38:23.000Z",
            "update_time": "2020-01-09T07:27:56.000Z",
            "type": null,
            "creator": 1,
            "style": "{'width':'1000','height':'800','background':'#fff'}",
            "componentList": "[]", 
            "vip_status": null,
            "width": 1200,
            "height": 700
        });
        request.onsuccess = function(event) {
            console.log('数据写入成功');
        }
        request.onerror = function(event) {
            console.log('数据写入失败');
        }
        request.onabort = function(event) {
            console.log('事务回滚');
        }
    }

    getData() {
        let transaction = this.DB.db.transaction(['pages']);
        let objectStore = transaction.objectStore('pages');
        let request = objectStore.get(1); //传主键
        request.onerror = function(event) {
            console.log('事务失败');
        };
        request.onsuccess = function( event) {
            if (request.result) {
                console.log(request.result)
            } else {
                console.log('未获得数据记录');
            }
        };
    }

    getDataAll = function() {
        let objectStore = this.DB.db.transaction('pages').objectStore('pages');
        objectStore.openCursor().onsuccess = function(event) { 
            let cursor = event.target.result;
            if (cursor) {
                console.log(cursor.value)
                cursor.continue();
            }
        }
    }
    

    updateData() {
        var request = this.DB.db.transaction('pages').objectStore('pages').put({
            "id": 4,
            "projectId": 1,
            "name": "列表",
            "appendName": "列表",
            "description": "无",
            "status": 0,
            "creator_id": null,
            "create_time": "2020-01-05T06:38:23.000Z",
            "update_time": "2020-01-09T07:27:56.000Z",
            "type": null,
            "creator": 1,
            "style": "{'width':'1000','height':'800','background':'#fff'}",
            "componentList": "[]", 
            "vip_status": null,
            "width": 1200,
            "height": 700
        });
        request.onsuccess = function(event) {
            console.log('数据更新成功');
        }
        request.onerror = function(event) {
            console.log('数据更新失败');
        }
    }

    delete_db() {
        this.DB.db.close();
        window.indexedDB.deleteDatabase(this.DB.name)
    }

    // 初始化IndexDB
    initIndexDB = function() {
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
        }

        //连接数据库
        this.DB.request = indexedDB.open(this.DB.name, 2);
        this.DB.request.onerror = function(event) {
            console.log("Why didn't you allow my web app to use IndexedDB?! errorCode:", event.target.errorCode);
        };
        this.DB.request.onsuccess = function() {
            console.log('IndeDB opened successfully!')
        }
        this.DB.request.onupgradeneeded = function(event) {
            this.DB.db = event.target.result;
            for(let index in this.tempoIndexDBTab) {
                let dbTab = this.tempoIndexDBTab[index];
                this.createDBTab(dbTab);
            }
            this.initDBTabDate();
        };
    }

    /**
     * 创建数据库表
     * params: { name:String, keyPath:String, data:Array}
     * 
     */ 
    createDBTab = function(table) {
        this.DB.objectStore = this.DB.db.createObjectStore(table.name, { keyPath: table.keyPath });
        for(let item in table.data[0]) {
            this.DB.objectStore.createIndex(item, item, { unique: false });
        }
    }
    
    /**
     * 持久化数据库表初始数据
     * params: { name:String, keyPath:String, data:Array}
     * 
     */ 
    initDBTabDate = function() {
        this.DB.objectStore.transaction.oncomplete = function(event) {
            for(let index in this.tempoIndexDBTab) {
                let dbTab = this.tempoIndexDBTab[index];
                var customerObjectStore = this.DB.db.transaction(dbTab.name, "readwrite").objectStore(dbTab.name);
                dbTab.data.forEach(function(project) {
                    customerObjectStore.add(project);
                });
            }

        };
    }

    
}
