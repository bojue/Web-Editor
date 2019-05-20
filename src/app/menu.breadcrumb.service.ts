import { Injectable } from '@angular/core';

@Injectable()
export class MenuBreadCrumbService {
    private menu: any;
    constructor() {
        this.initData();
    }

    initData() {
        this.menu = [
            { name: '首页',path: './home', children:[]},
            { name: '设计',path: './develope', children:[]}
        ]
    }

    getMenuBreadCrumbs() {
        return this.menu;
    }
}