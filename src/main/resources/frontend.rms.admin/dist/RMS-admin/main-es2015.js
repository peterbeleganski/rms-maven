(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- HEADER -->\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row style=\"color: white\">\n      <button mat-icon-button (click)=\"toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span style=\"color: white\">MENIUTO</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n<!-- END HEADER -->\n<mat-drawer-container>\n  <mat-drawer mode=\"side\" [opened]=\"sideBarOpened\">\n    <app-navigation></app-navigation>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>my-profile works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n  <h3>Welcome to FrogZone Admin</h3>\n  <h4>Current number of restaurants: {{restaurantsCount}}</h4>\n  <h4>Current number of menus: {{menusCount}}</h4>\n  <h4>Current number of products: {{productsCount}}</h4>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <h2>Вход</h2>\n      <img mat-card-sm-image src=\"../../assets/images/logo.png\" alt=\"\">\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Потребителско име/Имейл\" formControlName=\"username\" required>\n        <mat-error>\n          Моля въведете правилен Имейл адрес\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"password\" placeholder=\"Парола\" formControlName=\"password\" required>\n        <mat-error>\n         Моля въведете парола\n        </mat-error>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\">\n        <span style=\"color: white\">Вход</span>\n      </button>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list *ngIf=\"getSecurityObject()\">\n  <div class=\"profile-card\" *ngIf=\"getSecurityObject() && getSecurityObject().authenticated\">\n    <div class=\"header\">\n      <h2>{{getSecurityObject().username}}</h2>\n      <h4>Роля: {{ getRepresentationTextForRoles(getSecurityObject().authorities) }}</h4>\n    </div>\n    <img src=\"assets/images/logo.png\" alt=\"logo\">\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <h2 matSubheader>Операции</h2>\n\n  <div *ngIf=\"!getSecurityObject()\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/login\"> <mat-icon>lock</mat-icon>Вход</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n      <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/restaurants\">\n        <mat-icon>list</mat-icon>\n        {{isAuthenticatedForRole('OWNER') ? 'Моите ресторанти' : 'Ресторанти'}}\n      </a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/restaurants/create\">\n      <mat-icon>restaurant</mat-icon> Добави ресторант</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/products/create\">\n      <mat-icon>fastfood</mat-icon>Добави продукт</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/import\">\n      <mat-icon>upload</mat-icon>Импортиране на продукти\n    </a>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <h2 matSubheader>Потребители</h2>\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/users/create\">\n      <mat-icon>group_add</mat-icon>Добави потребител</a>\n  </div>\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/users/all\">\n      <mat-icon>supervisor_account</mat-icon>Всички потребители</a>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" (click)=\"logout()\">\n      <mat-icon>logout</mat-icon>Изход</a>\n  </div>\n</mat-nav-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Добави категория</h2>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Име на категорията\" formControlName=\"title\" required>\n        <mat-error>\n          Моля въведете име на категорията\n        </mat-error>\n      </mat-form-field>\n      <br>\n      <button mat-raised-button mat-dialog-close color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addCategory(data)\"> <mat-icon>add</mat-icon> Добави</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div *ngIf=\"selectedRestaurantId\">\n  <a routerLink=\"/restaurants/{{selectedRestaurantId}}/products\">Вижте продуктите на ресторанта</a>\n</div>\n<h2 class=\"text-center\">Добави продукт</h2>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <mat-form-field>\n            <mat-label>Изберете ресторант</mat-label>\n            <mat-select formControlName=\"selectedRestaurant\" (selectionChange)=\"onSelectRestaurant()\">\n              <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n                {{restaurant.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-4\">\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Въведете име на продукт\" formControlName=\"title\" required>\n            <mat-error>\n              Моля въведете име на продукта\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-4\">\n          <mat-form-field class=\"full-width-input\">\n            <input type=\"number\" matInput placeholder=\"Въведете цена на продукт\" formControlName=\"price\" required>\n            <mat-error>\n              Моля въведете цена на продукта\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <!--<mat-form-field>\n        <mat-label>Изберете меню</mat-label>\n        <mat-select formControlName=\"selectedMenu\" multiple>\n          <mat-option *ngFor=\"let menu of menus\" [value]=\"menu\">\n            {{menu}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>-->\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Въведете алергени за продукт пример: (яйца,мляко,подправки)\" formControlName=\"allergens\" required>\n            <mat-error>\n              Моля въведете алергени на продукта\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-5\">\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Въведете тагове за продукт\" formControlName=\"tags\" required>\n            <mat-error>\n              Моля въведете тагове на продукта\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-7\">\n          <mat-form-field class=\"full-width-input\">\n            <textarea matInput placeholder=\"Въведете описание на продукт\" formControlName=\"description\" required> </textarea>\n            <mat-error>\n              Моля въведете описание на продукта\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <mat-form-field>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <mat-label>Изберете категория</mat-label>\n                <mat-select formControlName=\"category\">\n                  <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                    {{category.title}}\n                  </mat-option>\n                </mat-select>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-icon-button color=\"primary\" (click)=\"addNewCategory(selectedRestaurantId, $event)\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-form-field>\n        </div>\n        <div class=\"col-md-7\">\n          <h3>Избери картинка</h3>\n          <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n          <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n          <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n          <button mat-raised-button color=\"primary\" class=\"add-product-button text-white\" (click)=\"addProduct()\"> <mat-icon>add</mat-icon> Добави</button>\n        </div>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">Редактирай продукт</h2>\n<div class=\"loading-spinner\" *ngIf=\"!fetchedProduct\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"value\">\n    </mat-progress-spinner>\n  </div>\n</div>\n<mat-card *ngIf=\"product\">\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <img mat-card-xl-image src=\"{{product.imageUrl}}\" alt=\"\">\n      </div>\n      <div class=\"col-md-7\">\n        <form [formGroup]=\"form\">\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"title\">Име на продукта</label>\n            <input matInput formControlName=\"title\" required id=\"title\">\n            <mat-error>\n              Моля въведете име на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"price\">Цена</label>\n            <input type=\"number\" matInput formControlName=\"price\" id=\"price\" required>\n            <mat-error>\n              Моля въведете цена на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"description\">Описание</label>\n            <textarea matInput formControlName=\"description\" required id=\"description\"> </textarea>\n            <mat-error>\n              Моля въведете описание на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"allergens\">Алергени</label>\n            <input matInput formControlName=\"allergens\" id=\"allergens\" required>\n            <mat-error>\n              Моля въведете алергени на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"tags\">Тагове</label>\n            <input matInput formControlName=\"tags\" id=\"tags\" required>\n            <mat-error>\n              Моля въведете тагове на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <mat-label>Изберете категория</mat-label>\n                <mat-select formControlName=\"category\">\n                  <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                    {{category.title}}\n                  </mat-option>\n                </mat-select>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-icon-button color=\"primary\" (click)=\"addNewCategory(restaurantId, $event)\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-form-field>\n          <h3>Избери картинка</h3>\n          <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n          <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n          <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n          <button mat-raised-button color=\"primary\" class=\"edit-product-button text-white\" (click)=\"editProduct()\"> <mat-icon>create</mat-icon> Редактирай</button>\n        </form>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <div class=\"text-center\">Импортиране на продукти</div>\n\n  <mat-card-content>\n    <form [formGroup]=\"importProductsForm\" #form=\"ngForm\">\n      <mat-form-field>\n        <mat-label>Изберете ресторант</mat-label>\n        <mat-select formControlName=\"restaurantId\">\n          <mat-option>-----</mat-option>\n          <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n            {{restaurant.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>Липсващ ресторант</mat-error>\n      </mat-form-field>\n\n      <span>Файл: {{importFile?.name}}</span>\n\n      <div>\n        <button mat-raised-button [disabled]=\"restaurantId.invalid || !importFile\" (click)=\"importProducts()\">Импортиране на продукти</button>\n        <button mat-raised-button color=\"primary\" (click)=\"importDialog.click()\" class=\"text-white\">\n          <mat-icon>attachment</mat-icon>\n          Изберете файл\n        </button>\n        <input #importDialog\n               formControlName=\"importFilename\"\n               type=\"file\"\n               accept=\".csv\"\n               (change)=\"onImportFileChosen($event)\"\n               hidden/>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"text-center border-bottom\">\n  <h2>Продукти от ресторант: <u>{{restaurant?.name}}</u></h2>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <mat-form-field>\n      <mat-label>Търсете продукт</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Търсете продукт\">\n    </mat-form-field>\n  </div>\n  <div class=\"col-md-6 reorder-button\">\n    <button mat-raised-button (click)=\"openReorderCategoriesDialog()\">\n      <mat-icon color=\"accent\">reorder</mat-icon><span>Подреди категориите</span>\n    </button>\n  </div>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"products && products.length === 0\">\n  Все още няма продукти за този ресторант\n</div>\n<div class=\"loading-spinner\" *ngIf=\"!products\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"value\">\n    </mat-progress-spinner>\n  </div>\n</div>\n<table *ngIf=\"products\" mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <span *ngIf=\"column === 'edit'\">\n        <button mat-icon-button (click)=\"goToEditProduct(restaurant.id, element.id)\">\n          <mat-icon color=\"primary\">edit</mat-icon>\n        </button>\n      </span>\n      <span *ngIf=\"column === 'delete'\">\n        <button mat-icon-button (click)=\"deleteProduct(element)\">\n          <mat-icon color=\"warn\">delete</mat-icon>\n        </button>\n      </span>\n      <span *ngIf=\"column !== 'edit' && column !== 'delete'\">\n         {{ getDisplayTitleCategory(element, column)}}\n      </span>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"example-element-detail\"\n               [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n            <div class=\"example-element-diagram\">\n              <div class=\"example-element-symbol\"> <img mat-card-sm-image class=\"image-sm\" src=\"{{element.imageUrl}}\" alt=\"Restaurant photo\"></div>\n            </div>\n            <div class=\"example-element-description\">\n              <span class=\"example-element-description-attribution\">Описание на продукта:</span>\n              {{element.description}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/reorder-categories.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/reorder-categories.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n <h2>Подреди категориите</h2>\n  <div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let category of categories\" cdkDrag>{{category.title}}</div>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button class=\"text-white\" mat-raised-button color=\"primary\"  tabindex=\"1\" (click)=\"onConfirmClick()\">Запази</button>\n  <button mat-raised-button mat-dialog-close tabindex=\"-1\">Отказ</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <form [formGroup]=\"form\">\n          <h2>Добави ресторант</h2>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Име на ресторант\" formControlName=\"name\" required>\n            <mat-error>\n              Моля въведете име на ресторанта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Локация на ресторанта\" formControlName=\"location\" required>\n            <mat-error>\n              Моля въведете локация на ресторанта\n            </mat-error>\n          </mat-form-field>\n         <div class=\"row\">\n           <div class=\"col-md-6\">\n             <mat-form-field class=\"full-width-input\">\n               <input type=\"time\" matInput placeholder=\"От\" formControlName=\"workingHoursStart\" required>\n               <mat-error>\n                 Моля въведете работно време на ресторанта\n               </mat-error>\n             </mat-form-field>\n           </div>\n           <div class=\"col-md-6\">\n             <mat-form-field class=\"full-width-input\">\n               <input type=\"time\" matInput placeholder=\"До\" formControlName=\"workingHoursEnd\" required>\n               <mat-error>\n                 Моля въведете работно време на ресторанта\n               </mat-error>\n             </mat-form-field>\n           </div>\n         </div>\n          <div class=\"loading-spinner\" *ngIf=\"spinner\">\n            <mat-progress-spinner\n              class=\"example-margin\"\n              [color]=\"color\"\n              [mode]=\"mode\"\n              [value]=\"progressSpinnerValue\">\n            </mat-progress-spinner>\n          </div>\n          <button [disabled]=\"spinner\" mat-raised-button color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addRestaurant()\">\n            <mat-icon>add</mat-icon> <span>Добави</span>\n          </button>\n        </form>\n      </div>\n      <div class=\"col-md-7\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3>Избери картинка за корицата</h3>\n            <button type=\"button\" mat-raised-button (click)=\"fileInputCover.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n            <span *ngIf=\"selectedCoverImage\" class=\"mat-active\">\n              <p>Избран файл: {{selectedCoverImage}}</p>\n            </span>\n            <input hidden (change)=\"onFileSelect($event, 'coverImage')\" #fileInputCover type=\"file\" id=\"file\">\n          </div>\n          <div class=\"col-md-6\">\n            <h3>Избери лого на ресторанта</h3>\n            <button type=\"button\" mat-raised-button (click)=\"fileInputLogo.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n            <span *ngIf=\"selectedLogoImage\" class=\"mat-active\">\n              <p>Избран файл: {{selectedLogoImage}}</p>\n            </span>\n            <input hidden (change)=\"onFileSelect($event, 'logoImage')\" #fileInputLogo type=\"file\" id=\"file2\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"text-center\">Редактирате ресторант: {{restaurant.name}}</h2>\n<mat-card>\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form [formGroup]=\"form\">\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Име на ресторант\" formControlName=\"name\" required>\n            <mat-error>\n              Моля въведете име на ресторанта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Локация на ресторанта\" formControlName=\"location\" required>\n            <mat-error>\n              Моля въведете локация на ресторанта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Статус на ресторант</mat-label>\n            <mat-select id=\"restaurant-status\" formControlName=\"active\">\n              <mat-option value=\"inactive\">неактивен</mat-option>\n              <mat-option value=\"active\">активен</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h3>Избери корица на ресторанта</h3>\n                <button type=\"button\" mat-raised-button (click)=\"fileInputCoverImage.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n              <br>\n              <span *ngIf=\"selectedCoverImage\" class=\"mat-active\">\n                  Избран файл: {{selectedCoverImage}}\n                </span>\n                <input hidden (change)=\"onFileSelect($event, 'coverImage')\" #fileInputCoverImage type=\"file\" id=\"file-cover\">\n            </div>\n            <div class=\"col-md-6\">\n              <h3>Избери лого на ресторанта</h3>\n              <button type=\"button\" mat-raised-button (click)=\"fileInputLogoImage.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n              <br>\n              <span *ngIf=\"selectedLogoImage\" class=\"mat-active\">\n                Избран файл: {{selectedLogoImage}}\n              </span>\n              <input hidden (change)=\"onFileSelect($event, 'logoImage')\" #fileInputLogoImage type=\"file\" id=\"file-logo\">\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-md-6 edit-restaurant-images\">\n              <h2>Корица на ресторанта</h2>\n              <img mat-card-xl-image src=\"{{restaurant.coverImageUrl}}\" alt=\"cover image\">\n            </div>\n            <div class=\"col-md-6\">\n              <h2>Лого на ресторанта</h2>\n              <img mat-card-xl-image src=\"{{restaurant.logoImageUrl}}\" alt=\"logo image\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <mat-form-field class=\"full-width-input\">\n                <input type=\"time\" matInput placeholder=\"От\" formControlName=\"workingHoursStart\" required>\n                <mat-error>\n                  Моля въведете работно време на ресторанта\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"col-md-6\">\n              <mat-form-field class=\"full-width-input\">\n                <input type=\"time\" matInput placeholder=\"До\" formControlName=\"workingHoursEnd\" required>\n                <mat-error>\n                  Моля въведете работно време на ресторанта\n                </mat-error>\n              </mat-form-field>\n            </div>\n          </div>\n          <br>\n          <div class=\"loading-spinner\" *ngIf=\"spinner\">\n            <mat-progress-spinner\n              class=\"example-margin\"\n              [color]=\"color\"\n              [mode]=\"mode\"\n              [value]=\"progressSpinnerValue\">\n            </mat-progress-spinner>\n          </div>\n          <br>\n          <button mat-raised-button color=\"primary\" [disabled]=\"spinner\" class=\"edit-restaurant-button text-white\" (click)=\"editRestaurant(restaurant.id)\"> <mat-icon>save</mat-icon> Запази</button>\n        </form>\n      </div>\n    </div>\n    <div class=\"row\">\n      <br>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n  <p>\n    {{message}}\n  </p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" tabindex=\"1\">{{confirmButtonText}}</button>\n  <button mat-raised-button mat-dialog-close tabindex=\"-1\">{{cancelButtonText}}</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n  <h2>Всички ресторанти</h2>\n</div>\n<mat-divider></mat-divider>\n<input class=\"form-control\" type=\"text\" placeholder=\"Търси ресторант\" id=\"search-box\" (ngModelChange)=\"fetchRestaurants({pageIndex:0})\" [(ngModel)]=\"searchText\" aria-label=\"Search\">\n\n<div class=\"loading-spinner\" *ngIf=\"!restaurants\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"progressSpinnerValue\">\n    </mat-progress-spinner>\n  </div>\n</div>\n\n<div *ngIf=\"restaurants\">\n  <mat-card class=\"example-card\" *ngFor=\"let restaurant of restaurants\" id=\"restaurant-cards\">\n    <button class=\"right\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"goToProducts(restaurant.id)\">\n        <mat-icon>create</mat-icon>\n        <span>\n        Редактирай\n      </span>\n      </button>\n      <button *ngIf=\"isAdmin()\" mat-menu-item (click)=\"deleteRestaurant(restaurant)\">\n        <mat-icon>delete_forever</mat-icon>\n        <span>Изтрий</span>\n      </button>\n    </mat-menu>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>\n        <a routerLink=\"/restaurants/{{restaurant.id}}/products\">{{restaurant.name}}</a>\n      </mat-card-title>\n      <mat-card-subtitle>{{restaurant.location}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"text-center\">\n      <img id=\"restaurant-logo\" mat-card-sm-image src=\"{{restaurant.logoImageUrl}}\" alt=\"Restaurant logo\">\n      <img mat-card-xl-image src=\"{{restaurant.coverImageUrl}}\" alt=\"Restaurant cover\">\n    </mat-card-content>\n  </mat-card>\n\n    <mat-paginator [length]=\"totalElements\"\n                   [pageSize]=\"size\"\n                   [pageIndex]=\"page\"\n                   [pageSizeOptions]=\"[6]\"\n                   (page)=\"fetchRestaurants($event)\">\n    </mat-paginator>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <h2>Добави потребител</h2>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"email\" placeholder=\"Имейл на потребителя\" formControlName=\"username\" required>\n        <mat-error>\n          Моля въведете имейл на потребителя\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"password\" placeholder=\"Парола на потребителя\" formControlName=\"password\" required>\n        <mat-error>\n          Моля въведете парола на потребителя\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Изберете ресторант</mat-label>\n        <mat-select formControlName=\"restaurantId\">\n          <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n            {{restaurant.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Изберете роля на потребителя</mat-label>\n        <mat-select formControlName=\"roles\" multiple>\n          <mat-option value=\"WAITER\">Сервитьор</mat-option>\n          <mat-option value=\"OWNER\">Собственик</mat-option>\n          <mat-option *ngIf=\"isAdmin()\" value=\"ADMIN\">Админ</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addUser()\"> <mat-icon>add</mat-icon> Добави</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n  <h2>Всички Потребители</h2>\n</div>\n<mat-divider></mat-divider>\n<input class=\"form-control\" type=\"text\" placeholder=\"Търси сервитьор\" id=\"search-box\" [(ngModel)]=\"text\" aria-label=\"Search\">\n<br>\n<mat-divider></mat-divider>\n<a mat-button color=\"primary\" routerLink=\"/users/create\"><mat-icon>add</mat-icon>Добави нов потребител</a>\n<mat-divider></mat-divider>\n<mat-tab-group>\n  <mat-tab label=\"{{restaurant.name}}\" *ngFor=\"let restaurant of restaurants\">\n\n    <mat-card class=\"example-card\" *ngIf=\"restaurant.owner\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{restaurant.owner.username}}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"restaurant.owner && restaurant.owner.username\"></mat-card-subtitle>\n        <mat-card-subtitle>Роли: {{getRepresentationTextForRoles(['OWNER']).join(',')}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"text-center\">\n        <img mat-card-sm-image src=\"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png\" alt=\"user photo\">\n      </mat-card-content>\n      <mat-card-actions class=\"text-center\">\n        <a mat-button color=\"primary\" routerLink=\"/users/{{restaurant.owner.username}}/edit\"><mat-icon>create</mat-icon>Редактирай</a>\n        <button mat-button color=\"warn\" (click)=\"deleteUser(restaurant.owner)\"><mat-icon>delete_forever</mat-icon>Изтрий</button>\n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card class=\"example-card\" *ngFor=\"let user of restaurant.waiters | filterUsers: text\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{user.username}}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"user.restaurant && user.restaurant.name\">Ресторант: {{user?.restaurant?.name}}</mat-card-subtitle>\n        <mat-card-subtitle>Роли: {{getRepresentationTextForRoles(user.roles).join(',')}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"text-center\">\n        <img mat-card-sm-image src=\"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png\" alt=\"user photo\">\n      </mat-card-content>\n      <mat-card-actions class=\"text-center\">\n        <a mat-button color=\"primary\" routerLink=\"/users/{{user.id}}/edit\"><mat-icon>create</mat-icon>Редактирай</a>\n        <button mat-button color=\"warn\" (click)=\"deleteUser(user)\"><mat-icon>delete_forever</mat-icon>Изтрий</button>\n      </mat-card-actions>\n    </mat-card>\n    <div *ngIf=\"restaurant.waiters.length === 0 && !restaurant.owner\">\n      <br>\n      <span class=\"text-danger\">Няма потребители за този ресторант</span>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmat-drawer {\n  width: 300px;\n}\nmat-drawer-container {\n  height: 100%;\n}\nmat-drawer-content {\n  padding: 20px;\n}\nul li {\n  list-style: none;\n}\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kcmF3ZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5sb2FkaW5nLXNwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");



let AppComponent = class AppComponent {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = 'RMS-admin';
        this.sideBarOpened = false;
    }
    toggle() {
        this.sideBarOpened = !this.sideBarOpened;
    }
    getSecurityObject() {
        return JSON.parse(window.localStorage.getItem('user'));
    }
    logout() {
        this.authenticationService.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing.module */ "./src/app/routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/navigation/navigation.component */ "./src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/restaurant/list-restaurants/list-restaurants.component */ "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/restaurant/create-restaurant/create-restaurant.component */ "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts");
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ "./src/app/components/product/product-list/product-list.component.ts");
/* harmony import */ var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/create-product/create-product.component */ "./src/app/components/product/create-product/create-product.component.ts");
/* harmony import */ var _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/restaurant/edit-restaurant/edit-restaurant.component */ "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var _components_common_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/home/home.component */ "./src/app/components/common/home/home.component.ts");
/* harmony import */ var _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/common/login/login.component */ "./src/app/components/common/login/login.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _security_token_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./security/token.interceptor */ "./src/app/security/token.interceptor.ts");
/* harmony import */ var _pipes_product_list_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/product-list-filter.pipe */ "./src/app/pipes/product-list-filter.pipe.ts");
/* harmony import */ var _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/list-users/list-users.component */ "./src/app/components/user/list-users/list-users.component.ts");
/* harmony import */ var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/material/material-module */ "./src/app/modules/material/material-module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _components_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/restaurant/list-restaurants/confirmation-dialog.component */ "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
/* harmony import */ var _pipes_user_list_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipes/user-list-filter.pipe */ "./src/app/pipes/user-list-filter.pipe.ts");
/* harmony import */ var _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product/import-products/import-products.component */ "./src/app/components/product/import-products/import-products.component.ts");
/* harmony import */ var _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/user/create-user/create-user.component */ "./src/app/components/user/create-user/create-user.component.ts");
/* harmony import */ var _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/account/my-profile/my-profile.component */ "./src/app/components/account/my-profile/my-profile.component.ts");
/* harmony import */ var _components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/product/create-product/create-new-category.dialog */ "./src/app/components/product/create-product/create-new-category.dialog.ts");
/* harmony import */ var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/product/edit-product/edit-product.component */ "./src/app/components/product/edit-product/edit-product.component.ts");
/* harmony import */ var _components_product_product_list_reorder_categories_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/product/product-list/reorder-categories.component */ "./src/app/components/product/product-list/reorder-categories.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm2015/drag-drop.js");































let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
            _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_7__["ListRestaurantsComponent"],
            _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["CreateRestaurantComponent"],
            _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
            _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__["CreateProductComponent"],
            _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_12__["EditRestaurantComponent"],
            _components_common_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_28__["EditProductComponent"],
            _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _pipes_product_list_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["ProductListFilterPipe"],
            _pipes_user_list_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["UserListFilterPipe"],
            _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_19__["ListUsersComponent"],
            _components_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"],
            _components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__["CreateNewCategoryDialogComponent"],
            _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__["CreateUserComponent"],
            _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__["MyProfileComponent"],
            _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_24__["ImportProductsComponent"],
            _components_product_product_list_reorder_categories_component__WEBPACK_IMPORTED_MODULE_29__["ReorderCategoriesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
            _modules_material_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_30__["DragDropModule"]
        ],
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _security_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"],
                multi: true
            }],
        entryComponents: [_components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__["CreateNewCategoryDialogComponent"], _components_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"], _components_product_product_list_reorder_categories_component__WEBPACK_IMPORTED_MODULE_29__["ReorderCategoriesComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/account/my-profile/my-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/account/my-profile/my-profile.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/account/my-profile/my-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/account/my-profile/my-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyProfileComponent = class MyProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
MyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-profile.component.css */ "./src/app/components/account/my-profile/my-profile.component.css")).default]
    })
], MyProfileComponent);



/***/ }),

/***/ "./src/app/components/common/home/home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/common/home/home.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/common/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/common/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/components/common/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/common/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/common/login/login.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/common/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/common/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, authenticationService, toastrService, router, appComponent) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.router = router;
        this.appComponent = appComponent;
        this.form = formBuilder.group({
            username: [],
            password: []
        });
    }
    ngOnInit() {
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authenticationService.login(this.form.getRawValue())
                .then(data => {
                var _a;
                if ((_a = data.body.authorities) === null || _a === void 0 ? void 0 : _a.includes('USER')) {
                    return Promise.reject({
                        error: {
                            message: 'Клиенти не могат да достъпват администраторската система'
                        }
                    });
                }
                this.appComponent.sideBarOpened = true;
                this.authenticationService.setSecurityObject(data.body);
                this.toastrService.success('Успешен вход!');
                this.router.navigateByUrl('/restaurants');
            })
                .catch(err => {
                var _a, _b;
                console.log(err);
                if ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) {
                    this.toastrService.error((_b = err.error) === null || _b === void 0 ? void 0 : _b.message);
                }
                else {
                    this.toastrService.error(err);
                }
            });
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/components/common/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n\n/*\n.profile-card img {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n*/\n\n:host mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7O0NBT0M7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xufVxuXG4vKlxuLnByb2ZpbGUtY2FyZCBpbWcge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4qL1xuXG46aG9zdCBtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");





let NavigationComponent = class NavigationComponent {
    constructor(authenticationService, appComponent) {
        this.authenticationService = authenticationService;
        this.appComponent = appComponent;
    }
    ngOnInit() {
    }
    getSecurityObject() {
        return JSON.parse(window.localStorage.getItem('user'));
    }
    isAuthenticatedForRole(role) {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (user && user.authorities) {
            return role.includes(user.authorities);
        }
        else {
            return false;
        }
    }
    getRepresentationTextForRoles(roles) {
        return _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].getRepresentationTextForRoles(roles);
    }
    logout() {
        this.appComponent.sideBarOpened = false;
        this.authenticationService.logout();
    }
};
NavigationComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/common/navigation/navigation.component.css")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/components/product/create-product/create-new-category.dialog.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/create-product/create-new-category.dialog.ts ***!
  \*********************************************************************************/
/*! exports provided: CreateNewCategoryDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewCategoryDialogComponent", function() { return CreateNewCategoryDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");





let CreateNewCategoryDialogComponent = class CreateNewCategoryDialogComponent {
    constructor(data, formBuilder, categoryService) {
        this.data = data;
        this.categoryService = categoryService;
        this.category = {};
        this.form = formBuilder.group({
            title: []
        });
    }
    addCategory(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.category = {
                title: this.title.value
            };
            yield this.categoryService.addCategory(data.restaurantId, this.category);
        });
    }
    get title() {
        return this.form.get('title');
    }
};
CreateNewCategoryDialogComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
CreateNewCategoryDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-new-category.dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-new-category.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CreateNewCategoryDialogComponent);



/***/ }),

/***/ "./src/app/components/product/create-product/create-product.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/product/create-product/create-product.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.add-product-button {\n  margin-left: 10px;\n}\n\n.mat-dialog-container {\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkLXByb2R1Y3QtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/product/create-product/create-product.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/product/create-product/create-product.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _create_new_category_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-new-category.dialog */ "./src/app/components/product/create-product/create-new-category.dialog.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");












let CreateProductComponent = class CreateProductComponent {
    constructor(formBuilder, restaurantService, productService, toastrService, router, authenticationService, dialog, categoryService) {
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.toastrService = toastrService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.product = {};
        this.form = formBuilder.group({
            selectedRestaurant: [],
            selectedMenu: [],
            title: [],
            price: [],
            description: [],
            allergens: [],
            tags: [],
            category: [],
            imageUrl: ['']
        });
    }
    ngOnInit() {
        this.fetchRestaurants();
    }
    addProduct() {
        this.product = {
            title: this.title.value,
            price: this.price.value,
            quantity: 1,
            description: this.description.value,
            allergens: this.allergens.value && this.allergens.value.split(','),
            tags: this.tags.value && this.tags.value.split(','),
            category: this.category.value,
            menus: this.selectedMenu.value || [''],
            restaurantId: this.selectedRestaurant.value
        };
        this.selectedMenuId = this.selectedMenu.value || ['default'];
        this.selectedRestaurantId = this.selectedRestaurant.value;
        const formData = new FormData();
        formData.append('file', this.form.get('imageUrl').value);
        this.restaurantService.addProduct(this.selectedRestaurant.value, this.product)
            .then(res => {
            this.productService.addImageToProduct(res.body.id, formData)
                .then(() => {
                this.toastrService.success('Успешно добавихте продукта');
            });
        }).catch(err => { _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
    }
    fetchRestaurants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.authenticationService.getSecurityObject();
            if (this.user.authorities && this.user.authorities.includes('OWNER')) {
                this.restaurants = (yield this.restaurantService.getAllNames(this.user.username));
            }
            else {
                this.restaurants = (yield this.restaurantService.getAllNames(undefined));
            }
        });
    }
    onSelectRestaurant() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const restaurantId = this.selectedRestaurant.value;
            this.selectedRestaurantId = restaurantId;
            this.restaurantService.getById(restaurantId).then(selectedRestaurantResponse => {
                this.menus = (selectedRestaurantResponse).body.menus || ['default'];
                this.categories = selectedRestaurantResponse.body.categories;
                this.selectedRestaurantFullObject = selectedRestaurantResponse.body;
            });
        });
    }
    onFileSelect(event) {
        var _a;
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.selectedImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('imageUrl').setValue(file);
        }
    }
    addNewCategory(selectedRestaurantId, event) {
        var _a;
        event.stopPropagation();
        event.preventDefault();
        if (!((_a = this.selectedRestaurant) === null || _a === void 0 ? void 0 : _a.value)) {
            this.toastrService.warning('Моля изберете ресторант първо!');
            return;
        }
        this.dialog.open(_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_10__["CreateNewCategoryDialogComponent"], {
            data: {
                restaurantId: this.selectedRestaurantId
            },
            height: '240px',
            width: '450px',
        });
        this.dialog.afterAllClosed.subscribe(result => {
            this.categoryService.getAllCategoriesByRestaurantId(this.selectedRestaurantId).then(categories => {
                this.categories = categories;
                if (this.categories.length === 1) {
                    this.addedCategory = this.categories[this.categories.length - 1];
                    this.category.setValue(this.addedCategory);
                }
            });
        });
    }
    get selectedRestaurant() {
        return this.form.get('selectedRestaurant');
    }
    get selectedMenu() {
        return this.form.get('selectedMenu');
    }
    get title() {
        return this.form.get('title');
    }
    get price() {
        return this.form.get('price');
    }
    get description() {
        return this.form.get('description');
    }
    get allergens() {
        return this.form.get('allergens');
    }
    get tags() {
        return this.form.get('tags');
    }
    get category() {
        return this.form.get('category');
    }
};
CreateProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"] }
];
CreateProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-product.component.css */ "./src/app/components/product/create-product/create-product.component.css")).default]
    })
], CreateProductComponent);



/***/ }),

/***/ "./src/app/components/product/edit-product/edit-product.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.edit-product-button {\n  margin-left: 10px;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRpdC1wcm9kdWN0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/product/edit-product/edit-product.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/edit-product/edit-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var _create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-product/create-new-category.dialog */ "./src/app/components/product/create-product/create-new-category.dialog.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");











let EditProductComponent = class EditProductComponent {
    constructor(formBuilder, activeRoute, restaurantService, productService, toastrService, router, dialog, categoryService) {
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.product = { title: '' };
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.value = 30;
        this.fetchedProduct = false;
        this.form = formBuilder.group({
            title: [],
            price: [],
            quantity: [],
            description: [],
            allergens: [],
            tags: [],
            category: [],
            imageUrl: ['']
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchProduct();
        });
    }
    setFormData() {
        this.form = this.formBuilder.group({
            title: [this.product.title],
            price: [this.product.price],
            quantity: [this.product.quantity],
            description: [this.product.description],
            allergens: [this.product.allergens],
            tags: [this.product.tags],
            category: [this.product.category],
            imageUrl: ['']
        });
    }
    onFileSelect(event) {
        var _a;
        if (event.target.files.length > 0) {
            this.isSelectedNewImage = true;
            const file = event.target.files[0];
            this.selectedImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('imageUrl').setValue(file);
        }
    }
    editProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.product.title = this.form.get('title').value;
            this.product.price = this.form.get('price').value;
            this.product.quantity = this.form.get('quantity').value;
            this.product.description = this.form.get('description').value;
            this.product.allergens = this.form.get('allergens').value;
            this.product.tags = this.form.get('tags').value;
            this.product.category = this.form.get('category').value;
            this.productService.editProduct(this.product.id, this.product)
                .then(response => {
                if (this.isSelectedNewImage) {
                    const formData = new FormData();
                    formData.append('file', this.form.get('imageUrl').value);
                    this.productService.addImageToProduct(this.product.id, formData)
                        .then(res => {
                        this.toastrService.success('Успешно редактирахте продукта');
                        this.router.navigateByUrl(`/restaurants/${this.restaurant.id}/products`);
                    })
                        .catch(err => {
                        this.toastrService.warning('Проблем при качването на снимката');
                    });
                }
                else {
                    this.toastrService.success('Успешно редактирахте продукта');
                    this.router.navigateByUrl(`/restaurants/${this.restaurant.id}/products`);
                }
            }).catch(err => { _global_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
        });
    }
    fetchProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
            this.restaurantId = restaurantId;
            const productId = this.activeRoute.snapshot.paramMap.get('productId');
            this.productId = productId;
            this.product = (yield this.productService.getById(productId)).body;
            this.restaurant = (yield this.restaurantService.getById(restaurantId)).body;
            this.categories = this.restaurant.categories;
            this.setFormData();
            this.fetchedProduct = true;
        });
    }
    addNewCategory(selectedRestaurantId, event) {
        event.stopPropagation();
        event.preventDefault();
        this.dialog.open(_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_8__["CreateNewCategoryDialogComponent"], {
            data: {
                restaurantId: this.restaurant.id
            },
            height: '240px',
            width: '450px',
        });
        this.dialog.afterAllClosed.subscribe(result => {
            this.categoryService.getAllCategoriesByRestaurantId(this.restaurant.id).then(categories => {
                this.categories = categories;
                if (this.categories.length !== 0) {
                    const addedCategory = this.categories[this.categories.length - 1];
                    this.form.get('category').setValue(addedCategory);
                }
            });
        });
    }
};
EditProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"] }
];
EditProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-product.component.css */ "./src/app/components/product/edit-product/edit-product.component.css")).default]
    })
], EditProductComponent);



/***/ }),

/***/ "./src/app/components/product/import-products/import-products.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/product/import-products/import-products.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2ltcG9ydC1wcm9kdWN0cy9pbXBvcnQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9pbXBvcnQtcHJvZHVjdHMvaW1wb3J0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/product/import-products/import-products.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/import-products/import-products.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ImportProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportProductsComponent", function() { return ImportProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");






let ImportProductsComponent = class ImportProductsComponent {
    constructor(formBuilder, restaurantService, productService, toasterService) {
        this.formBuilder = formBuilder;
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.toasterService = toasterService;
        this.buildImportProductsForm();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadRestaurants();
        });
    }
    onImportFileChosen(event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            this.importFile = selectedFile;
        }
    }
    importProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const restaurantId = this.restaurantId.value;
                const formData = new FormData();
                formData.append("importFile", this.importFile);
                const importProductsResponse = yield this.productService.importProducts(restaurantId, formData);
                if (importProductsResponse.status === 200) {
                    const importedProductsCount = importProductsResponse.body;
                    this.toasterService.success(`Успешно импортиране на ${importedProductsCount} продукти`);
                    this.clearFormFieldsAndData();
                }
                else {
                    this.toasterService.error("Неуспешно импортиране на продукти");
                }
            }
            catch (error) {
                this.toasterService.error("Неуспешно импортиране на продукти");
                console.error(error);
            }
        });
    }
    buildImportProductsForm() {
        this.importProductsForm = this.formBuilder.group({
            restaurantId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            importFilename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    loadRestaurants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.restaurants = yield this.restaurantService.getAllNames();
        });
    }
    clearFormFieldsAndData() {
        this.importProductsForm.reset();
        this.form.resetForm();
        this.importFile = null;
    }
    get restaurantId() { return this.importProductsForm.get("restaurantId"); }
    get importFilename() { return this.importProductsForm.get("importFilename"); }
};
ImportProductsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form")
], ImportProductsComponent.prototype, "form", void 0);
ImportProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import-products',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./import-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./import-products.component.css */ "./src/app/components/product/import-products/import-products.component.css")).default]
    })
], ImportProductsComponent);



/***/ }),

/***/ "./src/app/components/product/product-list/product-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\nmat-form-field {\n  width: 400px;\n}\n\nmat-card {\n  width: 30%;\n  display: inline-block;\n  margin: 10px;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\nmat-card-header img {\n  text-align: center;\n  margin: 0 auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.image-sm {\n  width: 20%;\n  height: 15%;\n}\n\n.actions {\n  margin-top: -40px;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n.reorder-button {\n  display: flex;\n  align-items: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG5tYXQtY2FyZC1oZWFkZXIgaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW46IDhweCAwO1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXN5bWJvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaW1hZ2Utc20ge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDE1JTtcbn1cblxuLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xufVxuXG4ucmVvcmRlci1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/product/product-list/product-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/product-list/product-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../restaurant/list-restaurants/confirmation-dialog.component */ "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _reorder_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reorder-categories.component */ "./src/app/components/product/product-list/reorder-categories.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");













let ProductListComponent = class ProductListComponent {
    constructor(restaurantService, productService, activeRoute, toastrService, router, dialog, categoryService) {
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.activeRoute = activeRoute;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.text = '';
        this.columnsToDisplay = ['title', 'price', 'allergens', 'tags', 'category', 'menus', 'edit', 'delete'];
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.value = 30;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchProducts();
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
                data: {
                    message: `Сигурен ли си че искаш да изтриеш продукт '${product.title} ?'`,
                    buttonText: {
                        ok: 'Да',
                        cancel: 'Не'
                    }
                }
            });
            dialogRef.afterClosed().subscribe((confirmed) => {
                if (confirmed) {
                    const a = document.createElement('a');
                    a.click();
                    a.remove();
                    this.productService.deleteProduct(product.id)
                        .then(response => {
                        if (response.status === 204) {
                            this.toastrService.success('Изтрихте продукта успешно');
                            this.fetchProducts();
                        }
                    }).catch(err => { _global_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
                }
            });
        });
    }
    fetchProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
            this.restaurant = (yield this.restaurantService.getById(restaurantId)).body;
            this.products = (yield this.productService.getAllByRestaurantId(restaurantId)).body.content.filter(p => p !== null);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.products);
        });
    }
    getDisplayTitleCategory(element, column) {
        var _a;
        if (column === 'category') {
            return (_a = element.category) === null || _a === void 0 ? void 0 : _a.title;
        }
        return element[column];
    }
    goToEditProduct(restaurantId, productId) {
        this.router.navigateByUrl(`/restaurants/${restaurantId}/products/${productId}/edit`);
    }
    openReorderCategoriesDialog() {
        const dialog = this.dialog.open(_reorder_categories_component__WEBPACK_IMPORTED_MODULE_11__["ReorderCategoriesComponent"], {
            data: new _reorder_categories_component__WEBPACK_IMPORTED_MODULE_11__["ReorderCategoriesPayload"](this.restaurant.categories)
        });
        return dialog.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                const updatedCategories = dialog.componentInstance.categories;
                this.categoryService.updateCategories(this.restaurant.id, updatedCategories)
                    .then(() => {
                    return this.fetchProducts().then(() => {
                        this.toastrService.success('Успешно обновихте категориите!');
                    });
                });
            }
        });
    }
};
ProductListComponent.ctorParameters = () => [
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
    { type: _services_category_service__WEBPACK_IMPORTED_MODULE_12__["CategoryService"] }
];
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-list.component.css */ "./src/app/components/product/product-list/product-list.component.css")).default]
    })
], ProductListComponent);



/***/ }),

/***/ "./src/app/components/product/product-list/reorder-categories.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/product/product-list/reorder-categories.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n  0 8px 10px 1px rgba(0, 0, 0, 0.14),\n  0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9yZW9yZGVyLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7b0NBRWtDO0FBQ3BDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9yZW9yZGVyLWNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWxpc3Qge1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5leGFtcGxlLWJveCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstZHJhZy1hbmltYXRpbmcge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/product/product-list/reorder-categories.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product/product-list/reorder-categories.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReorderCategoriesComponent, ReorderCategoriesPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderCategoriesComponent", function() { return ReorderCategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderCategoriesPayload", function() { return ReorderCategoriesPayload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/fesm2015/drag-drop.js");




let ReorderCategoriesComponent = class ReorderCategoriesComponent {
    constructor(payload, dialogRef) {
        this.payload = payload;
        this.dialogRef = dialogRef;
        this.categories = payload.data;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.categories, event.previousIndex, event.currentIndex);
        for (let i = 0; i < this.categories.length; i++) {
            this.categories[i].priority = i;
        }
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
ReorderCategoriesComponent.ctorParameters = () => [
    { type: ReorderCategoriesPayload, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ReorderCategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reorder-categories-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reorder-categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/reorder-categories.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reorder-categories.component.css */ "./src/app/components/product/product-list/reorder-categories.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ReorderCategoriesComponent);

class ReorderCategoriesPayload {
    constructor(data) {
        this.data = data;
    }
}


/***/ }),

/***/ "./src/app/components/restaurant/create-restaurant/create-restaurant.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/restaurant/create-restaurant/create-restaurant.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.add-restaurant-button {\n  margin-left: 10px;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 42%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2NyZWF0ZS1yZXN0YXVyYW50L2NyZWF0ZS1yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3RhdXJhbnQvY3JlYXRlLXJlc3RhdXJhbnQvY3JlYXRlLXJlc3RhdXJhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtcmVzdGF1cmFudC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvYWRpbmctc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNDIlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRestaurantComponent", function() { return CreateRestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");







let CreateRestaurantComponent = class CreateRestaurantComponent {
    constructor(restaurantService, formBuilder, toastrService, router) {
        this.restaurantService = restaurantService;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.router = router;
        this.restaurant = {};
        this.fileData = null;
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.progressSpinnerValue = 30;
        this.spinner = false;
        this.form = formBuilder.group({
            name: [],
            location: [],
            coverImage: [''],
            logoImage: [''],
            workingHoursStart: [''],
            workingHoursEnd: ['']
        });
    }
    ngOnInit() {
        this.restaurant.name = '';
        this.restaurant.location = '';
        this.restaurant.workingHours = '';
    }
    onFileSelect(event, imageType) {
        var _a, _b;
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (imageType === 'coverImage') {
                this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            }
            else {
                this.selectedLogoImage = (_b = event.target.files[0]) === null || _b === void 0 ? void 0 : _b.name;
            }
            this.form.get(imageType).setValue(file);
        }
    }
    addRestaurant() {
        this.spinner = true;
        this.restaurant = {
            name: this.name.value,
            location: this.location.value,
            workingHours: this.workingHours
        };
        this.restaurantService.addRestaurant(this.restaurant).then(response => {
            let formData = new FormData();
            const currentRestaurantId = response.body.id;
            const promises = [];
            formData.append('file', this.form.get('coverImage').value);
            promises.push(this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'coverImage'));
            formData = new FormData();
            formData.append('file', this.form.get('logoImage').value);
            promises.push(this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'logoImage'));
            Promise.all(promises).then(() => {
                this.spinner = false;
                this.toastrService.success('Успешно добавен ресторант');
                this.router.navigateByUrl('/restaurants');
            });
        }).catch(err => {
            this.spinner = false;
            _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router);
        });
    }
    get name() {
        return this.form.get('name');
    }
    get location() {
        return this.form.get('location');
    }
    get workingHours() {
        return this.form.get('workingHoursStart').value + ' - ' + this.form.get('workingHoursEnd').value;
    }
    setEmptyValuesForFormGroup(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.setValue('');
            control.setErrors(undefined);
            if (control.controls) {
                this.setEmptyValuesForFormGroup(control);
            }
        });
    }
};
CreateRestaurantComponent.ctorParameters = () => [
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CreateRestaurantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-restaurant',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-restaurant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-restaurant.component.css */ "./src/app/components/restaurant/create-restaurant/create-restaurant.component.css")).default]
    })
], CreateRestaurantComponent);



/***/ }),

/***/ "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 80%;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 46%;\n}\n\n.edit-restaurant-images img{\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2VkaXQtcmVzdGF1cmFudC9lZGl0LXJlc3RhdXJhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3RhdXJhbnQvZWRpdC1yZXN0YXVyYW50L2VkaXQtcmVzdGF1cmFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA0NiU7XG59XG5cbi5lZGl0LXJlc3RhdXJhbnQtaW1hZ2VzIGltZ3tcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditRestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRestaurantComponent", function() { return EditRestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");







let EditRestaurantComponent = class EditRestaurantComponent {
    constructor(formBuilder, activeRoute, restaurantService, toastrService, router) {
        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.restaurantService = restaurantService;
        this.toastrService = toastrService;
        this.router = router;
        this.fileData = null;
        this.restaurant = { name: '' };
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.progressSpinnerValue = 30;
        this.spinner = false;
        this.form = this.formBuilder.group({
            name: [],
            location: [],
            image: [],
            logoImage: [],
            coverImage: [],
            active: [],
            workingHoursStart: [''],
            workingHoursEnd: ['']
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchRestaurants();
            console.log(this.restaurant.workingHours.split('-')[0]);
            this.form = this.formBuilder.group({
                name: this.restaurant.name,
                location: this.restaurant.location,
                image: this.restaurant.image,
                logoImage: this.restaurant.logoImageUrl,
                coverImage: this.restaurant.coverImageUrl,
                active: this.restaurant.active ? "active" : "inactive",
                workingHoursStart: this.restaurant.workingHours.split(' - ')[0],
                workingHoursEnd: this.restaurant.workingHours.split(' - ')[1]
            });
        });
    }
    editRestaurant(restaurantId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner = true;
            this.restaurant.name = this.form.get('name').value;
            this.restaurant.location = this.form.get('location').value;
            this.restaurant.active = this.form.get("active").value === "active";
            this.restaurant.workingHours = this.form.get("workingHoursStart").value + ' - ' + this.form.get('workingHoursEnd').value;
            this.restaurantService.patchUpdateRestaurant(restaurantId, this.restaurant)
                .then(response => {
                const promises = [];
                if (this.isSelectedNewCover) {
                    const formData = new FormData();
                    formData.append('file', this.form.get('coverImage').value);
                    promises.push(this.restaurantService.addImageToRestaurant(formData, this.restaurant.id, 'coverImage'));
                }
                if (this.isSelectedNewLogo) {
                    const formData = new FormData();
                    formData.append('file', this.form.get('logoImage').value);
                    promises.push(this.restaurantService.addImageToRestaurant(formData, this.restaurant.id, 'logoImage'));
                }
                Promise.all(promises).then(() => {
                    this.router.navigateByUrl('/restaurants');
                    this.toastrService.success('Успешно редактирахте ресторанта');
                    this.spinner = false;
                });
            }).catch(err => {
                this.spinner = false;
                _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router);
            });
        });
    }
    onFileSelect(event, imageType) {
        var _a, _b;
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            if (imageType === 'coverImage') {
                this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
                this.isSelectedNewCover = true;
            }
            else {
                this.selectedLogoImage = (_b = event.target.files[0]) === null || _b === void 0 ? void 0 : _b.name;
                this.isSelectedNewLogo = true;
            }
            this.form.get(imageType).setValue(file);
        }
    }
    fetchRestaurants() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
            this.restaurant = (yield this.restaurantService.getById(restaurantId)).body;
        });
    }
};
EditRestaurantComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditRestaurantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-restaurant',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-restaurant.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-restaurant.component.css */ "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css")).default]
    })
], EditRestaurantComponent);



/***/ }),

/***/ "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");



let ConfirmationDialogComponent = class ConfirmationDialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.message = 'Are you sure?';
        this.confirmButtonText = 'Yes';
        this.cancelButtonText = 'Cancel';
        if (data) {
            this.message = data.message || this.message;
            if (data.buttonText) {
                this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
                this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            }
        }
    }
    onConfirmClick() {
        this.dialogRef.close(true);
    }
};
ConfirmationDialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ConfirmationDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmation-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationDialogComponent);



/***/ }),

/***/ "./src/app/components/restaurant/list-restaurants/list-restaurants.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/components/restaurant/list-restaurants/list-restaurants.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n#restaurant-cards {\n  margin: 10px;\n}\n\nmat-card {\n  display: inline-block;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\nmat-card-header img {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.right {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n\n.no-border {\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n#restaurant-logo {\n  position: absolute;\n  vertical-align: bottom;\n  top: 248px;\n  border-radius: 16px;\n  border: 2px solid whitesmoke;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2xpc3QtcmVzdGF1cmFudHMvbGlzdC1yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2xpc3QtcmVzdGF1cmFudHMvbGlzdC1yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaC1ib3gge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jcmVzdGF1cmFudC1jYXJkcyB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxubWF0LWNhcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbm1hdC1jYXJkLWhlYWRlciBpbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMnB4O1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG5cbiNyZXN0YXVyYW50LWxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHRvcDogMjQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListRestaurantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRestaurantsComponent", function() { return ListRestaurantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmation-dialog.component */ "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ListRestaurantsComponent = class ListRestaurantsComponent {
    constructor(restaurantService, toastrService, dialog, authenticationService, router) {
        this.restaurantService = restaurantService;
        this.toastrService = toastrService;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.router = router;
        this.searchText = '';
        this.page = 0;
        this.size = 6;
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.progressSpinnerValue = 30;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fetchRestaurants({ pageIndex: this.page, pageSize: this.size });
        });
    }
    // fetch all restaurants for ADMIN role and only owner's restaurant if the user is owner
    fetchRestaurants(paginationObject) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = this.authenticationService.getSecurityObject();
            if (!this.isAdmin()) {
                yield this.requestRestaurants(paginationObject, this.user.username);
            }
            else {
                yield this.requestRestaurants(paginationObject);
            }
            this.page = paginationObject.pageIndex;
        });
    }
    requestRestaurants(obj, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allRestaurantResponse = yield this.restaurantService.getAll(user, this.searchText, obj.pageIndex, this.size);
            this.totalElements = allRestaurantResponse.body.totalElements;
            this.restaurants = allRestaurantResponse.body.content;
        });
    }
    deleteRestaurant(restaurant) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialogRef = this.dialog.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
                data: {
                    message: `Сигурен ли си че искаш да изтриеш ресторант '${restaurant.name} ?'`,
                    buttonText: {
                        ok: 'Да',
                        cancel: 'Не'
                    }
                }
            });
            dialogRef.afterClosed().subscribe((confirmed) => {
                if (confirmed) {
                    this.restaurantService.deleteRestaurant(restaurant.id).then(response => {
                        if (response.status === 200) {
                            this.toastrService.success('Успешно изтрихте ресторанта!');
                            this.fetchRestaurants({ pageIndex: this.page, pageSize: this.size });
                        }
                    });
                }
            });
        });
    }
    goToProducts(restaurantId) {
        this.router.navigateByUrl(`/restaurants/${restaurantId}/edit`);
    }
    isAdmin() {
        return this.user.authorities.includes('ADMIN');
    }
};
ListRestaurantsComponent.ctorParameters = () => [
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ListRestaurantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-restaurants',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-restaurants.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-restaurants.component.css */ "./src/app/components/restaurant/list-restaurants/list-restaurants.component.css")).default]
    })
], ListRestaurantsComponent);



/***/ }),

/***/ "./src/app/components/user/create-user/create-user.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/user/create-user/create-user.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  max-width: 500px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/user/create-user/create-user.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/create-user/create-user.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");









let CreateUserComponent = class CreateUserComponent {
    constructor(formBuilder, userService, restaurantService, toastrService, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.restaurantService = restaurantService;
        this.toastrService = toastrService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = {};
        this.form = formBuilder.group({
            username: [],
            password: [],
            restaurantId: [],
            selectedRestaurantId: [],
            roles: []
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = this.authenticationService.getSecurityObject();
            if (user.authorities.includes('OWNER')) {
                this.restaurants = (yield this.restaurantService.getAllNames(user.username));
            }
            else {
                this.restaurants = (yield this.restaurantService.getAllNames());
            }
            this.user.password = '';
            this.user.restaurantId = '';
            this.user.username = '';
            this.selectedRestaurantId = '';
        });
    }
    addUser() {
        const user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            restaurantId: this.form.get('restaurantId').value
        };
        this.userService.addUser(user, this.form.get('roles').value)
            .then(res => {
            if (res.status === 200) {
                this.toastrService.success('Успешно създадохте потребителя');
                this.setEmptyValuesForFormGroup(this.form);
            }
        }).catch(err => { _global_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
    }
    isAdmin() {
        return this.authenticationService.getSecurityObject().authorities.includes('ADMIN');
    }
    setEmptyValuesForFormGroup(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.setValue('');
            control.setErrors(undefined);
            if (control.controls) {
                this.setEmptyValuesForFormGroup(control);
            }
        });
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
CreateUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-user.component.css */ "./src/app/components/user/create-user/create-user.component.css")).default]
    })
], CreateUserComponent);



/***/ }),

/***/ "./src/app/components/user/list-users/list-users.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/user/list-users/list-users.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  padding: 10px;\n  margin: 10px;\n  width: 25%;\n  display: inline-block;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\n.mat-card-header .mat-card-title {\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xpc3QtdXNlcnMvbGlzdC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/user/list-users/list-users.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/list-users/list-users.component.ts ***!
  \********************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../restaurant/list-restaurants/confirmation-dialog.component */ "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/restaurant.service */ "./src/app/services/restaurant.service.ts");










let ListUsersComponent = class ListUsersComponent {
    constructor(userService, toastrService, router, dialog, authenticationService, restaurantService) {
        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.restaurantService = restaurantService;
        this.text = '';
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fetchAllUsers();
        });
    }
    fetchAllUsers() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.users = yield this.userService.getAllUsers();
            this.user = this.authenticationService.getSecurityObject();
            if (this.user.authorities && this.user.authorities.includes('OWNER')) {
                this.restaurants = (yield this.restaurantService.getAll(this.user.username, '', 0, 100000)).body.content;
            }
            else {
                this.restaurants = (yield this.restaurantService.getAll(undefined, '', 0, 100000)).body.content;
            }
        });
    }
    deleteUser(user) {
        const dialogRef = this.dialog.open(_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
                message: `Сигурен ли си че искаш да изтриеш потребител '${user.username} ?'`,
                buttonText: {
                    ok: 'Да',
                    cancel: 'Не'
                }
            }
        });
        dialogRef.afterClosed().subscribe((confirmed) => {
            if (confirmed) {
                const a = document.createElement('a');
                a.click();
                a.remove();
                this.userService.deleteUser(user.id)
                    .then(res => {
                    if (res.status === 200) {
                        this.fetchAllUsers();
                        this.toastrService.success('Успешно изтрихте потребителя');
                    }
                }).catch(err => { _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
            }
        });
    }
    getRepresentationTextForRoles(roles) {
        return _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].getRepresentationTextForRoles(roles);
    }
};
ListUsersComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_9__["RestaurantService"] }
];
ListUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-users.component.css */ "./src/app/components/user/list-users/list-users.component.css")).default]
    })
], ListUsersComponent);



/***/ }),

/***/ "./src/app/global/app.settings.ts":
/*!****************************************!*\
  !*** ./src/app/global/app.settings.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
class AppSettings {
    static redirectAndRequireToLogin(errStatus, toastrService, router) {
        if (errStatus === 403) {
            toastrService.warning('Моля влезте си в акаунта', 'Сесията ви е приключила');
            window.localStorage.removeItem('user');
            router.navigateByUrl('/login');
        }
    }
    static getRepresentationTextForRoles(roles) {
        const representationRoles = [];
        roles.forEach(role => {
            if (role.includes('ADMIN')) {
                representationRoles.push('Администратор');
            }
            if (role.includes('OWNER')) {
                representationRoles.push('Собственик');
            }
            if (role.includes('WAITER')) {
                representationRoles.push('Сервитьор');
            }
        });
        return representationRoles;
    }
}
AppSettings.API_ENDPOINT = 'http://localhost:8080'; // 'https://tequila-s-laimche-brat.herokuapp.com  / 8080


/***/ }),

/***/ "./src/app/modules/material/material-module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/material/material-module.ts ***!
  \*****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/fesm2015/table.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/fesm2015/tooltip.js");

































let MaterialModule = class MaterialModule {
};
MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pipes/product-list-filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/product-list-filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: ProductListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListFilterPipe", function() { return ProductListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductListFilterPipe = class ProductListFilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.title.toLocaleLowerCase().includes(searchText) || it.category.title.toLocaleLowerCase().includes(searchText);
        });
    }
};
ProductListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterProducts'
    })
], ProductListFilterPipe);



/***/ }),

/***/ "./src/app/pipes/user-list-filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/pipes/user-list-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: UserListFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListFilterPipe", function() { return UserListFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserListFilterPipe = class UserListFilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return it.username.toLocaleLowerCase().includes(searchText);
        });
    }
};
UserListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterUsers'
    })
], UserListFilterPipe);



/***/ }),

/***/ "./src/app/routing.module.ts":
/*!***********************************!*\
  !*** ./src/app/routing.module.ts ***!
  \***********************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product/edit-product/edit-product.component */ "./src/app/components/product/edit-product/edit-product.component.ts");
/* harmony import */ var _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/restaurant/edit-restaurant/edit-restaurant.component */ "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts");
/* harmony import */ var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/create-product/create-product.component */ "./src/app/components/product/create-product/create-product.component.ts");
/* harmony import */ var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product-list/product-list.component */ "./src/app/components/product/product-list/product-list.component.ts");
/* harmony import */ var _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/restaurant/create-restaurant/create-restaurant.component */ "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/restaurant/list-restaurants/list-restaurants.component */ "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts");
/* harmony import */ var _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/common/login/login.component */ "./src/app/components/common/login/login.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/product/import-products/import-products.component */ "./src/app/components/product/import-products/import-products.component.ts");
/* harmony import */ var _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/list-users/list-users.component */ "./src/app/components/user/list-users/list-users.component.ts");
/* harmony import */ var _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/create-user/create-user.component */ "./src/app/components/user/create-user/create-user.component.ts");
/* harmony import */ var _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/account/my-profile/my-profile.component */ "./src/app/components/account/my-profile/my-profile.component.ts");















const routes = [
    {
        path: '',
        component: _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'restaurants/create',
        component: _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["CreateRestaurantComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN' }
    },
    {
        path: 'restaurants',
        component: _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_8__["ListRestaurantsComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'restaurants/:id/edit',
        component: _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_2__["EditRestaurantComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'restaurants/:id/products',
        component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'restaurants/:id/products/:productId/edit',
        component: _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'product',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN,OWNER' },
        children: [
            { path: ':id/edit', component: _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"] },
        ]
    },
    {
        path: 'products/create',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__["CreateProductComponent"],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'users/all',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__["ListUsersComponent"],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'users/create',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__["CreateUserComponent"],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'my-profile',
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__["MyProfileComponent"],
        data: { authorities: 'ADMIN,OWNER' }
    },
    {
        path: 'import',
        component: _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_11__["ImportProductsComponent"],
        canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        data: { authorities: 'ADMIN' }
    },
    { path: '**', component: _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
];
let RoutingModule = class RoutingModule {
};
RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })
], RoutingModule);



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





let AuthGuard = class AuthGuard {
    constructor(authenticationService, router, toastrService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.toastrService = toastrService;
    }
    canActivate(next, state) {
        const role = next.data.authorities;
        const user = this.authenticationService.getSecurityObject();
        if (user && user.authenticated && role.includes(user.authorities)) {
            return true;
        }
        else {
            this.toastrService.warning('You are not authorized to access that resource!');
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/security/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/security/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TokenInterceptor = class TokenInterceptor {
    constructor() {
    }
    intercept(req, next) {
        const user = JSON.parse(window.localStorage.getItem('user'));
        if (user && user.jwt) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.jwt}`
                }
            });
        }
        return next.handle(req);
    }
};
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/app.settings */ "./src/app/global/app.settings.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AuthenticationService = class AuthenticationService {
    constructor(httpClient, toastrService, router) {
        this.httpClient = httpClient;
        this.toastrService = toastrService;
        this.router = router;
    }
    login(user) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/authenticate`, user, { observe: 'response' }).toPromise();
    }
    getSecurityObject() {
        return JSON.parse(window.localStorage.getItem('user'));
    }
    setSecurityObject(obj) {
        window.localStorage.setItem('user', JSON.stringify(obj));
    }
    logout() {
        window.localStorage.removeItem('user');
        this.toastrService.success('Success logout!');
        this.router.navigateByUrl('/login');
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/app.settings */ "./src/app/global/app.settings.ts");




let CategoryService = class CategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCategoriesByRestaurantId(restaurantId) {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/category?restaurantId=${restaurantId}`).toPromise();
    }
    addCategory(restaurantId, category) {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/category/create?restaurantId=${restaurantId}`, category).toPromise();
    }
    updateCategories(restaurantId, categories) {
        return this.httpClient.put(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/category?restaurantId=${restaurantId}`, categories).toPromise();
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/app.settings */ "./src/app/global/app.settings.ts");




let ProductService = class ProductService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    addImageToProduct(productId, formData) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/${productId}/upload-image`, formData, { observe: 'response' })
            .toPromise();
    }
    editProduct(productId, product) {
        return this.httpClient.put(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/${productId}`, product, { observe: 'response' }).toPromise();
    }
    getById(productId) {
        return this.httpClient.get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/${productId}`, { observe: 'response' }).toPromise();
    }
    deleteProduct(productId) {
        return this.httpClient.delete(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/${productId}`, { observe: 'response' }).toPromise();
    }
    getAllByRestaurantId(id) {
        // tslint:disable-next-line:max-line-length
        return this.httpClient.get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/all?page=0&size=100000&restaurantId=${id}`, { observe: 'response' }).toPromise();
    }
    importProducts(restaurantId, formData) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/product/${restaurantId}/import-products`, formData, { observe: "response" }).toPromise();
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/restaurant.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/restaurant.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantService, ListResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListResponse", function() { return ListResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/app.settings */ "./src/app/global/app.settings.ts");




let RestaurantService = class RestaurantService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll(ownerUsername, search, page, size) {
        return this.httpClient
            // tslint:disable-next-line:max-line-length
            .get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/all?page=${page}&size=${size}&searchTerm=${search}${ownerUsername ? '&ownerUsername=' + ownerUsername : ''}`, { observe: 'response' })
            .toPromise();
    }
    getAllNames(ownerUsername) {
        return this.httpClient
            // tslint:disable-next-line:max-line-length
            .get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/names${ownerUsername ? '?ownerUsername=' + ownerUsername : ''}`)
            .toPromise();
    }
    getById(id) {
        return this.httpClient.get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/${id}`, { observe: 'response' }).toPromise();
    }
    addProduct(id, product) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/${id}/add-product`, product, { observe: 'response' }).toPromise();
    }
    patchUpdateRestaurant(restaurantId, restaurant) {
        return this.httpClient.patch(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/${restaurantId}`, restaurant, { observe: 'response' })
            .toPromise();
    }
    addRestaurant(restaurant) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/create`, restaurant, { observe: 'response' })
            .toPromise();
    }
    addImageToRestaurant(formData, restaurantId, imageType) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/${restaurantId}/upload-image?imageType=${imageType}`, formData, { observe: 'response' })
            .toPromise();
    }
    deleteRestaurant(id) {
        return this.httpClient.delete(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/restaurant/${id}`, { observe: 'response' }).toPromise();
    }
};
RestaurantService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestaurantService);

class ListResponse {
}


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global/app.settings */ "./src/app/global/app.settings.ts");




let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllUsers() {
        return this.httpClient.get(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/all-users`).toPromise();
    }
    deleteUser(userId) {
        return this.httpClient.delete(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/delete-user/${userId}`, { observe: 'response' }).toPromise();
    }
    addUser(user, roles) {
        return this.httpClient.post(`${_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT}/api/add-user${roles && '?roles=' + roles.join()}`, user, { observe: 'response' })
            .toPromise();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peterbeleganski/Desktop/rms/src/main/resources/frontend.rms.admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map