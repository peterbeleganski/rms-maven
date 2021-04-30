function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- HEADER -->\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row style=\"color: white\">\n      <button mat-icon-button (click)=\"toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span style=\"color: white\">QrMenu</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n<!-- END HEADER -->\n<mat-drawer-container>\n  <mat-drawer mode=\"side\" [opened]=\"sideBarOpened\">\n    <app-navigation></app-navigation>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <router-outlet></router-outlet>\n  </mat-drawer-content>\n</mat-drawer-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccountMyProfileMyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>my-profile works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n  <h3>Welcome to FrogZone Admin</h3>\n  <h4>Current number of restaurants: {{restaurantsCount}}</h4>\n  <h4>Current number of menus: {{menusCount}}</h4>\n  <h4>Current number of products: {{productsCount}}</h4>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n      <h2>Вход</h2>\n      <img mat-card-sm-image src=\"../../assets/images/logo.png\" alt=\"\">\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Потребителско име/Имейл\" formControlName=\"username\" required>\n        <mat-error>\n          Моля въведете правилен Имейл адрес\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"password\" placeholder=\"Парола\" formControlName=\"password\" required>\n        <mat-error>\n         Моля въведете парола\n        </mat-error>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\">\n        <span style=\"color: white\">Вход</span>\n      </button>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCommonNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-nav-list *ngIf=\"getSecurityObject()\">\n  <div class=\"profile-card\" *ngIf=\"getSecurityObject() && getSecurityObject().authenticated\">\n    <div class=\"header\">\n      <h2>{{getSecurityObject().username}}</h2>\n      <h4>Роля: {{ getRepresentationTextForRoles(getSecurityObject().authorities) }}</h4>\n    </div>\n    <img src=\"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png\" alt=\"profile-icon\">\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <h2 matSubheader>Операции</h2>\n\n  <div *ngIf=\"!getSecurityObject()\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/login\"> <mat-icon>lock</mat-icon>Вход</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n      <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/restaurants\">\n        <mat-icon>list</mat-icon>\n        {{isAuthenticatedForRole('OWNER') ? 'Моите ресторанти' : 'Ресторанти'}}\n      </a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/restaurants/create\">\n      <mat-icon>restaurant</mat-icon> Добави ресторант</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/products/create\">\n      <mat-icon>fastfood</mat-icon>Добави продукт</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/import\">\n      <mat-icon>upload</mat-icon>Импортиране на продукти\n    </a>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <h2 matSubheader>Потребители</h2>\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/users/create\">\n      <mat-icon>group_add</mat-icon>Добави потребител</a>\n  </div>\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/users/all\">\n      <mat-icon>supervisor_account</mat-icon>Всички потребители</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" routerLink=\"/my-profile\">\n      <mat-icon>edit</mat-icon>Редактирай профила си</a>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" (click)=\"logout()\">\n      <mat-icon>settings</mat-icon>Настройки</a>\n  </div>\n\n  <div *ngIf=\"isAuthenticatedForRole('ADMIN,OWNER')\">\n    <a mat-list-item routerLinkActive=\"list-item-active\" (click)=\"logout()\">\n      <mat-icon>logout</mat-icon>Изход</a>\n  </div>\n</mat-nav-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductCreateProductCreateNewCategoryDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Добави категория</h2>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Име на категорията\" formControlName=\"title\" required>\n        <mat-error>\n          Моля въведете име на категорията\n        </mat-error>\n      </mat-form-field>\n      <br>\n      <button mat-raised-button mat-dialog-close color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addCategory(data)\"> <mat-icon>add</mat-icon> Добави</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductCreateProductCreateProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<div *ngIf=\"selectedRestaurantId\">\n  <a routerLink=\"/restaurants/{{selectedRestaurantId}}/products\">Вижте продуктите на ресторанта</a>\n</div>\n<h2 class=\"text-center\">Добави продукт</h2>\n<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <mat-form-field>\n        <mat-label>Изберете ресторант</mat-label>\n        <mat-select formControlName=\"selectedRestaurant\" (selectionChange)=\"onSelectRestaurant()\">\n          <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n            {{restaurant.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Изберете меню</mat-label>\n        <mat-select formControlName=\"selectedMenu\" multiple>\n          <mat-option *ngFor=\"let menu of menus\" [value]=\"menu\">\n            {{menu}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Въведете име на продукт\" formControlName=\"title\" required>\n        <mat-error>\n          Моля въведете име на продукта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input type=\"number\" matInput placeholder=\"Въведете цена на продукт\" formControlName=\"price\" required>\n        <mat-error>\n          Моля въведете цена на продукта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <textarea matInput placeholder=\"Въведете описание на продукт\" formControlName=\"description\" required> </textarea>\n        <mat-error>\n          Моля въведете описание на продукта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Въведете алергени за продукт пример: (яйца,мляко,подправки)\" formControlName=\"allergens\" required>\n        <mat-error>\n          Моля въведете алергени на продукта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Въведете тагове за продукт\" formControlName=\"tags\" required>\n        <mat-error>\n          Моля въведете тагове на продукта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <mat-label>Изберете категория</mat-label>\n            <mat-select formControlName=\"category\">\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                {{category.title}}\n              </mat-option>\n            </mat-select>\n          </div>\n          <div class=\"col-md-2\">\n            <button mat-icon-button color=\"primary\" (click)=\"addNewCategory(selectedRestaurantId, $event)\">\n              <mat-icon>add</mat-icon>\n            </button>\n          </div>\n        </div>\n      </mat-form-field>\n      <h3>Избери картинка</h3>\n      <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n      <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n      <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n      <button mat-raised-button color=\"primary\" class=\"add-product-button text-white\" (click)=\"addProduct()\"> <mat-icon>add</mat-icon> Добави</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductEditProductEditProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">Редактирай продукт</h2>\n<div class=\"loading-spinner\" *ngIf=\"!fetchedProduct\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"value\">\n    </mat-progress-spinner>\n  </div>\n</div>\n<mat-card *ngIf=\"product\">\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-md-5\">\n        <img mat-card-xl-image src=\"data:{{product.contentType}};base64,{{product.image}}\" alt=\"\">\n      </div>\n      <div class=\"col-md-7\">\n        <form [formGroup]=\"form\">\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"title\">Име на продукта</label>\n            <input matInput formControlName=\"title\" required id=\"title\">\n            <mat-error>\n              Моля въведете име на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"price\">Цена</label>\n            <input type=\"number\" matInput formControlName=\"price\" id=\"price\" required>\n            <mat-error>\n              Моля въведете цена на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"description\">Описание</label>\n            <textarea matInput formControlName=\"description\" required id=\"description\"> </textarea>\n            <mat-error>\n              Моля въведете описание на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"allergens\">Алергени</label>\n            <input matInput formControlName=\"allergens\" id=\"allergens\" required>\n            <mat-error>\n              Моля въведете алергени на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <label for=\"tags\">Тагове</label>\n            <input matInput formControlName=\"tags\" id=\"tags\" required>\n            <mat-error>\n              Моля въведете тагове на продукта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <mat-label>Изберете категория</mat-label>\n                <mat-select formControlName=\"category\">\n                  <mat-option *ngFor=\"let category of categories\" [value]=\"category\">\n                    {{category.title}}\n                  </mat-option>\n                </mat-select>\n              </div>\n              <div class=\"col-md-2\">\n                <button mat-icon-button color=\"primary\" (click)=\"addNewCategory(restaurantId, $event)\">\n                  <mat-icon>add</mat-icon>\n                </button>\n              </div>\n            </div>\n          </mat-form-field>\n          <h3>Избери картинка</h3>\n          <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n          <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n          <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n          <button mat-raised-button color=\"primary\" class=\"edit-product-button\" (click)=\"editProduct()\"> <mat-icon>create</mat-icon> Редактирай</button>\n        </form>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductImportProductsImportProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"text-center\">Импортиране на продукти</div>\n\n  <mat-card-content>\n    <form [formGroup]=\"importProductsForm\" #form=\"ngForm\">\n      <mat-form-field>\n        <mat-label>Изберете ресторант</mat-label>\n        <mat-select formControlName=\"restaurantId\">\n          <mat-option>-----</mat-option>\n          <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n            {{restaurant.name}}\n          </mat-option>\n        </mat-select>\n        <mat-error>Липсващ ресторант</mat-error>\n      </mat-form-field>\n\n      <span>Файл: {{importFile?.name}}</span>\n\n      <div>\n        <button mat-raised-button [disabled]=\"restaurantId.invalid || !importFile\" (click)=\"importProducts()\">Импортиране на продукти</button>\n        <button mat-raised-button color=\"primary\" (click)=\"importDialog.click()\" class=\"text-white\">\n          <mat-icon>attachment</mat-icon>\n          Изберете файл\n        </button>\n        <input #importDialog\n               formControlName=\"importFilename\"\n               type=\"file\"\n               accept=\".csv\"\n               (change)=\"onImportFileChosen($event)\"\n               hidden/>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<div class=\"text-center border-bottom\">\n  <h2>Продукти от ресторант: <u>{{restaurant?.name}}</u></h2>\n</div>\n<mat-form-field>\n  <mat-label>Търсете продукт</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Търсете продукт\">\n</mat-form-field>\n<div class=\"alert alert-danger\" *ngIf=\"products && products.length === 0\">\n  Все още няма продукти за този ресторант\n</div>\n<div class=\"loading-spinner\" *ngIf=\"!products\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"value\">\n    </mat-progress-spinner>\n  </div>\n</div>\n<table *ngIf=\"products\" mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <span *ngIf=\"column === 'edit'\">\n        <button mat-icon-button (click)=\"goToEditProduct(restaurant.id, element.id)\">\n          <mat-icon color=\"primary\">edit</mat-icon>\n        </button>\n      </span>\n      <span *ngIf=\"column === 'delete'\">\n        <button mat-icon-button (click)=\"deleteProduct(element)\">\n          <mat-icon color=\"warn\">delete</mat-icon>\n        </button>\n      </span>\n      <span *ngIf=\"column !== 'edit' && column !== 'delete'\">\n         {{ getDisplayTitleCategory(element, column)}}\n      </span>\n    </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n      <div class=\"row\">\n        <div class=\"col-md-10\">\n          <div class=\"example-element-detail\"\n               [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n            <div class=\"example-element-diagram\">\n              <div class=\"example-element-symbol\"> <img mat-card-sm-image class=\"image-sm\" src=\"data:{{element.contentType}};base64,{{element.image}}\" alt=\"Restaurant photo\"></div>\n            </div>\n            <div class=\"example-element-description\">\n              <span class=\"example-element-description-attribution\">Описание на продукта:</span>\n              {{element.description}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRestaurantCreateRestaurantCreateRestaurantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <h2>Добави ресторант</h2>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Име на ресторант\" formControlName=\"name\" required>\n        <mat-error>\n          Моля въведете име на ресторанта\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput placeholder=\"Локация на ресторанта\" formControlName=\"location\" required>\n        <mat-error>\n          Моля въведете локация на ресторанта\n        </mat-error>\n      </mat-form-field>\n      <h3>Избери картинка</h3>\n      <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n      <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n      <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n      <button mat-raised-button color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addRestaurant()\"> <mat-icon>add</mat-icon> <span>Добави</span></button>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRestaurantEditRestaurantEditRestaurantComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"text-center\">Редактирате ресторант: {{restaurant.name}}</h2>\n<mat-card>\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img mat-card-xl-image src=\"data:{{restaurant.contentType}};base64,{{restaurant.image}}\" alt=\"\">\n      </div>\n      <div class=\"col-md-8\">\n        <form [formGroup]=\"form\">\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Име на ресторант\" formControlName=\"name\" required>\n            <mat-error>\n              Моля въведете име на ресторанта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"full-width-input\">\n            <input matInput placeholder=\"Локация на ресторанта\" formControlName=\"location\" required>\n            <mat-error>\n              Моля въведете локация на ресторанта\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <mat-label>Статус на ресторант</mat-label>\n            <mat-select id=\"restaurant-status\" formControlName=\"active\">\n              <mat-option value=\"inactive\">неактивен</mat-option>\n              <mat-option value=\"active\">активен</mat-option>\n            </mat-select>\n          </mat-form-field>\n          <h3>Избери картинка</h3>\n          <button type=\"button\" mat-raised-button (click)=\"fileInput.click()\"> <mat-icon>attachment</mat-icon> Качи файл</button>\n          <span *ngIf=\"selectedImage\" class=\"mat-active\">\n        Избран файл: {{selectedImage}}\n      </span>\n          <input hidden (change)=\"onFileSelect($event)\" #fileInput type=\"file\" id=\"file\">\n          <button mat-raised-button color=\"primary\" class=\"edit-restaurant-button\" (click)=\"editRestaurant(restaurant.id)\"> <mat-icon>create</mat-icon> Редактирай</button>\n        </form>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRestaurantListRestaurantsConfirmationDialogHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-dialog-content>\n  <p>\n    {{message}}\n  </p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" (click)=\"onConfirmClick()\" tabindex=\"1\">{{confirmButtonText}}</button>\n  <button mat-raised-button mat-dialog-close tabindex=\"-1\">{{cancelButtonText}}</button>\n</mat-dialog-actions>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRestaurantListRestaurantsListRestaurantsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\n  <h2>Всички ресторанти</h2>\n</div>\n<mat-divider></mat-divider>\n<input class=\"form-control\" type=\"text\" placeholder=\"Търси ресторант\" id=\"search-box\" (ngModelChange)=\"fetchRestaurants({pageIndex:0})\" [(ngModel)]=\"searchText\" aria-label=\"Search\">\n\n<div class=\"loading-spinner\" *ngIf=\"!restaurants\">\n  <div>\n    <mat-progress-spinner\n      class=\"example-margin\"\n      [color]=\"color\"\n      [mode]=\"mode\"\n      [value]=\"value\">\n    </mat-progress-spinner>\n  </div>\n</div>\n\n<div *ngIf=\"restaurants\">\n  <mat-card class=\"example-card\" *ngFor=\"let restaurant of restaurants\" id=\"restaurant-cards\">\n    <button class=\"right\" mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"goToProducts(restaurant.id)\">\n        <mat-icon>create</mat-icon>\n        <span>\n        Редактирай\n      </span>\n      </button>\n      <button *ngIf=\"isAdmin()\" mat-menu-item (click)=\"deleteRestaurant(restaurant)\">\n        <mat-icon>delete_forever</mat-icon>\n        <span>Изтрий</span>\n      </button>\n    </mat-menu>\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>\n        <a routerLink=\"/restaurants/{{restaurant.id}}/products\">{{restaurant.name}}</a>\n      </mat-card-title>\n      <mat-card-subtitle>{{restaurant.location}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content class=\"text-center\">\n      <img mat-card-xl-image src=\"data:{{restaurant.contentType}};base64,{{restaurant.image}}\" alt=\"Restaurant photo\">\n    </mat-card-content>\n  </mat-card>\n\n    <mat-paginator [length]=\"totalElements\"\n                   [pageSize]=\"size\"\n                   [pageIndex]=\"page\"\n                   [pageSizeOptions]=\"[6]\"\n                   (page)=\"fetchRestaurants($event)\">\n    </mat-paginator>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserCreateUserCreateUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"form\">\n      <h2>Добави потребител</h2>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"email\" placeholder=\"Имейл на потребителя\" formControlName=\"username\" required>\n        <mat-error>\n          Моля въведете имейл на потребителя\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"full-width-input\">\n        <input matInput type=\"password\" placeholder=\"Парола на потребителя\" formControlName=\"password\" required>\n        <mat-error>\n          Моля въведете парола на потребителя\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Изберете ресторант</mat-label>\n        <mat-select formControlName=\"restaurantId\">\n          <mat-option *ngFor=\"let restaurant of restaurants\" [value]=\"restaurant.id\">\n            {{restaurant.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <mat-label>Изберете роля на потребителя</mat-label>\n        <mat-select formControlName=\"roles\" multiple>\n          <mat-option value=\"WAITER\">Сервитьор</mat-option>\n          <mat-option value=\"OWNER\">Собственик</mat-option>\n          <mat-option *ngIf=\"isAdmin()\" value=\"ADMIN\">Админ</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" class=\"add-restaurant-button text-white\" (click)=\"addUser()\"> <mat-icon>add</mat-icon> Добави</button>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserListUsersListUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"text-center\">\n  <h2>Всички Потребители</h2>\n</div>\n<mat-divider></mat-divider>\n<input class=\"form-control\" type=\"text\" placeholder=\"Търси сервитьор\" id=\"search-box\" [(ngModel)]=\"text\" aria-label=\"Search\">\n<br>\n<mat-divider></mat-divider>\n<a mat-button color=\"primary\" routerLink=\"/users/create\"><mat-icon>add</mat-icon>Добави нов потребител</a>\n<mat-divider></mat-divider>\n<mat-tab-group>\n  <mat-tab label=\"{{restaurant.name}}\" *ngFor=\"let restaurant of restaurants\">\n\n    <mat-card class=\"example-card\" *ngIf=\"restaurant.owner\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{restaurant.owner.username}}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"restaurant.owner && restaurant.owner.username\"></mat-card-subtitle>\n        <mat-card-subtitle>Роли: {{getRepresentationTextForRoles(['OWNER']).join(',')}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"text-center\">\n        <img mat-card-sm-image src=\"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png\" alt=\"user photo\">\n      </mat-card-content>\n      <mat-card-actions class=\"text-center\">\n        <a mat-button color=\"primary\" routerLink=\"/users/{{restaurant.owner.username}}/edit\"><mat-icon>create</mat-icon>Редактирай</a>\n        <button mat-button color=\"warn\" (click)=\"deleteUser(restaurant.owner)\"><mat-icon>delete_forever</mat-icon>Изтрий</button>\n      </mat-card-actions>\n    </mat-card>\n\n    <mat-card class=\"example-card\" *ngFor=\"let user of restaurant.waiters | filterUsers: text\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{user.username}}</mat-card-title>\n        <mat-card-subtitle *ngIf=\"user.restaurant && user.restaurant.name\">Ресторант: {{user?.restaurant?.name}}</mat-card-subtitle>\n        <mat-card-subtitle>Роли: {{getRepresentationTextForRoles(user.roles).join(',')}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content class=\"text-center\">\n        <img mat-card-sm-image src=\"https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png\" alt=\"user photo\">\n      </mat-card-content>\n      <mat-card-actions class=\"text-center\">\n        <a mat-button color=\"primary\" routerLink=\"/users/{{user.id}}/edit\"><mat-icon>create</mat-icon>Редактирай</a>\n        <button mat-button color=\"warn\" (click)=\"deleteUser(user)\"><mat-icon>delete_forever</mat-icon>Изтрий</button>\n      </mat-card-actions>\n    </mat-card>\n    <div *ngIf=\"restaurant.waiters.length === 0 && !restaurant.owner\">\n      <br>\n      <span class=\"text-danger\">Няма потребители за този ресторант</span>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmat-drawer {\n  width: 300px;\n}\nmat-drawer-container {\n  height: 100%;\n}\nmat-drawer-content {\n  padding: 20px;\n}\nul li {\n  list-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cbm1hdC1kcmF3ZXIge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authenticationService) {
        _classCallCheck(this, AppComponent);

        this.authenticationService = authenticationService;
        this.title = 'RMS-admin';
        this.sideBarOpened = false;
      }

      _createClass(AppComponent, [{
        key: "toggle",
        value: function toggle() {
          this.sideBarOpened = !this.sideBarOpened;
        }
      }, {
        key: "getSecurityObject",
        value: function getSecurityObject() {
          return JSON.parse(window.localStorage.getItem('user'));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./routing.module */
    "./src/app/routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/common/navigation/navigation.component */
    "./src/app/components/common/navigation/navigation.component.ts");
    /* harmony import */


    var _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/restaurant/list-restaurants/list-restaurants.component */
    "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/restaurant/create-restaurant/create-restaurant.component */
    "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts");
    /* harmony import */


    var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/product/product-list/product-list.component */
    "./src/app/components/product/product-list/product-list.component.ts");
    /* harmony import */


    var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/product/create-product/create-product.component */
    "./src/app/components/product/create-product/create-product.component.ts");
    /* harmony import */


    var _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/restaurant/edit-restaurant/edit-restaurant.component */
    "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts");
    /* harmony import */


    var _components_common_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/common/home/home.component */
    "./src/app/components/common/home/home.component.ts");
    /* harmony import */


    var _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/common/login/login.component */
    "./src/app/components/common/login/login.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _security_token_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./security/token.interceptor */
    "./src/app/security/token.interceptor.ts");
    /* harmony import */


    var _pipes_product_list_filter_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pipes/product-list-filter.pipe */
    "./src/app/pipes/product-list-filter.pipe.ts");
    /* harmony import */


    var _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/user/list-users/list-users.component */
    "./src/app/components/user/list-users/list-users.component.ts");
    /* harmony import */


    var _modules_material_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./modules/material/material-module */
    "./src/app/modules/material/material-module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _components_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/restaurant/list-restaurants/confirmation-dialog.component */
    "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
    /* harmony import */


    var _pipes_user_list_filter_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pipes/user-list-filter.pipe */
    "./src/app/pipes/user-list-filter.pipe.ts");
    /* harmony import */


    var _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/product/import-products/import-products.component */
    "./src/app/components/product/import-products/import-products.component.ts");
    /* harmony import */


    var _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/user/create-user/create-user.component */
    "./src/app/components/user/create-user/create-user.component.ts");
    /* harmony import */


    var _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/account/my-profile/my-profile.component */
    "./src/app/components/account/my-profile/my-profile.component.ts");
    /* harmony import */


    var _components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/product/create-product/create-new-category.dialog */
    "./src/app/components/product/create-product/create-new-category.dialog.ts");
    /* harmony import */


    var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/product/edit-product/edit-product.component */
    "./src/app/components/product/edit-product/edit-product.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"], _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_7__["ListRestaurantsComponent"], _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_9__["CreateRestaurantComponent"], _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_11__["CreateProductComponent"], _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_12__["EditRestaurantComponent"], _components_common_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_28__["EditProductComponent"], _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _pipes_product_list_filter_pipe__WEBPACK_IMPORTED_MODULE_18__["ProductListFilterPipe"], _pipes_user_list_filter_pipe__WEBPACK_IMPORTED_MODULE_23__["UserListFilterPipe"], _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_19__["ListUsersComponent"], _components_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ConfirmationDialogComponent"], _components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__["CreateNewCategoryDialogComponent"], _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__["CreateUserComponent"], _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_26__["MyProfileComponent"], _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_24__["ImportProductsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(), _modules_material_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
        useClass: _security_token_interceptor__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"],
        multi: true
      }],
      entryComponents: [_components_product_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_27__["CreateNewCategoryDialogComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/account/my-profile/my-profile.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/account/my-profile/my-profile.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAccountMyProfileMyProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9teS1wcm9maWxlL215LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/account/my-profile/my-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/account/my-profile/my-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppComponentsAccountMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyProfileComponent = /*#__PURE__*/function () {
      function MyProfileComponent() {
        _classCallCheck(this, MyProfileComponent);
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/my-profile/my-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-profile.component.css */
      "./src/app/components/account/my-profile/my-profile.component.css"))["default"]]
    })], MyProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/common/home/home.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/components/common/home/home.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/common/home/home.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/common/home/home.component.ts ***!
    \**********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsCommonHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/common/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/common/login/login.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/components/common/login/login.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 400px;\n  margin: 2em auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/common/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/common/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsCommonLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, authenticationService, toastrService, router) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.toastrService = toastrService;
        this.router = router;
        this.form = formBuilder.group({
          username: [],
          password: []
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.authenticationService.login(this.form.getRawValue()).then(function (data) {
                      var _a;

                      if ((_a = data.body.authorities) === null || _a === void 0 ? void 0 : _a.includes('USER')) {
                        return Promise.reject({
                          error: {
                            message: 'Клиенти не могат да достъпват администраторската система'
                          }
                        });
                      }

                      _this.authenticationService.setSecurityObject(data.body);

                      _this.toastrService.success('Успешен вход!');

                      _this.router.navigateByUrl('/restaurants');
                    })["catch"](function (err) {
                      var _a, _b;

                      if ((_a = err.error) === null || _a === void 0 ? void 0 : _a.message) {
                        _this.toastrService.error((_b = err.error) === null || _b === void 0 ? void 0 : _b.message);
                      } else {
                        _this.toastrService.error(err);
                      }
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/common/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/common/navigation/navigation.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/common/navigation/navigation.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCommonNavigationNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-card {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n\n.profile-card img {\n  width: 120px;\n  height: 120px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n\n:host mat-icon {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1vbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XG59XG5cbi5wcm9maWxlLWNhcmQgaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46aG9zdCBtYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/common/navigation/navigation.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/common/navigation/navigation.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppComponentsCommonNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent(authenticationService) {
        _classCallCheck(this, NavigationComponent);

        this.authenticationService = authenticationService;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getSecurityObject",
        value: function getSecurityObject() {
          return JSON.parse(window.localStorage.getItem('user'));
        }
      }, {
        key: "isAuthenticatedForRole",
        value: function isAuthenticatedForRole(role) {
          var user = JSON.parse(window.localStorage.getItem('user'));

          if (user && user.authorities) {
            return role.includes(user.authorities);
          } else {
            return false;
          }
        }
      }, {
        key: "getRepresentationTextForRoles",
        value: function getRepresentationTextForRoles(roles) {
          return _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].getRepresentationTextForRoles(roles);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
        }
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/navigation/navigation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navigation.component.css */
      "./src/app/components/common/navigation/navigation.component.css"))["default"]]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/components/product/create-product/create-new-category.dialog.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/product/create-product/create-new-category.dialog.ts ***!
    \*********************************************************************************/

  /*! exports provided: CreateNewCategoryDialogComponent */

  /***/
  function srcAppComponentsProductCreateProductCreateNewCategoryDialogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateNewCategoryDialogComponent", function () {
      return CreateNewCategoryDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/category.service */
    "./src/app/services/category.service.ts");

    var CreateNewCategoryDialogComponent = /*#__PURE__*/function () {
      function CreateNewCategoryDialogComponent(data, formBuilder, categoryService) {
        _classCallCheck(this, CreateNewCategoryDialogComponent);

        this.data = data;
        this.categoryService = categoryService;
        this.category = {};
        this.form = formBuilder.group({
          title: []
        });
      }

      _createClass(CreateNewCategoryDialogComponent, [{
        key: "addCategory",
        value: function addCategory(data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.category = {
                      title: this.title.value
                    };
                    _context3.next = 3;
                    return this.categoryService.addCategory(data.restaurantId, this.category);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "title",
        get: function get() {
          return this.form.get('title');
        }
      }]);

      return CreateNewCategoryDialogComponent;
    }();

    CreateNewCategoryDialogComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }];
    };

    CreateNewCategoryDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-new-category.dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-new-category.dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-new-category.dialog.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CreateNewCategoryDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/product/create-product/create-product.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/product/create-product/create-product.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductCreateProductCreateProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 500px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.add-product-button {\n  margin-left: 10px;\n}\n\n.mat-dialog-container {\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtcHJvZHVjdC1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product/create-product/create-product.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/product/create-product/create-product.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: CreateProductComponent */

  /***/
  function srcAppComponentsProductCreateProductCreateProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function () {
      return CreateProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _create_new_category_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./create-new-category.dialog */
    "./src/app/components/product/create-product/create-new-category.dialog.ts");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/category.service */
    "./src/app/services/category.service.ts");

    var CreateProductComponent = /*#__PURE__*/function () {
      function CreateProductComponent(formBuilder, restaurantService, productService, toastrService, router, authenticationService, dialog, categoryService) {
        _classCallCheck(this, CreateProductComponent);

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
          image: ['']
        });
      }

      _createClass(CreateProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchRestaurants();
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          var _this2 = this;

          this.product = {
            title: this.title.value,
            price: this.price.value,
            quantity: 1,
            description: this.description.value,
            allergens: this.allergens.value && this.allergens.value.split(','),
            tags: this.tags.value && this.tags.value.split(','),
            category: this.category.value,
            menus: this.selectedMenu.value,
            restaurantId: this.selectedRestaurant.value
          };
          this.selectedMenuId = this.selectedMenu.value || ['default'];
          this.selectedRestaurantId = this.selectedRestaurant.value;
          var formData = new FormData();
          formData.append('file', this.form.get('image').value);
          this.restaurantService.addProduct(this.selectedRestaurant.value, this.product).then(function (res) {
            _this2.productService.addImageToProduct(res.body.id, formData).then(function () {
              _this2.toastrService.success('Успешно добавихте продукта');
            })["catch"](function (err) {
              _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, _this2.toastrService, _this2.router);
            });
          })["catch"](function (err) {
            _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, _this2.toastrService, _this2.router);
          });
        }
      }, {
        key: "fetchRestaurants",
        value: function fetchRestaurants() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.user = this.authenticationService.getSecurityObject();

                    if (!(this.user.authorities && this.user.authorities.includes('OWNER'))) {
                      _context4.next = 7;
                      break;
                    }

                    _context4.next = 4;
                    return this.restaurantService.getAllNames(this.user.username);

                  case 4:
                    this.restaurants = _context4.sent;
                    _context4.next = 10;
                    break;

                  case 7:
                    _context4.next = 9;
                    return this.restaurantService.getAllNames(undefined);

                  case 9:
                    this.restaurants = _context4.sent;

                  case 10:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "onSelectRestaurant",
        value: function onSelectRestaurant() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var restaurantId;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    restaurantId = this.selectedRestaurant.value;
                    this.restaurantService.getById(restaurantId).then(function (selectedRestaurantResponse) {
                      _this3.menus = selectedRestaurantResponse.body.menus || ['default'];
                      _this3.categories = selectedRestaurantResponse.body.categories;
                      _this3.selectedRestaurantFullObject = selectedRestaurantResponse.body;
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          var _a;

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('image').setValue(file);
          }
        }
      }, {
        key: "addNewCategory",
        value: function addNewCategory(selectedRestaurantId, event) {
          var _this4 = this;

          event.stopPropagation();
          event.preventDefault();
          this.dialog.open(_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_10__["CreateNewCategoryDialogComponent"], {
            data: {
              restaurantId: this.selectedRestaurant.value
            },
            height: '240px',
            width: '450px'
          });
          this.dialog.afterAllClosed.subscribe(function (result) {
            _this4.categoryService.getAllCategoriesByRestaurantId(_this4.selectedRestaurant.value).then(function (categories) {
              _this4.categories = categories;

              if (_this4.categories.length !== 0) {
                _this4.addedCategory = _this4.categories[_this4.categories.length - 1];

                _this4.category.setValue(_this4.addedCategory);
              }
            });
          });
        }
      }, {
        key: "selectedRestaurant",
        get: function get() {
          return this.form.get('selectedRestaurant');
        }
      }, {
        key: "selectedMenu",
        get: function get() {
          return this.form.get('selectedMenu');
        }
      }, {
        key: "title",
        get: function get() {
          return this.form.get('title');
        }
      }, {
        key: "price",
        get: function get() {
          return this.form.get('price');
        }
      }, {
        key: "description",
        get: function get() {
          return this.form.get('description');
        }
      }, {
        key: "allergens",
        get: function get() {
          return this.form.get('allergens');
        }
      }, {
        key: "tags",
        get: function get() {
          return this.form.get('tags');
        }
      }, {
        key: "category",
        get: function get() {
          return this.form.get('category');
        }
      }]);

      return CreateProductComponent;
    }();

    CreateProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"]
      }];
    };

    CreateProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-create-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/create-product/create-product.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-product.component.css */
      "./src/app/components/product/create-product/create-product.component.css"))["default"]]
    })], CreateProductComponent);
    /***/
  },

  /***/
  "./src/app/components/product/edit-product/edit-product.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/product/edit-product/edit-product.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductEditProductEditProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.edit-product-button {\n  margin-left: 10px;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2VkaXQtcHJvZHVjdC9lZGl0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRpdC1wcm9kdWN0LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product/edit-product/edit-product.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/product/edit-product/edit-product.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EditProductComponent */

  /***/
  function srcAppComponentsProductEditProductEditProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
      return EditProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var _create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../create-product/create-new-category.dialog */
    "./src/app/components/product/create-product/create-new-category.dialog.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/category.service */
    "./src/app/services/category.service.ts");

    var EditProductComponent = /*#__PURE__*/function () {
      function EditProductComponent(formBuilder, activeRoute, restaurantService, productService, toastrService, router, dialog, categoryService) {
        _classCallCheck(this, EditProductComponent);

        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.categoryService = categoryService;
        this.product = {
          title: ''
        };
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
          image: ['']
        });
      }

      _createClass(EditProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.fetchProduct();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "setFormData",
        value: function setFormData() {
          this.form = this.formBuilder.group({
            title: [this.product.title],
            price: [this.product.price],
            quantity: [this.product.quantity],
            description: [this.product.description],
            allergens: [this.product.allergens],
            tags: [this.product.tags],
            category: [this.product.category],
            image: ['']
          });
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          var _a;

          if (event.target.files.length > 0) {
            this.isSelectedNewImage = true;
            var file = event.target.files[0];
            this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('image').setValue(file);
          }
        }
      }, {
        key: "editProduct",
        value: function editProduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.product.title = this.form.get('title').value;
                    this.product.price = this.form.get('price').value;
                    this.product.quantity = this.form.get('quantity').value;
                    this.product.description = this.form.get('description').value;
                    this.product.allergens = this.form.get('allergens').value;
                    this.product.tags = this.form.get('tags').value;
                    this.product.category = this.form.get('category').value;
                    this.productService.editProduct(this.product.id, this.product).then(function (response) {
                      if (_this5.isSelectedNewImage) {
                        var formData = new FormData();
                        formData.append('file', _this5.form.get('image').value);

                        _this5.productService.addImageToProduct(_this5.product.id, formData).then(function (res) {
                          _this5.toastrService.success('Успешно редактирахте продукта');

                          _this5.router.navigateByUrl("/restaurants/".concat(_this5.restaurant.id, "/products"));
                        })["catch"](function (err) {
                          _this5.toastrService.warning('Проблем при качването на снимката');
                        });
                      } else {
                        _this5.toastrService.success('Успешно редактирахте продукта');

                        _this5.router.navigateByUrl("/restaurants/".concat(_this5.restaurant.id, "/products"));
                      }
                    })["catch"](function (err) {
                      _global_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].redirectAndRequireToLogin(err.status, _this5.toastrService, _this5.router);
                    });

                  case 8:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "fetchProduct",
        value: function fetchProduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var restaurantId, productId;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    restaurantId = this.activeRoute.snapshot.paramMap.get('id');
                    this.restaurantId = restaurantId;
                    productId = this.activeRoute.snapshot.paramMap.get('productId');
                    this.productId = productId;
                    _context8.next = 6;
                    return this.productService.getById(productId);

                  case 6:
                    this.product = _context8.sent.body;
                    _context8.next = 9;
                    return this.restaurantService.getById(restaurantId);

                  case 9:
                    this.restaurant = _context8.sent.body;
                    this.categories = this.restaurant.categories;
                    this.setFormData();
                    this.fetchedProduct = true;

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "addNewCategory",
        value: function addNewCategory(selectedRestaurantId, event) {
          var _this6 = this;

          event.stopPropagation();
          event.preventDefault();
          this.dialog.open(_create_product_create_new_category_dialog__WEBPACK_IMPORTED_MODULE_8__["CreateNewCategoryDialogComponent"], {
            data: {
              restaurantId: this.restaurant.id
            },
            height: '240px',
            width: '450px'
          });
          this.dialog.afterAllClosed.subscribe(function (result) {
            _this6.categoryService.getAllCategoriesByRestaurantId(_this6.restaurant.id).then(function (categories) {
              _this6.categories = categories;

              if (_this6.categories.length !== 0) {
                var addedCategory = _this6.categories[_this6.categories.length - 1];

                _this6.form.get('category').setValue(addedCategory);
              }
            });
          });
        }
      }]);

      return EditProductComponent;
    }();

    EditProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_6__["RestaurantService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
      }, {
        type: _services_category_service__WEBPACK_IMPORTED_MODULE_10__["CategoryService"]
      }];
    };

    EditProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-edit-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/edit-product/edit-product.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-product.component.css */
      "./src/app/components/product/edit-product/edit-product.component.css"))["default"]]
    })], EditProductComponent);
    /***/
  },

  /***/
  "./src/app/components/product/import-products/import-products.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/product/import-products/import-products.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductImportProductsImportProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-raised-button {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2ltcG9ydC1wcm9kdWN0cy9pbXBvcnQtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9pbXBvcnQtcHJvZHVjdHMvaW1wb3J0LXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product/import-products/import-products.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/product/import-products/import-products.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ImportProductsComponent */

  /***/
  function srcAppComponentsProductImportProductsImportProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImportProductsComponent", function () {
      return ImportProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");

    var ImportProductsComponent = /*#__PURE__*/function () {
      function ImportProductsComponent(formBuilder, restaurantService, productService, toasterService) {
        _classCallCheck(this, ImportProductsComponent);

        this.formBuilder = formBuilder;
        this.restaurantService = restaurantService;
        this.productService = productService;
        this.toasterService = toasterService;
        this.buildImportProductsForm();
      }

      _createClass(ImportProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadRestaurants();

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "onImportFileChosen",
        value: function onImportFileChosen(event) {
          var selectedFile = event.target.files[0];

          if (selectedFile) {
            this.importFile = selectedFile;
          }
        }
      }, {
        key: "importProducts",
        value: function importProducts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var restaurantId, formData, importProductsResponse, importedProductsCount;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    restaurantId = this.restaurantId.value;
                    formData = new FormData();
                    formData.append("importFile", this.importFile);
                    _context10.next = 6;
                    return this.productService.importProducts(restaurantId, formData);

                  case 6:
                    importProductsResponse = _context10.sent;

                    if (importProductsResponse.status === 200) {
                      importedProductsCount = importProductsResponse.body;
                      this.toasterService.success("\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u0430\u043D\u0435 \u043D\u0430 ".concat(importedProductsCount, " \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438"));
                      this.clearFormFieldsAndData();
                    } else {
                      this.toasterService.error("Неуспешно импортиране на продукти");
                    }

                    _context10.next = 14;
                    break;

                  case 10:
                    _context10.prev = 10;
                    _context10.t0 = _context10["catch"](0);
                    this.toasterService.error("Неуспешно импортиране на продукти");
                    console.error(_context10.t0);

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[0, 10]]);
          }));
        }
      }, {
        key: "buildImportProductsForm",
        value: function buildImportProductsForm() {
          this.importProductsForm = this.formBuilder.group({
            restaurantId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            importFilename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "loadRestaurants",
        value: function loadRestaurants() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.restaurantService.getAllNames();

                  case 2:
                    this.restaurants = _context11.sent;

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "clearFormFieldsAndData",
        value: function clearFormFieldsAndData() {
          this.importProductsForm.reset();
          this.form.resetForm();
          this.importFile = null;
        }
      }, {
        key: "restaurantId",
        get: function get() {
          return this.importProductsForm.get("restaurantId");
        }
      }, {
        key: "importFilename",
        get: function get() {
          return this.importProductsForm.get("importFilename");
        }
      }]);

      return ImportProductsComponent;
    }();

    ImportProductsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_5__["RestaurantService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("form")], ImportProductsComponent.prototype, "form", void 0);
    ImportProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-import-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./import-products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/import-products/import-products.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./import-products.component.css */
      "./src/app/components/product/import-products/import-products.component.css"))["default"]]
    })], ImportProductsComponent);
    /***/
  },

  /***/
  "./src/app/components/product/product-list/product-list.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/components/product/product-list/product-list.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\nmat-form-field {\n  width: 400px;\n}\n\nmat-card {\n  width: 30%;\n  display: inline-block;\n  margin: 10px;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\nmat-card-header img {\n  text-align: center;\n  margin: 0 auto;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.image-sm {\n  width: 20%;\n  height: 15%;\n}\n\n.actions {\n  margin-top: -40px;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2gtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbm1hdC1jYXJkLWhlYWRlciBpbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRpYWdyYW0ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5pbWFnZS1zbSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTUlO1xufVxuXG4uYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/product/product-list/product-list.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/product/product-list/product-list.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppComponentsProductProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../restaurant/list-restaurants/confirmation-dialog.component */
    "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(restaurantService, productService, activeRoute, toastrService, router, dialog) {
        _classCallCheck(this, ProductListComponent);

        this.restaurantService = restaurantService;
        this.productService = productService;
        this.activeRoute = activeRoute;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.text = '';
        this.columnsToDisplay = ['title', 'price', 'allergens', 'tags', 'category', 'menus', 'edit', 'delete'];
        this.color = 'accent';
        this.mode = 'indeterminate';
        this.value = 30;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.fetchProducts();

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(product) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this7 = this;

            var dialogRef;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    dialogRef = this.dialog.open(_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
                      data: {
                        message: "\u0421\u0438\u0433\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0448 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 '".concat(product.title, " ?'"),
                        buttonText: {
                          ok: 'Да',
                          cancel: 'Не'
                        }
                      }
                    });
                    dialogRef.afterClosed().subscribe(function (confirmed) {
                      if (confirmed) {
                        var a = document.createElement('a');
                        a.click();
                        a.remove();

                        _this7.productService.deleteProduct(product.id).then(function (response) {
                          if (response.status === 204) {
                            _this7.toastrService.success('Изтрихте продукта успешно');

                            _this7.fetchProducts();
                          }
                        })["catch"](function (err) {
                          _global_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"].redirectAndRequireToLogin(err.status, _this7.toastrService, _this7.router);
                        });
                      }
                    });

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "fetchProducts",
        value: function fetchProducts() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var restaurantId;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    restaurantId = this.activeRoute.snapshot.paramMap.get('id');
                    _context14.next = 3;
                    return this.restaurantService.getById(restaurantId);

                  case 3:
                    this.restaurant = _context14.sent.body;
                    _context14.next = 6;
                    return this.productService.getAllByRestaurantId(restaurantId);

                  case 6:
                    this.products = _context14.sent.body.content.filter(function (p) {
                      return p !== null;
                    });
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](this.products);

                  case 8:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getDisplayTitleCategory",
        value: function getDisplayTitleCategory(element, column) {
          var _a;

          if (column === 'category') {
            return (_a = element.category) === null || _a === void 0 ? void 0 : _a.title;
          }

          return element[column];
        }
      }, {
        key: "goToEditProduct",
        value: function goToEditProduct(restaurantId, productId) {
          this.router.navigateByUrl("/restaurants/".concat(restaurantId, "/products/").concat(productId, "/edit"));
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ctorParameters = function () {
      return [{
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"]
      }, {
        type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }];
    };

    ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-menu-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product-list/product-list.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '0px',
        minHeight: '0'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_9__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/components/product/product-list/product-list.component.css"))["default"]]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/components/restaurant/create-restaurant/create-restaurant.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/restaurant/create-restaurant/create-restaurant.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRestaurantCreateRestaurantCreateRestaurantComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 500px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.add-restaurant-button {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2NyZWF0ZS1yZXN0YXVyYW50L2NyZWF0ZS1yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3RhdXJhbnQvY3JlYXRlLXJlc3RhdXJhbnQvY3JlYXRlLXJlc3RhdXJhbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFkZC1yZXN0YXVyYW50LWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CreateRestaurantComponent */

  /***/
  function srcAppComponentsRestaurantCreateRestaurantCreateRestaurantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateRestaurantComponent", function () {
      return CreateRestaurantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");

    var CreateRestaurantComponent = /*#__PURE__*/function () {
      function CreateRestaurantComponent(restaurantService, formBuilder, toastrService, router) {
        _classCallCheck(this, CreateRestaurantComponent);

        this.restaurantService = restaurantService;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.router = router;
        this.restaurant = {};
        this.fileData = null;
        this.form = formBuilder.group({
          name: [],
          location: [],
          image: ['']
        });
      }

      _createClass(CreateRestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.restaurant.name = '';
          this.restaurant.location = '';
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          var _a;

          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('image').setValue(file);
          }
        }
      }, {
        key: "addRestaurant",
        value: function addRestaurant() {
          var _this8 = this;

          this.restaurant = {
            name: this.name.value,
            location: this.location.value
          };
          this.restaurantService.addRestaurant(this.restaurant).then(function (res) {
            var formData = new FormData();
            formData.append('file', _this8.form.get('image').value);

            _this8.restaurantService.addImageToRestaurant(formData, res.body.id).then(function (response) {
              if (response.status === 200) {
                _this8.toastrService.success('Успешно добавен ресторант');

                _this8.setEmptyValuesForFormGroup(_this8.form);
              } else {
                _this8.toastrService.warning('Възникна проблем при създаването на ресторанта');
              }
            });
          })["catch"](function (err) {
            _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, _this8.toastrService, _this8.router);
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.form.get('name');
        }
      }, {
        key: "location",
        get: function get() {
          return this.form.get('location');
        }
      }, {
        key: "setEmptyValuesForFormGroup",
        value: function setEmptyValuesForFormGroup(formGroup) {
          var _this9 = this;

          Object.values(formGroup.controls).forEach(function (control) {
            control.setValue('');
            control.setErrors(undefined);

            if (control.controls) {
              _this9.setEmptyValuesForFormGroup(control);
            }
          });
        }
      }]);

      return CreateRestaurantComponent;
    }();

    CreateRestaurantComponent.ctorParameters = function () {
      return [{
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_2__["RestaurantService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CreateRestaurantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-restaurant',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-restaurant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/create-restaurant/create-restaurant.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-restaurant.component.css */
      "./src/app/components/restaurant/create-restaurant/create-restaurant.component.css"))["default"]]
    })], CreateRestaurantComponent);
    /***/
  },

  /***/
  "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRestaurantEditRestaurantEditRestaurantComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 800px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n.edit-restaurant-button {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2VkaXQtcmVzdGF1cmFudC9lZGl0LXJlc3RhdXJhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdGF1cmFudC9lZGl0LXJlc3RhdXJhbnQvZWRpdC1yZXN0YXVyYW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5lZGl0LXJlc3RhdXJhbnQtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EditRestaurantComponent */

  /***/
  function srcAppComponentsRestaurantEditRestaurantEditRestaurantComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRestaurantComponent", function () {
      return EditRestaurantComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");

    var EditRestaurantComponent = /*#__PURE__*/function () {
      function EditRestaurantComponent(formBuilder, activeRoute, restaurantService, toastrService, router) {
        _classCallCheck(this, EditRestaurantComponent);

        this.formBuilder = formBuilder;
        this.activeRoute = activeRoute;
        this.restaurantService = restaurantService;
        this.toastrService = toastrService;
        this.router = router;
        this.fileData = null;
        this.restaurant = {
          name: ''
        };
        this.form = this.formBuilder.group({
          name: [],
          location: [],
          image: [],
          active: []
        });
      }

      _createClass(EditRestaurantComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.fetchRestaurants();

                  case 2:
                    this.form = this.formBuilder.group({
                      name: this.restaurant.name,
                      location: this.restaurant.location,
                      image: this.restaurant.image,
                      active: this.restaurant.active ? "active" : "inactive"
                    });

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "editRestaurant",
        value: function editRestaurant(restaurantId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.restaurant.name = this.form.get('name').value;
                    this.restaurant.location = this.form.get('location').value;
                    this.restaurant.active = this.form.get("active").value === "active";
                    this.restaurantService.patchUpdateRestaurant(restaurantId, this.restaurant).then(function (response) {
                      if (response.status === 200 && _this10.isSelectedNewImage) {
                        var formData = new FormData();
                        formData.append('file', _this10.form.get('image').value);

                        _this10.restaurantService.addImageToRestaurant(formData, _this10.restaurant.id).then(function () {
                          _this10.router.navigateByUrl('/restaurants');

                          _this10.toastrService.success('Успешно редактирахте ресторанта');
                        });
                      } else {
                        _this10.router.navigateByUrl('/restaurants');

                        _this10.toastrService.success('Успешно редактирахте ресторанта');
                      }
                    })["catch"](function (err) {
                      _global_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].redirectAndRequireToLogin(err.status, _this10.toastrService, _this10.router);
                    });

                  case 4:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          var _a;

          if (event.target.files.length > 0) {
            this.isSelectedNewImage = true;
            var file = event.target.files[0];
            this.selectedCoverImage = (_a = event.target.files[0]) === null || _a === void 0 ? void 0 : _a.name;
            this.form.get('image').setValue(file);
          }
        }
      }, {
        key: "fetchRestaurants",
        value: function fetchRestaurants() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            var restaurantId;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    restaurantId = this.activeRoute.snapshot.paramMap.get('id');
                    _context17.next = 3;
                    return this.restaurantService.getById(restaurantId);

                  case 3:
                    this.restaurant = _context17.sent.body;

                  case 4:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }]);

      return EditRestaurantComponent;
    }();

    EditRestaurantComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    EditRestaurantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-edit-restaurant',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./edit-restaurant.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./edit-restaurant.component.css */
      "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.css"))["default"]]
    })], EditRestaurantComponent);
    /***/
  },

  /***/
  "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ConfirmationDialogComponent */

  /***/
  function srcAppComponentsRestaurantListRestaurantsConfirmationDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
      return ConfirmationDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");

    var ConfirmationDialogComponent = /*#__PURE__*/function () {
      function ConfirmationDialogComponent(data, dialogRef) {
        _classCallCheck(this, ConfirmationDialogComponent);

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

      _createClass(ConfirmationDialogComponent, [{
        key: "onConfirmClick",
        value: function onConfirmClick() {
          this.dialogRef.close(true);
        }
      }]);

      return ConfirmationDialogComponent;
    }();

    ConfirmationDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    ConfirmationDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./confirmation-dialog.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/confirmation-dialog.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ConfirmationDialogComponent);
    /***/
  },

  /***/
  "./src/app/components/restaurant/list-restaurants/list-restaurants.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/restaurant/list-restaurants/list-restaurants.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRestaurantListRestaurantsListRestaurantsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#search-box {\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n#restaurant-cards {\n  margin: 10px;\n}\n\nmat-card {\n  width: 28%;\n  display: inline-block;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\nmat-card-header img {\n  text-align: center;\n  margin: 0 auto;\n}\n\n.right {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n\n.no-border {\n  padding: 0;\n  border: none;\n  background: none;\n}\n\n.loading-spinner {\n  position: relative;\n  left: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2xpc3QtcmVzdGF1cmFudHMvbGlzdC1yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN0YXVyYW50L2xpc3QtcmVzdGF1cmFudHMvbGlzdC1yZXN0YXVyYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaC1ib3gge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4jcmVzdGF1cmFudC1jYXJkcyB7XG4gIG1hcmdpbjogMTBweDtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDogMjglO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5cbm1hdC1jYXJkLWhlYWRlciBpbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMnB4O1xufVxuXG4ubm8tYm9yZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4ubG9hZGluZy1zcGlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ListRestaurantsComponent */

  /***/
  function srcAppComponentsRestaurantListRestaurantsListRestaurantsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRestaurantsComponent", function () {
      return ListRestaurantsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./confirmation-dialog.component */
    "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ListRestaurantsComponent = /*#__PURE__*/function () {
      function ListRestaurantsComponent(restaurantService, toastrService, dialog, authenticationService, router) {
        _classCallCheck(this, ListRestaurantsComponent);

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
        this.value = 30;
      }

      _createClass(ListRestaurantsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.fetchRestaurants({
                      pageIndex: this.page,
                      pageSize: this.size
                    });

                  case 2:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        } // fetch all restaurants for ADMIN role and only owner's restaurant if the user is owner

      }, {
        key: "fetchRestaurants",
        value: function fetchRestaurants(paginationObject) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.user = this.authenticationService.getSecurityObject();

                    if (!(this.user.authorities && this.user.authorities.includes('OWNER'))) {
                      _context19.next = 6;
                      break;
                    }

                    _context19.next = 4;
                    return this.requestRestaurants(paginationObject, this.user.username);

                  case 4:
                    _context19.next = 8;
                    break;

                  case 6:
                    _context19.next = 8;
                    return this.requestRestaurants(paginationObject);

                  case 8:
                    this.page = paginationObject.pageIndex;

                  case 9:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "requestRestaurants",
        value: function requestRestaurants(obj, user) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var allRestaurantResponse;
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.restaurantService.getAll(user, this.searchText, obj.pageIndex, this.size);

                  case 2:
                    allRestaurantResponse = _context20.sent;
                    this.totalElements = allRestaurantResponse.body.totalElements;
                    this.restaurants = allRestaurantResponse.body.content;

                  case 5:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "deleteRestaurant",
        value: function deleteRestaurant(restaurant) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            var _this11 = this;

            var dialogRef;
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    dialogRef = this.dialog.open(_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationDialogComponent"], {
                      data: {
                        message: "\u0421\u0438\u0433\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0448 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0442 '".concat(restaurant.name, " ?'"),
                        buttonText: {
                          ok: 'Да',
                          cancel: 'Не'
                        }
                      }
                    });
                    dialogRef.afterClosed().subscribe(function (confirmed) {
                      if (confirmed) {
                        var a = document.createElement('a');
                        a.click();
                        a.remove();

                        _this11.restaurantService.deleteRestaurant(restaurant.id).then(function (response) {
                          if (response.status === 200) {
                            _this11.toastrService.success('Успешно изтрихте ресторанта!');

                            _this11.fetchRestaurants({
                              pageIndex: _this11.page,
                              pageSize: _this11.size
                            });
                          }
                        });
                      }
                    });

                  case 2:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "goToProducts",
        value: function goToProducts(restaurantId) {
          this.router.navigateByUrl("/restaurants/".concat(restaurantId, "/edit"));
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.user.authorities.includes('ADMIN');
        }
      }]);

      return ListRestaurantsComponent;
    }();

    ListRestaurantsComponent.ctorParameters = function () {
      return [{
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    ListRestaurantsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-list-restaurants',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-restaurants.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/restaurant/list-restaurants/list-restaurants.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-restaurants.component.css */
      "./src/app/components/restaurant/list-restaurants/list-restaurants.component.css"))["default"]]
    })], ListRestaurantsComponent);
    /***/
  },

  /***/
  "./src/app/components/user/create-user/create-user.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/components/user/create-user/create-user.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserCreateUserCreateUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  max-width: 500px;\n  margin: 0 auto;\n  text-align: center;\n}\n\nmat-form-field {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXIvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/user/create-user/create-user.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/user/create-user/create-user.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateUserComponent */

  /***/
  function srcAppComponentsUserCreateUserCreateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function () {
      return CreateUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var CreateUserComponent = /*#__PURE__*/function () {
      function CreateUserComponent(formBuilder, userService, restaurantService, toastrService, router, authenticationService) {
        _classCallCheck(this, CreateUserComponent);

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

      _createClass(CreateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var user;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    user = this.authenticationService.getSecurityObject();

                    if (!user.authorities.includes('OWNER')) {
                      _context22.next = 7;
                      break;
                    }

                    _context22.next = 4;
                    return this.restaurantService.getAllNames(user.username);

                  case 4:
                    this.restaurants = _context22.sent;
                    _context22.next = 10;
                    break;

                  case 7:
                    _context22.next = 9;
                    return this.restaurantService.getAllNames();

                  case 9:
                    this.restaurants = _context22.sent;

                  case 10:
                    this.user.password = '';
                    this.user.restaurantId = '';
                    this.user.username = '';
                    this.selectedRestaurantId = '';

                  case 14:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "addUser",
        value: function addUser() {
          var _this12 = this;

          var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            restaurantId: this.form.get('restaurantId').value
          };
          this.userService.addUser(user, this.form.get('roles').value).then(function (res) {
            if (res.status === 200) {
              _this12.toastrService.success('Успешно създадохте потребителя');

              _this12.setEmptyValuesForFormGroup(_this12.form);
            }
          })["catch"](function (err) {
            _global_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"].redirectAndRequireToLogin(err.status, _this12.toastrService, _this12.router);
          });
        }
      }, {
        key: "isAdmin",
        value: function isAdmin() {
          return this.authenticationService.getSecurityObject().authorities.includes('ADMIN');
        }
      }, {
        key: "setEmptyValuesForFormGroup",
        value: function setEmptyValuesForFormGroup(formGroup) {
          var _this13 = this;

          Object.values(formGroup.controls).forEach(function (control) {
            control.setValue('');
            control.setErrors(undefined);

            if (control.controls) {
              _this13.setEmptyValuesForFormGroup(control);
            }
          });
        }
      }]);

      return CreateUserComponent;
    }();

    CreateUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }];
    };

    CreateUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/create-user/create-user.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-user.component.css */
      "./src/app/components/user/create-user/create-user.component.css"))["default"]]
    })], CreateUserComponent);
    /***/
  },

  /***/
  "./src/app/components/user/list-users/list-users.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/components/user/list-users/list-users.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserListUsersListUsersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  padding: 10px;\n  margin: 10px;\n  width: 25%;\n  display: inline-block;\n}\n\nmat-card-content {\n  margin-top: 10px;\n}\n\n.mat-card-header .mat-card-title {\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyL2xpc3QtdXNlcnMvbGlzdC11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMjUlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/user/list-users/list-users.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/user/list-users/list-users.component.ts ***!
    \********************************************************************/

  /*! exports provided: ListUsersComponent */

  /***/
  function srcAppComponentsUserListUsersListUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function () {
      return ListUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../restaurant/list-restaurants/confirmation-dialog.component */
    "./src/app/components/restaurant/list-restaurants/confirmation-dialog.component.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services_restaurant_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/restaurant.service */
    "./src/app/services/restaurant.service.ts");

    var ListUsersComponent = /*#__PURE__*/function () {
      function ListUsersComponent(userService, toastrService, router, dialog, authenticationService, restaurantService) {
        _classCallCheck(this, ListUsersComponent);

        this.userService = userService;
        this.toastrService = toastrService;
        this.router = router;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.restaurantService = restaurantService;
        this.text = '';
      }

      _createClass(ListUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    this.fetchAllUsers();

                  case 1:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "fetchAllUsers",
        value: function fetchAllUsers() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.userService.getAllUsers();

                  case 2:
                    this.users = _context24.sent;
                    this.user = this.authenticationService.getSecurityObject();

                    if (!(this.user.authorities && this.user.authorities.includes('OWNER'))) {
                      _context24.next = 10;
                      break;
                    }

                    _context24.next = 7;
                    return this.restaurantService.getAll(this.user.username, '', 0, 100000);

                  case 7:
                    this.restaurants = _context24.sent.body.content;
                    _context24.next = 13;
                    break;

                  case 10:
                    _context24.next = 12;
                    return this.restaurantService.getAll(undefined, '', 0, 100000);

                  case 12:
                    this.restaurants = _context24.sent.body.content;

                  case 13:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(user) {
          var _this14 = this;

          var dialogRef = this.dialog.open(_restaurant_list_restaurants_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            data: {
              message: "\u0421\u0438\u0433\u0443\u0440\u0435\u043D \u043B\u0438 \u0441\u0438 \u0447\u0435 \u0438\u0441\u043A\u0430\u0448 \u0434\u0430 \u0438\u0437\u0442\u0440\u0438\u0435\u0448 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B '".concat(user.username, " ?'"),
              buttonText: {
                ok: 'Да',
                cancel: 'Не'
              }
            }
          });
          dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              var a = document.createElement('a');
              a.click();
              a.remove();

              _this14.userService.deleteUser(user.id).then(function (res) {
                if (res.status === 200) {
                  _this14.fetchAllUsers();

                  _this14.toastrService.success('Успешно изтрихте потребителя');
                }
              })["catch"](function (err) {
                _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].redirectAndRequireToLogin(err.status, _this14.toastrService, _this14.router);
              });
            }
          });
        }
      }, {
        key: "getRepresentationTextForRoles",
        value: function getRepresentationTextForRoles(roles) {
          return _global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].getRepresentationTextForRoles(roles);
        }
      }]);

      return ListUsersComponent;
    }();

    ListUsersComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }, {
        type: _services_restaurant_service__WEBPACK_IMPORTED_MODULE_9__["RestaurantService"]
      }];
    };

    ListUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/list-users/list-users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-users.component.css */
      "./src/app/components/user/list-users/list-users.component.css"))["default"]]
    })], ListUsersComponent);
    /***/
  },

  /***/
  "./src/app/global/app.settings.ts":
  /*!****************************************!*\
    !*** ./src/app/global/app.settings.ts ***!
    \****************************************/

  /*! exports provided: AppSettings */

  /***/
  function srcAppGlobalAppSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppSettings", function () {
      return AppSettings;
    });

    var AppSettings = /*#__PURE__*/function () {
      function AppSettings() {
        _classCallCheck(this, AppSettings);
      }

      _createClass(AppSettings, null, [{
        key: "redirectAndRequireToLogin",
        value: function redirectAndRequireToLogin(errStatus, toastrService, router) {
          if (errStatus === 403) {
            toastrService.warning('Please login..', 'Expired token');
            router.navigateByUrl('/login');
          }
        }
      }, {
        key: "getRepresentationTextForRoles",
        value: function getRepresentationTextForRoles(roles) {
          var representationRoles = [];
          roles.forEach(function (role) {
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
      }]);

      return AppSettings;
    }();

    AppSettings.API_ENDPOINT = 'http://localhost:8080'; // 'https://tequila-s-laimche-brat.herokuapp.com  / 8080

    /***/
  },

  /***/
  "./src/app/modules/material/material-module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/material/material-module.ts ***!
    \*****************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppModulesMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/fesm2015/table.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/fesm2015/tooltip.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      exports: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/pipes/product-list-filter.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/product-list-filter.pipe.ts ***!
    \***************************************************/

  /*! exports provided: ProductListFilterPipe */

  /***/
  function srcAppPipesProductListFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListFilterPipe", function () {
      return ProductListFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductListFilterPipe = /*#__PURE__*/function () {
      function ProductListFilterPipe() {
        _classCallCheck(this, ProductListFilterPipe);
      }

      _createClass(ProductListFilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) {
            return [];
          }

          if (!searchText) {
            return items;
          }

          searchText = searchText.toLocaleLowerCase();
          return items.filter(function (it) {
            return it.title.toLocaleLowerCase().includes(searchText) || it.category.title.toLocaleLowerCase().includes(searchText);
          });
        }
      }]);

      return ProductListFilterPipe;
    }();

    ProductListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterProducts'
    })], ProductListFilterPipe);
    /***/
  },

  /***/
  "./src/app/pipes/user-list-filter.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/user-list-filter.pipe.ts ***!
    \************************************************/

  /*! exports provided: UserListFilterPipe */

  /***/
  function srcAppPipesUserListFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListFilterPipe", function () {
      return UserListFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UserListFilterPipe = /*#__PURE__*/function () {
      function UserListFilterPipe() {
        _classCallCheck(this, UserListFilterPipe);
      }

      _createClass(UserListFilterPipe, [{
        key: "transform",
        value: function transform(items, searchText) {
          if (!items) {
            return [];
          }

          if (!searchText) {
            return items;
          }

          searchText = searchText.toLocaleLowerCase();
          return items.filter(function (it) {
            return it.username.toLocaleLowerCase().includes(searchText);
          });
        }
      }]);

      return UserListFilterPipe;
    }();

    UserListFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filterUsers'
    })], UserListFilterPipe);
    /***/
  },

  /***/
  "./src/app/routing.module.ts":
  /*!***********************************!*\
    !*** ./src/app/routing.module.ts ***!
    \***********************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/product/edit-product/edit-product.component */
    "./src/app/components/product/edit-product/edit-product.component.ts");
    /* harmony import */


    var _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/restaurant/edit-restaurant/edit-restaurant.component */
    "./src/app/components/restaurant/edit-restaurant/edit-restaurant.component.ts");
    /* harmony import */


    var _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/product/create-product/create-product.component */
    "./src/app/components/product/create-product/create-product.component.ts");
    /* harmony import */


    var _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/product/product-list/product-list.component */
    "./src/app/components/product/product-list/product-list.component.ts");
    /* harmony import */


    var _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/restaurant/create-restaurant/create-restaurant.component */
    "./src/app/components/restaurant/create-restaurant/create-restaurant.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/restaurant/list-restaurants/list-restaurants.component */
    "./src/app/components/restaurant/list-restaurants/list-restaurants.component.ts");
    /* harmony import */


    var _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/common/login/login.component */
    "./src/app/components/common/login/login.component.ts");
    /* harmony import */


    var _security_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./security/auth.guard */
    "./src/app/security/auth.guard.ts");
    /* harmony import */


    var _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/product/import-products/import-products.component */
    "./src/app/components/product/import-products/import-products.component.ts");
    /* harmony import */


    var _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/user/list-users/list-users.component */
    "./src/app/components/user/list-users/list-users.component.ts");
    /* harmony import */


    var _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/user/create-user/create-user.component */
    "./src/app/components/user/create-user/create-user.component.ts");
    /* harmony import */


    var _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/account/my-profile/my-profile.component */
    "./src/app/components/account/my-profile/my-profile.component.ts");

    var routes = [{
      path: 'login',
      component: _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'restaurants/create',
      component: _components_restaurant_create_restaurant_create_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["CreateRestaurantComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN'
      }
    }, {
      path: 'restaurants',
      component: _components_restaurant_list_restaurants_list_restaurants_component__WEBPACK_IMPORTED_MODULE_8__["ListRestaurantsComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'restaurants/:id/edit',
      component: _components_restaurant_edit_restaurant_edit_restaurant_component__WEBPACK_IMPORTED_MODULE_2__["EditRestaurantComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'restaurants/:id/products',
      component: _components_product_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'restaurants/:id/products/:productId/edit',
      component: _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'product',
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN,OWNER'
      },
      children: [{
        path: ':id/edit',
        component: _components_product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_1__["EditProductComponent"]
      }]
    }, {
      path: 'products/create',
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      component: _components_product_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_3__["CreateProductComponent"],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'users/all',
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      component: _components_user_list_users_list_users_component__WEBPACK_IMPORTED_MODULE_12__["ListUsersComponent"],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'users/create',
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      component: _components_user_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_13__["CreateUserComponent"],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'my-profile',
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      component: _components_account_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_14__["MyProfileComponent"],
      data: {
        authorities: 'ADMIN,OWNER'
      }
    }, {
      path: 'import',
      component: _components_product_import_products_import_products_component__WEBPACK_IMPORTED_MODULE_11__["ImportProductsComponent"],
      canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
      data: {
        authorities: 'ADMIN'
      }
    }, {
      path: '**',
      component: _components_common_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }];

    var RoutingModule = function RoutingModule() {
      _classCallCheck(this, RoutingModule);
    };

    RoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], RoutingModule);
    /***/
  },

  /***/
  "./src/app/security/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/security/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSecurityAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authenticationService, router, toastrService) {
        _classCallCheck(this, AuthGuard);

        this.authenticationService = authenticationService;
        this.router = router;
        this.toastrService = toastrService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var role = next.data.authorities;
          var user = this.authenticationService.getSecurityObject();

          if (user && user.authenticated && role.includes(user.authorities)) {
            return true;
          } else {
            this.toastrService.warning('You are not authorized to access that resource!');
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/security/token.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/security/token.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppSecurityTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TokenInterceptor = /*#__PURE__*/function () {
      function TokenInterceptor() {
        _classCallCheck(this, TokenInterceptor);
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var user = JSON.parse(window.localStorage.getItem('user'));

          if (user && user.jwt) {
            req = req.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(user.jwt)
              }
            });
          }

          return next.handle(req);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptor);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/app.settings */
    "./src/app/global/app.settings.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(httpClient, toastrService, router) {
        _classCallCheck(this, AuthenticationService);

        this.httpClient = httpClient;
        this.toastrService = toastrService;
        this.router = router;
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(user) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/authenticate"), user, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "getSecurityObject",
        value: function getSecurityObject() {
          return JSON.parse(window.localStorage.getItem('user'));
        }
      }, {
        key: "setSecurityObject",
        value: function setSecurityObject(obj) {
          window.localStorage.setItem('user', JSON.stringify(obj));
        }
      }, {
        key: "logout",
        value: function logout() {
          window.localStorage.removeItem('user');
          this.toastrService.success('Success logout!');
          this.router.navigateByUrl('/login');
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/category.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/category.service.ts ***!
    \**********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/app.settings */
    "./src/app/global/app.settings.ts");

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(httpClient) {
        _classCallCheck(this, CategoryService);

        this.httpClient = httpClient;
      }

      _createClass(CategoryService, [{
        key: "getAllCategoriesByRestaurantId",
        value: function getAllCategoriesByRestaurantId(restaurantId) {
          // tslint:disable-next-line:max-line-length
          return this.httpClient.get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/category?restaurantId=").concat(restaurantId)).toPromise();
        }
      }, {
        key: "addCategory",
        value: function addCategory(restaurantId, category) {
          // tslint:disable-next-line:max-line-length
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/category/create?restaurantId=").concat(restaurantId), category).toPromise();
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/app.settings */
    "./src/app/global/app.settings.ts");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpClient) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
      }

      _createClass(ProductService, [{
        key: "addImageToProduct",
        value: function addImageToProduct(productId, formData) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/").concat(productId, "/upload-image"), formData, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "editProduct",
        value: function editProduct(productId, product) {
          return this.httpClient.put("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/").concat(productId), product, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "getById",
        value: function getById(productId) {
          return this.httpClient.get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/").concat(productId), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          return this.httpClient["delete"]("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/").concat(productId), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "getAllByRestaurantId",
        value: function getAllByRestaurantId(id) {
          // tslint:disable-next-line:max-line-length
          return this.httpClient.get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/all?page=0&size=100000&restaurantId=").concat(id), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "importProducts",
        value: function importProducts(restaurantId, formData) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/product/").concat(restaurantId, "/import-products"), formData, {
            observe: "response"
          }).toPromise();
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/services/restaurant.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/restaurant.service.ts ***!
    \************************************************/

  /*! exports provided: RestaurantService, ListResponse */

  /***/
  function srcAppServicesRestaurantServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestaurantService", function () {
      return RestaurantService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListResponse", function () {
      return ListResponse;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/app.settings */
    "./src/app/global/app.settings.ts");

    var RestaurantService = /*#__PURE__*/function () {
      function RestaurantService(httpClient) {
        _classCallCheck(this, RestaurantService);

        this.httpClient = httpClient;
      }

      _createClass(RestaurantService, [{
        key: "getAll",
        value: function getAll(ownerUsername, search, page, size) {
          return this.httpClient // tslint:disable-next-line:max-line-length
          .get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/all?page=").concat(page, "&size=").concat(size, "&searchTerm=").concat(search).concat(ownerUsername ? '&ownerUsername=' + ownerUsername : ''), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "getAllNames",
        value: function getAllNames(ownerUsername) {
          return this.httpClient // tslint:disable-next-line:max-line-length
          .get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/names").concat(ownerUsername ? '?ownerUsername=' + ownerUsername : '')).toPromise();
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.httpClient.get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/").concat(id), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "addProduct",
        value: function addProduct(id, product) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/").concat(id, "/add-product"), product, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "patchUpdateRestaurant",
        value: function patchUpdateRestaurant(restaurantId, restaurant) {
          return this.httpClient.patch("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/").concat(restaurantId), restaurant, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "addRestaurant",
        value: function addRestaurant(restaurant) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/create"), restaurant, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "addImageToRestaurant",
        value: function addImageToRestaurant(formData, restaurantId) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/").concat(restaurantId, "/upload-image"), formData, {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "deleteRestaurant",
        value: function deleteRestaurant(id) {
          return this.httpClient["delete"]("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/restaurant/").concat(id), {
            observe: 'response'
          }).toPromise();
        }
      }]);

      return RestaurantService;
    }();

    RestaurantService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RestaurantService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RestaurantService);

    var ListResponse = function ListResponse() {
      _classCallCheck(this, ListResponse);
    };
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _global_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global/app.settings */
    "./src/app/global/app.settings.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(httpClient) {
        _classCallCheck(this, UserService);

        this.httpClient = httpClient;
      }

      _createClass(UserService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.httpClient.get("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/all-users")).toPromise();
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          return this.httpClient["delete"]("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/delete-user/").concat(userId), {
            observe: 'response'
          }).toPromise();
        }
      }, {
        key: "addUser",
        value: function addUser(user, roles) {
          return this.httpClient.post("".concat(_global_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT, "/api/add-user").concat(roles && '?roles=' + roles.join()), user, {
            observe: 'response'
          }).toPromise();
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/peterbeleganski/Desktop/rms/src/main/resources/frontend.rms.admin/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map