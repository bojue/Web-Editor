const projects = [
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
const status =  [
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

const pages = [
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


const tempoIndexDBTab =[
    {
        name:"projects",
        keyPath:"id",
        data:projects
    }, {
        name:"status",
        keyPath:"id",
        data:status
    }, {
        name:"pages",
        keyPath:"id",
        data:status
    }
]

const DB = {
    name:"tempoEditor",
    request:null,
    db:null,
    objectStore:null,
    customerObjectStore:null
}

// 初始化IndexDB
let initIndexDB = function() {
    // 数据库兼容
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
    }

    //连接数据库
    DB.request = indexedDB.open(DB.name, 2);
    DB.request.onerror = function(event) {
        alert("Why didn't you allow my web app to use IndexedDB?! errorCode:", event.target.errorCode);
    };
    DB.request.onsuccess = function() {
        console.log('IndeDB opened successfully!')
    }
    DB.request.onupgradeneeded = function(event) {
        DB.db = event.target.result;
        for(let index in tempoIndexDBTab) {
            let dbTab = tempoIndexDBTab[index];
            createDBTab(dbTab);
        }
        
    };
}

/**
 * 创建数据库表
 * params: { name:String, keyPath:String, data:Array}
 * 
 */ 

let createDBTab = function(table) {
    DB.objectStore = DB.db.createObjectStore(table.name, { keyPath: table.keyPath });
    for(let item in table.data[0]) {
        DB.objectStore.createIndex(item, item, { unique: false });
    }
    DB.objectStore.transaction.oncomplete = function(event) {
        var customerObjectStore = DB.db.transaction(table.name, "readwrite").objectStore(table.name);
        table.data.forEach(function(project) {
            customerObjectStore.add(project);
        });
    };
}


let init_db = function() {
    initIndexDB();
}

let delete_db = function() {
    window.indexedDB.deleteDatabase(DB.name)
}

let create_tab_data = function() {

}

let update_tab_data = function() {

}

let delete_tab_data = function() {

}

