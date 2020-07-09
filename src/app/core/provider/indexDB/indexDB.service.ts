import { Injectable, OnInit } from '@angular/core';
import { BaseHttpService } from '../baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { VariablesService } from '../global-variables/variables.service';

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
    
    DB:any;
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
    DB_NAME='tempoEditor';
    constructor(
        private http: HttpClient,
        public variables: VariablesService
    ) {
    super(http, '')
    }

    ngOnInit() {
        
    }



    create_data() {
        let db = this.variables.getIndexDB();
        if(!db) return;
        let request = db.transaction('pages', 'readwrite').objectStore('pages')
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
    }

    getData() {
        let db = this.variables.getIndexDB();
        if(!db) return;
        let transaction = db.transaction(['pages']);
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

    getDataAll(api:string) {
        let res = [];
        let db = this.variables.getIndexDB();
        if(!db) return res;
        let promise = new Promise(((resolve, reject) => {
            let objectStore = db.transaction(api).objectStore(api);
            let request = objectStore.openCursor();
            request.onerror = error => { reject(error)}
            request.onsuccess = event => {
                let cursor = event.target.result;
                if (cursor) {
                    res.push(cursor.value);
                    cursor.continue();
                }else {
                    resolve(res);
                }
            }
        }))
        return promise;

      
    }
    

    updateData() {
        let db = this.variables.getIndexDB();
        if(!db) return;
        var request = db.transaction('pages').objectStore('pages').put({
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

    delete_db(name) {
        let db = this.variables.getIndexDB();
        if(!db) return;
        db.close();
        window.indexedDB.deleteDatabase(name)
    }

    // 初始化IndexDB
    initIndexDB = function() {
        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
        }
        let DB:any;
        let that = this;

        //连接数据库
        let request = indexedDB.open(this.DB_NAME, 2);
        request.onerror = function(event:any) {
            console.log("Why didn't you allow my web app to use IndexedDB?! errorCode:", event.target.errorCode);
        };
        request.onsuccess = function(event:any) {
            let db = event.target.result;
            that.catchStorage(db);
            console.log('IndeDB opened successfully!')
        }

        request.onupgradeneeded = function(event:any) {
            console.log('IndeDB onupgradeneeded!')
            let db = event.target.result;
            that.catchStorage(db);
            let objectStore:any;
            for(let index in that.tempoIndexDBTab) {
                let dbTab = that.tempoIndexDBTab[index];
                objectStore = that.createDBTab(dbTab, db);
            }
            that.initDBTabDate(objectStore, db, that.tempoIndexDBTab);
        };
    }

    catchStorage(db) {
        this.variables.setIndexDB(db);
    }

    /**
     * 创建数据库表
     * params: { name:String, keyPath:String, data:Array}
     * 
     */ 
    createDBTab = function(table, db) {
        let objectStore = db.createObjectStore(table.name, { keyPath: table.keyPath });
        for(let item in table.data[0]) {
            objectStore.createIndex(item, item, { unique: false });
        }
        return objectStore;
    }
    
    /**
     * 持久化数据库表初始数据
     * params: { name:String, keyPath:String, data:Array}
     * 
     */ 
    initDBTabDate(objectStore, db, tempoIndexDBTab) {
        let that = this;
        objectStore.transaction.oncomplete = function() {
            for(let index in that.tempoIndexDBTab) {
                let dbTab = tempoIndexDBTab[index];
                let customerObjectStore = db.transaction(dbTab.name, "readwrite").objectStore(dbTab.name);
                dbTab.data.forEach(function(project) {
                    customerObjectStore.add(project);
                });
            }

        };
    }

    
}
