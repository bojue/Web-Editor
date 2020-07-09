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


    setIndexDB(db) {
        this.DB= db;
    }

    getIndexDB() {
        console.log(this.DB);
        return this.DB
    }
}
