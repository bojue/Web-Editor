import { Injectable } from '@angular/core';

@Injectable()
export class MenuBreadCrumbService {
    private menu: any;
    constructor() {
        this.initData();
    }

    initData() {
        this.menu = [
            { name: 'TEMPO',path: './home', children:[]}
        ]
    }

    getMenuBreadCrumbs() {
        return this.menu;
    }

}