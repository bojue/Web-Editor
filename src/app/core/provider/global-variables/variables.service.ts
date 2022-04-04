import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class VariablesService implements OnInit {
    DB:any;
    constructor() { }

    ngOnInit() {
        this.DB = {};
    }


    setIndexDB(db: any) {
        this.DB= db;
    }

    getIndexDB() {
        return this.DB
    }
}
