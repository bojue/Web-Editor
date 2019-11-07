import { Injectable } from '@angular/core';

@Injectable()
export class MenuBreadCrumbService {
    private menu: any;
    designPath:string;
    constructor() {
        this.initData();
    }

    initData() {
        this.designPath = '/workspace';
        this.menu = [
            { name: 'TEMPO',path: './home', children:[]}
        ]
    }

    getMenuBreadCrumbs() {
        return this.menu;
    }

    getDesignPath() {
        return this.designPath;
    }
}