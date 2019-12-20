(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/editor/view/view.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/editor/view/view.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n  <div class=\"view-icon\">\n    <img class=\"view\" src=\"../../../assets/icons/preview.svg\" title=\"当前预览模式\" alt=\"预览模式\">\n  </div>\n  <div class=\"content\">\n      <ng-template view-contain-ref #contentComp ></ng-template>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <div class=\"body\">\n        <div class=\"val\">\n            基于 angular2 开发的 Web 页面生成工具\n        </div>\n        <div class=\"description\">\n            <div class=\"des\" *ngFor=\"let item of desciptions;\">\n                <div class=\"tit\">\n                    <span class=\"name\">{{item['name']}}</span>\n                </div>\n                <ng-container *ngFor=\"let child of item['children'];\">\n                    <div class=\"content\">\n                        <div class=\"child\" [ngClass]=\"{disabled:!child['state']}\">\n                            <span class=\"title\">{{child['name']}}</span>\n                            <span class=\"state\">\n                                <img *ngIf=\"child['state']\" src=\"./../../../assets/imgs/true.svg\" alt=\"\">\n                            </span>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workspace/project-detail/detail.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workspace/project-detail/detail.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-detail-body\">\n    详情\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/workspace/project-list/list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/workspace/project-list/list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-list-body\">\n        <div class=\"projects\">\n          <div class=\"tit\">\n            <span class=\"title\">项目</span>\n            <span class=\"description\">\n              <ng-container *ngFor=\"let item of stateArr;\">\n                  <span class=\"item\">\n                  <img src=\"{{item['src']}}\" alt=\"\">\n                  <span class=\"val\">{{item['val']}}</span>\n                </span>\n              </ng-container>\n      \n            </span>\n          </div>\n          <div class=\"list\" >\n            <ng-container *ngFor=\"let item of projectArr;\">\n              <div class=\"project\">\n                <div class=\"more\">\n                  <span class=\"state\" *ngIf=\"item['state']\"><img src=\"./../../../../assets/icons/state_{{item['state']}}.svg\" alt=\"\"></span>\n                  <img class=\"more\" src=\"./../../../../assets/icons/more.svg\" alt=\"\">\n                </div>\n              \n                <div class=\"name\" >\n                  <span>{{item['name']}}</span>\n                </div>\n                <div class=\"detail\">\n                   <div class=\"description\">\n                      简介:\n                      {{item['desciption'] || '无'}}\n                   </div>\n                   <div class=\"operating-append\">\n                     <div class=\"item edit\" (click)=\"toDetail(item['id'], 'develop')\">编辑项目</div>\n                     <div class=\"item info\" (click)=\"toDetail(item['id'], 'detail')\">详情</div>\n                   </div>\n      \n                </div>\n                <div class=\"operating\">\n                  <div class=\"item del\" title=\"删除\"><img src=\"./../../../assets/icons/del.svg\" alt=\"删除\"></div>\n                  <div class=\"item run\" title=\"运行\"><img src=\"./../../../assets/icons/run-project.svg\" alt=\"运行\"></div>\n                </div>\n              </div>\n            </ng-container>\n            <div class=\"project add-pro\" title=\"添加项目\">\n                <div class=\"operating item-add\" title=\"\"><img class=\"add\" src=\"./../../../assets/icons/add-project.svg\" alt=\"添加项目\"></div>\n            </div>\n      \n          </div>\n        </div>\n      </div>"

/***/ }),

/***/ "./src/app/editor/directive/view-contain-ref-host.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/editor/directive/view-contain-ref-host.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ViewContainRefHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContainRefHostDirective", function() { return ViewContainRefHostDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewContainRefHostDirective = class ViewContainRefHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
};
ViewContainRefHostDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
ViewContainRefHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[view-contain-ref]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], ViewContainRefHostDirective);



/***/ }),

/***/ "./src/app/editor/view/view.component.scss":
/*!*************************************************!*\
  !*** ./src/app/editor/view/view.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .view {\n  position: relative;\n  display: block; }\n  :host /deep/ .view .view-icon {\n    position: absolute;\n    right: 30px;\n    top: -43px; }\n  :host /deep/ .view .view-icon img.view {\n      padding: 5px;\n      border-radius: 50%;\n      width: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9lZGl0b3Ivdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQUh0QjtJQUtZLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBUyxFQUFBO0VBUHJCO01BU2dCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IC9kZWVwLyB7IFxuICAgIC52aWV3IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLnZpZXctaWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgICAgIHRvcDotNDNweDtcbiAgICAgICAgICAgIGltZy52aWV3IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/editor/view/view.component.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/view/view.component.ts ***!
  \***********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directive/view-contain-ref-host.directive */ "./src/app/editor/directive/view-contain-ref-host.directive.ts");
/* harmony import */ var src_app_providers_emit_sub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/emit-sub.service */ "./src/app/providers/emit-sub.service.ts");
/* harmony import */ var _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/comp-dynamic-create.service */ "./src/app/editor/provider/comp-dynamic-create.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let PreviewComponent = class PreviewComponent {
    constructor(emitSerive, elementRef, dynamicService, activatedRoute, componentFactoryResolver, route) {
        this.emitSerive = emitSerive;
        this.elementRef = elementRef;
        this.dynamicService = dynamicService;
        this.activatedRoute = activatedRoute;
        this.componentFactoryResolver = componentFactoryResolver;
        this.route = route;
    }
    ngOnInit() {
        let compString = this.activatedRoute.snapshot.paramMap.get('queryParams');
        this.compList = JSON.parse(compString);
        let parentCompList = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.compList);
        this.eventEmitter = this.emitSerive.getEmitEventSub().subscribe(res => {
            if (res && res['type'] === 'child-comp') {
                let data = res['data'];
                let currentList = lodash__WEBPACK_IMPORTED_MODULE_6__["concat"](parentCompList, data);
                this.initViewContRef();
                this.updateCompList(currentList);
            }
        });
    }
    ngOnDestroy() {
        if (this.currentViewContRef) {
            this.currentViewContRef.clear();
        }
    }
    ngAfterContentInit() {
        this.currentViewContRef = this.viewContRef.viewContainerRef;
        this.updateCompList();
    }
    updateCompList(list) {
        this.components = this.dynamicService.getCompList(list || this.compList);
        lodash__WEBPACK_IMPORTED_MODULE_6__["map"](this.components, (comp) => {
            this.renderComponent(comp);
        });
    }
    initViewContRef() {
        let len = this.components.length;
        for (let i = 0; i < len; i++) {
            this.currentViewContRef.clear(i);
        }
    }
    renderComponent(currentComponent) {
        let compFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent.compType);
        let compRef = this.currentViewContRef.createComponent(compFactory);
        let compInstance = compRef.instance;
        compInstance.settingObj = currentComponent.settingObj;
        (compInstance).onChildComponentChange.subscribe((e) => {
            let type = e && e['type'];
            let eventSettingObj = e && e['dynamicData'] && e['dynamicData']['event'];
            if (eventSettingObj) {
                this.eventHandle(type, eventSettingObj);
            }
        });
    }
    eventHandle(type, eventObj) {
        switch (type) {
            case 'click':
                if (eventObj['routeBool']) {
                    let params = eventObj['route'];
                    let link = params['route_link'];
                    this.routerLink(link, params);
                }
                else if (eventObj[type + 'Bool']) {
                    console.log("点击事件处理，目前只做了路由处理");
                }
                break;
            default:
                return;
        }
    }
    routerLink(url, params) {
        if (url !== undefined && url !== null) {
            this.route.navigate([url, { queryParams: JSON.stringify(params) }]);
        }
    }
};
PreviewComponent.ctorParameters = () => [
    { type: src_app_providers_emit_sub_service__WEBPACK_IMPORTED_MODULE_4__["EmitSubService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ViewContainRefHostDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directive_view_contain_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ViewContainRefHostDirective"])
], PreviewComponent.prototype, "viewContRef", void 0);
PreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/editor/view/view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/editor/view/view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_emit_sub_service__WEBPACK_IMPORTED_MODULE_4__["EmitSubService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
        _provider_comp_dynamic_create_service__WEBPACK_IMPORTED_MODULE_5__["CompDynamicCreateService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], PreviewComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ ul, :host /deep/ li {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n:host /deep/ .home {\n  position: relative; }\n\n:host /deep/ .home .route-list {\n    position: relative;\n    display: grid;\n    grid-template-columns: 10% 10% 10% 10%;\n    grid-column-gap: 5px; }\n\n:host /deep/ .home .route-list .item {\n      cursor: pointer;\n      height: 40px;\n      line-height: 40px;\n      text-align: center;\n      word-spacing: 10px;\n      border: 1px solid #cccccc; }\n\n:host /deep/ .home .route-list .item:hover {\n        border-color: black; }\n\n:host /deep/ .body {\n  display: block;\n  color: #555;\n  width: 100%;\n  height: 100%; }\n\n:host /deep/ .body .val {\n    padding: 50px;\n    font-size: 20px;\n    text-align: center; }\n\n:host /deep/ .description {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  width: 900px;\n  left: 50%;\n  margin-left: -450px; }\n\n:host /deep/ .description .des {\n    width: 200px;\n    display: inline-block;\n    position: relative;\n    text-align: left;\n    margin: 0 auto;\n    padding: 10px 30px;\n    border: 1px solid #ccc; }\n\n:host /deep/ .description .des .tit {\n      font-size: 16px;\n      font-weight: 600;\n      padding: 10px 10px 10px 0;\n      border-bottom: 1px dashed #aaa; }\n\n:host /deep/ .description .des .content {\n      margin-top: 10px; }\n\n:host /deep/ .description .des .child {\n      font-size: 12px;\n      position: relative;\n      height: 24px;\n      line-height: 24px; }\n\n:host /deep/ .description .des .child.disabled {\n        color: #ccc; }\n\n:host /deep/ .description .des .child .state {\n        position: absolute;\n        right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0I7RUFDaEIsU0FBUTtFQUNSLFVBQVMsRUFBQTs7QUFKakI7RUFPUSxrQkFBa0IsRUFBQTs7QUFQMUI7SUFTWSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNDQUF1QztJQUN2QyxvQkFBb0IsRUFBQTs7QUFaaEM7TUFjZ0IsZUFBZTtNQUNmLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBQTs7QUFuQnpDO1FBcUJvQixtQkFBbUIsRUFBQTs7QUFyQnZDO0VBMkJRLGNBQWM7RUFDZCxXQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVksRUFBQTs7QUE5QnBCO0lBZ0NZLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBbEM5QjtFQXNDUSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxZQUFXO0VBQ1gsU0FBUztFQUNULG1CQUFtQixFQUFBOztBQTNDM0I7SUE2Q1ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsc0JBQXFCLEVBQUE7O0FBbkRqQztNQXFEZ0IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsOEJBQThCLEVBQUE7O0FBeEQ5QztNQTJEZ0IsZ0JBQWdCLEVBQUE7O0FBM0RoQztNQThEZ0IsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osaUJBQWlCLEVBQUE7O0FBakVqQztRQW1Fb0IsV0FBVyxFQUFBOztBQW5FL0I7UUFzRW9CLGtCQUFrQjtRQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC8geyBcbiAgICB1bCxsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5ob21lIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAucm91dGUtbGlzdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMTAlIDEwJSAxMCUgO1xuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgd29yZC1zcGFjaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ib2R5IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiM1NTU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC52YWwge1xuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gICAgICAgIHdpZHRoOjkwMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDUwcHg7XG4gICAgICAgIC5kZXMge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgLnRpdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNhYWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGlsZCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.getDate();
    }
    ngOnInit() {
    }
    getDate() {
        this.desciptions = [
            {
                id: 1,
                name: "页面生成",
                children: [
                    {
                        name: "拖拽创建组件",
                        state: true,
                        description: "拖拽布局系统优化了一部分，后续优化自动定位"
                    },
                    {
                        name: "样式绑定",
                        state: true,
                        description: "样式可以动态设置"
                    },
                    {
                        name: "静态数据绑定",
                        state: true,
                        description: "目前仅仅支持文本数据绑定"
                    },
                    {
                        name: "动态数据绑定（restful API）",
                        state: false,
                        description: "目前没做后端，无法绑定RestFul"
                    },
                    {
                        name: "事件绑定",
                        state: false,
                        description: "",
                    },
                    {
                        name: "动画",
                        state: false,
                        description: "目前没有开发计划",
                    },
                    {
                        name: "导入导出",
                        state: false,
                        description: "正在开发",
                    },
                    {
                        name: "快捷键",
                        state: true,
                        description: "目前支持组态copy和位置快捷键",
                    },
                    {
                        name: "预览",
                        state: true,
                        description: "支持预览",
                    }
                ]
            },
            {
                id: 2,
                name: "项目管理",
                children: [
                    {
                        name: "项目管理",
                        state: false,
                        description: "目前完成了前端项目管理的骨架，需要后端配合"
                    },
                    {
                        name: "页面管理",
                        state: true,
                        description: "已经支持页面切换，页面创建需要后台支持"
                    }
                ]
            },
            {
                id: 3,
                name: "开发模式",
                children: [
                    {
                        name: "开源",
                        state: true,
                        description: "前端已经开源"
                    },
                    {
                        name: "服务端支持",
                        state: false,
                        description: "计划有一版Tempo编辑器对应的服务端项目"
                    },
                    {
                        name: "在线试用",
                        state: false,
                        description: "目前没有部署上线"
                    },
                    {
                        name: "二级域名",
                        state: false,
                        description: "无"
                    },
                    {
                        name: "定制",
                        state: false,
                        description: "无"
                    },
                    {
                        name: "本地部署",
                        state: false,
                        description: "无"
                    }
                ]
            },
        ];
    }
    route(route = 'home') {
        this.router.navigate([route]);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _core_code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/code.module */ "./src/app/core/code.module.ts");
/* harmony import */ var _editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editor/provider/comp-config.service */ "./src/app/editor/provider/comp-config.service.ts");
/* harmony import */ var _pages_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing.modules */ "./src/app/pages/pages.routing.modules.ts");
/* harmony import */ var _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workspace/workspace.module */ "./src/app/pages/workspace/workspace.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
        ],
        imports: [
            _core_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"],
            _pages_routing_modules__WEBPACK_IMPORTED_MODULE_5__["PageRoutingModule"],
            _workspace_workspace_module__WEBPACK_IMPORTED_MODULE_6__["WorkspaceModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]
        ],
        providers: [
            _editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__["CompConfigService"],
        ],
        bootstrap: [],
        entryComponents: [],
        exports: [
            _pages_routing_modules__WEBPACK_IMPORTED_MODULE_5__["PageRoutingModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/pages/pages.routing.modules.ts":
/*!************************************************!*\
  !*** ./src/app/pages/pages.routing.modules.ts ***!
  \************************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/home/home.component.ts");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'workspace', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./workspace/workspace.module */ "./src/app/pages/workspace/workspace.module.ts")).then(m => m.WorkspaceModule), },
];
let PageRoutingModule = class PageRoutingModule {
};
PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/workspace/project-detail/detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/workspace/project-detail/detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dvcmtzcGFjZS9wcm9qZWN0LWRldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/workspace/project-detail/detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/workspace/project-detail/detail.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailComponent = class DetailComponent {
    constructor() {
        this.projectArr = [{
                id: 1,
                name: '报表系统',
                desciption: "",
                state: 'official'
            }, {
                id: 2,
                name: '销售Dashboard',
                desciption: "",
                state: 'pre'
            }, {
                id: 3,
                name: "双十一销售监控系统",
                desciption: "监控软件测试Demo,主要展示数据统计报表",
                state: ''
            }];
        this.stateArr = [
            {
                src: './../../../assets/icons/state_official.svg',
                val: "已发布"
            },
            {
                src: './../../../assets/icons/state_pre.svg',
                val: "待发布"
            }
        ];
    }
    ngOnInit() {
    }
};
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workspace/project-detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detail.component.scss */ "./src/app/pages/workspace/project-detail/detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DetailComponent);



/***/ }),

/***/ "./src/app/pages/workspace/project-list/list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/workspace/project-list/list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .project-list-body {\n  position: relative; }\n  :host /deep/ .project-list-body .projects {\n    position: relative;\n    margin: 20px; }\n  :host /deep/ .project-list-body .projects .tit {\n      margin: 15px;\n      font-size: 16px;\n      border-bottom: 1px dashed #dddddd; }\n  :host /deep/ .project-list-body .projects .tit .title {\n        display: inline-block;\n        height: 40px;\n        line-height: 40px;\n        border-left: 5px solid rgba(255, 0, 0, 0.9);\n        padding-left: 15px;\n        color: rgba(68, 68, 68, 0.5); }\n  :host /deep/ .project-list-body .projects .tit .description {\n        position: absolute;\n        right: 10px;\n        font-size: 12px; }\n  :host /deep/ .project-list-body .projects .tit .description .item {\n          width: 80px; }\n  :host /deep/ .project-list-body .projects .tit .description .item img {\n            width: 20px;\n            position: relative;\n            top: 5px; }\n  :host /deep/ .project-list-body .projects .tit .description .item .val {\n            display: inline-block;\n            width: 50px;\n            text-align: center; }\n  :host /deep/ .project-list-body .projects .list {\n      margin-top: 10px; }\n  :host /deep/ .project-list-body .projects .list .project {\n        cursor: pointer;\n        display: inline-block;\n        text-align: center;\n        position: relative;\n        width: 150px;\n        height: 200px;\n        border: 1px solid #eeeeee;\n        margin: 15px; }\n  :host /deep/ .project-list-body .projects .list .project:hover {\n          border-color: rgba(255, 0, 0, 0.4); }\n  :host /deep/ .project-list-body .projects .list .project .more img.more {\n          position: absolute;\n          top: 3px;\n          right: 3px;\n          width: 30px;\n          height: 15px; }\n  :host /deep/ .project-list-body .projects .list .project .state {\n          position: absolute;\n          top: 3px;\n          left: 3px; }\n  :host /deep/ .project-list-body .projects .list .project .state img {\n            height: 20px;\n            width: 20px; }\n  :host /deep/ .project-list-body .projects .list .project .name {\n          font-size: 13px;\n          margin-top: 15px;\n          margin-bottom: 15px;\n          height: 30px;\n          line-height: 30px;\n          -moz-columns: #555555;\n               columns: #555555; }\n  :host /deep/ .project-list-body .projects .list .project .detail {\n          text-align: left;\n          padding: 15px 10px;\n          cursor: pointer;\n          position: relative;\n          color: #888888;\n          display: inline-block;\n          height: 69px;\n          overflow: hidden;\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: 3; }\n  :host /deep/ .project-list-body .projects .list .project .detail .operating-append {\n            opacity: 0;\n            position: absolute;\n            top: 0px;\n            height: 100px;\n            width: 100%;\n            background: yellow;\n            left: 0;\n            text-align: center;\n            background: #fff; }\n  :host /deep/ .project-list-body .projects .list .project .detail .operating-append .item {\n              margin-top: 10px;\n              border: 1px solid rgba(255, 0, 0, 0.2);\n              width: 100px;\n              height: 32px;\n              line-height: 32px;\n              display: inline-block;\n              color: rgba(255, 0, 0, 0.2); }\n  :host /deep/ .project-list-body .projects .list .project .detail .operating-append .item:hover {\n                border: 1px solid rgba(255, 0, 0, 0.6);\n                color: rgba(255, 0, 0, 0.6); }\n  :host /deep/ .project-list-body .projects .list .project .detail .operating-append:hover {\n              opacity: 1; }\n  :host /deep/ .project-list-body .projects .list .project .operating {\n          position: relative;\n          height: 40px;\n          border-top: 1px dotted #eeeeee;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          cursor: pointer; }\n  :host /deep/ .project-list-body .projects .list .project .operating .item {\n            display: inline-block;\n            width: 50%;\n            height: 40px;\n            line-height: 53px;\n            opacity: 0.4; }\n  :host /deep/ .project-list-body .projects .list .project .operating .item:hover {\n              opacity: 1;\n              background: #eee; }\n  :host /deep/ .project-list-body .projects .list .project .operating .item img {\n              width: 20px;\n              height: 20px; }\n  :host /deep/ .project-list-body .projects .list .add-pro {\n        position: absolute;\n        opacity: 0.5; }\n  :host /deep/ .project-list-body .projects .list .add-pro:hover {\n          opacity: 1; }\n  :host /deep/ .project-list-body .projects .list .add-pro .item-add {\n          width: 150px;\n          height: 200px;\n          line-height: 200px; }\n  :host /deep/ .project-list-body .projects .list .add-pro .item-add .add {\n            width: 30px;\n            height: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWFuZ21hL0Rlc2t0b3Avd29ya3NwYWNlL1dlYi1FZGl0b3Ivc3JjL2FwcC9wYWdlcy93b3Jrc3BhY2UvcHJvamVjdC1saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxrQkFBa0IsRUFBQTtFQUYxQjtJQUlZLGtCQUFrQjtJQUNsQixZQUFZLEVBQUE7RUFMeEI7TUFPZ0IsWUFBVztNQUNYLGVBQWU7TUEyQmYsaUNBQWlDLEVBQUE7RUFuQ2pEO1FBVW9CLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLDJDQUF5QztRQUN6QyxrQkFBa0I7UUFDbEIsNEJBQTBCLEVBQUE7RUFmOUM7UUFrQm9CLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsZUFBZSxFQUFBO0VBcEJuQztVQXNCd0IsV0FBVyxFQUFBO0VBdEJuQztZQXdCNEIsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixRQUFRLEVBQUE7RUExQnBDO1lBNkI0QixxQkFBcUI7WUFDckIsV0FBVztZQUNYLGtCQUFrQixFQUFBO0VBL0I5QztNQXNDZ0IsZ0JBQWdCLEVBQUE7RUF0Q2hDO1FBd0NvQixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsWUFBWSxFQUFBO0VBL0NoQztVQWlEd0Isa0NBQStCLEVBQUE7RUFqRHZEO1VBcUQ0QixrQkFBa0I7VUFDbEIsUUFBUTtVQUNSLFVBQVU7VUFDVixXQUFXO1VBQ1gsWUFBWSxFQUFBO0VBekR4QztVQTZEd0Isa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixTQUFTLEVBQUE7RUEvRGpDO1lBaUU0QixZQUFZO1lBQ1osV0FBVyxFQUFBO0VBbEV2QztVQXNFd0IsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixtQkFBbUI7VUFDbkIsWUFBWTtVQUNaLGlCQUFpQjtVQUNqQixxQkFBZ0I7ZUFBaEIsZ0JBQWdCLEVBQUE7RUEzRXhDO1VBOEV3QixnQkFBZ0I7VUFDaEIsa0JBQWtCO1VBQ2xCLGVBQWU7VUFDZixrQkFBa0I7VUFDbEIsY0FBYztVQUNkLHFCQUFxQjtVQUNyQixZQUFZO1VBQ1osZ0JBQWdCO1VBQ2hCLG9CQUFvQjtVQUNwQiw0QkFBNEI7VUFDNUIscUJBQXFCLEVBQUE7RUF4RjdDO1lBMkY0QixVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLFFBQVE7WUFDUixhQUFhO1lBQ2IsV0FBVztZQUNYLGtCQUFrQjtZQUNsQixPQUFPO1lBQ1Asa0JBQWtCO1lBQ2xCLGdCQUFnQixFQUFBO0VBbkc1QztjQXFHZ0MsZ0JBQWdCO2NBQ2hCLHNDQUFvQztjQUNwQyxZQUFZO2NBQ1osWUFBWTtjQUNaLGlCQUFpQjtjQUNqQixxQkFBcUI7Y0FDckIsMkJBQTBCLEVBQUE7RUEzRzFEO2dCQTZHb0Msc0NBQW9DO2dCQUNwQywyQkFBeUIsRUFBQTtFQTlHN0Q7Y0FrSGdDLFVBQVUsRUFBQTtFQWxIMUM7VUF1SHdCLGtCQUFrQjtVQUNsQixZQUFZO1VBQ1osOEJBQThCO1VBQzlCLHlCQUFpQjthQUFqQixzQkFBaUI7Y0FBakIscUJBQWlCO2tCQUFqQixpQkFBaUI7VUFDakIsZUFBZSxFQUFBO0VBM0h2QztZQTZINEIscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLFlBQVksRUFBQTtFQWpJeEM7Y0FtSWdDLFVBQVU7Y0FDVixnQkFBZ0IsRUFBQTtFQXBJaEQ7Y0F1SWdDLFdBQVc7Y0FDWCxZQUFZLEVBQUE7RUF4STVDO1FBZ0pvQixrQkFBa0I7UUFDbEIsWUFBWSxFQUFBO0VBakpoQztVQW1Kd0IsVUFBVSxFQUFBO0VBbkpsQztVQXNKd0IsWUFBWTtVQUNaLGFBQWE7VUFDYixrQkFBa0IsRUFBQTtFQXhKMUM7WUEwSjRCLFdBQVc7WUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93b3Jrc3BhY2UvcHJvamVjdC1saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAvZGVlcC97XG4gICAgLnByb2plY3QtbGlzdC1ib2R5IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAucHJvamVjdHMge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgLnRpdCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjE1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2JhKDI1NSwwLDAsIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6cmdiYSgkY29sb3I6ICM0NDQ0NDQsICRhbHBoYTogMC41KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmFsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZGRkZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5wcm9qZWN0IHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6cmdiYSgyNTUsMCwwLCAwLjQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm1vcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiAjNTU1NTU1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2OXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAub3BlcmF0aW5nLWFwcGVuZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsMC42KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOnJnYmEoMjU1LCAwLCAwLDAuNik7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm9wZXJhdGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggZG90dGVkICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hZGQtcHJvIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaXRlbS1hZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuIFxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/workspace/project-list/list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/workspace/project-list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ListComponent = class ListComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.projectArr = [{
                id: 1,
                name: '报表系统',
                desciption: "",
                state: 'official'
            }, {
                id: 2,
                name: '销售Dashboard',
                desciption: "",
                state: 'pre'
            }, {
                id: 3,
                name: "双十一销售监控系统",
                desciption: "监控软件测试Demo,主要展示数据统计报表",
                state: ''
            }];
        this.stateArr = [
            {
                src: './../../../assets/icons/state_official.svg',
                val: "已发布"
            },
            {
                src: './../../../assets/icons/state_pre.svg',
                val: "待发布"
            }
        ];
    }
    ngOnInit() {
    }
    toDetail(val, path) {
        this.router.navigate([`${path}/${val}`], { relativeTo: this.route });
    }
};
ListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/workspace/project-list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/pages/workspace/project-list/list.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ListComponent);



/***/ }),

/***/ "./src/app/pages/workspace/workspace.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/workspace/workspace.module.ts ***!
  \*****************************************************/
/*! exports provided: WorkspaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function() { return WorkspaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _editor_view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../editor/view/view.component */ "./src/app/editor/view/view.component.ts");
/* harmony import */ var src_app_core_code_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/code.module */ "./src/app/core/code.module.ts");
/* harmony import */ var src_app_editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/editor/provider/comp-config.service */ "./src/app/editor/provider/comp-config.service.ts");
/* harmony import */ var _workspace_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workspace.routing.module */ "./src/app/pages/workspace/workspace.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _project_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-list/list.component */ "./src/app/pages/workspace/project-list/list.component.ts");
/* harmony import */ var _project_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-detail/detail.component */ "./src/app/pages/workspace/project-detail/detail.component.ts");










const comps = [
    _project_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
    _editor_view_view_component__WEBPACK_IMPORTED_MODULE_2__["PreviewComponent"],
    _project_detail_detail_component__WEBPACK_IMPORTED_MODULE_9__["DetailComponent"]
];
let WorkspaceModule = class WorkspaceModule {
};
WorkspaceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            ...comps
        ],
        imports: [
            src_app_core_code_module__WEBPACK_IMPORTED_MODULE_3__["CodeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _workspace_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkspaceRoutingModule"]
        ],
        providers: [
            src_app_editor_provider_comp_config_service__WEBPACK_IMPORTED_MODULE_4__["CompConfigService"],
        ],
        bootstrap: [],
        entryComponents: [],
        exports: [
            _workspace_routing_module__WEBPACK_IMPORTED_MODULE_5__["WorkspaceRoutingModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], WorkspaceModule);



/***/ }),

/***/ "./src/app/pages/workspace/workspace.routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/workspace/workspace.routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WorkspaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceRoutingModule", function() { return WorkspaceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list/list.component */ "./src/app/pages/workspace/project-list/list.component.ts");
/* harmony import */ var _project_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-detail/detail.component */ "./src/app/pages/workspace/project-detail/detail.component.ts");





const routes = [
    { path: '', component: _project_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
    { path: 'detail/:id', component: _project_detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"] },
    { path: 'develop/:id', loadChildren: () => __webpack_require__.e(/*! import() | src-app-editor-develop-developmonet-module */ "src-app-editor-develop-developmonet-module").then(__webpack_require__.bind(null, /*! src/app/editor/develop/developmonet.module */ "./src/app/editor/develop/developmonet.module.ts")).then(m => m.DevelopModule) },
];
let WorkspaceRoutingModule = class WorkspaceRoutingModule {
};
WorkspaceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WorkspaceRoutingModule);



/***/ })

}]);