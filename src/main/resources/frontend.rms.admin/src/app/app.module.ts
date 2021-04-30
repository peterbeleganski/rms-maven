import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RoutingModule} from './routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/common/navigation/navigation.component';
import {ListRestaurantsComponent} from './components/restaurant/list-restaurants/list-restaurants.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CreateRestaurantComponent} from './components/restaurant/create-restaurant/create-restaurant.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {EditRestaurantComponent} from './components/restaurant/edit-restaurant/edit-restaurant.component';
import {HomeComponent} from './components/common/home/home.component';
import {LoginComponent} from './components/common/login/login.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TokenInterceptor} from './security/token.interceptor';
import {ProductListFilterPipe} from './pipes/product-list-filter.pipe';
import {ListUsersComponent} from './components/user/list-users/list-users.component';
import {MaterialModule} from './modules/material/material-module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ConfirmationDialogComponent} from './components/restaurant/list-restaurants/confirmation-dialog.component';
import {UserListFilterPipe} from './pipes/user-list-filter.pipe';
import { ImportProductsComponent } from './components/product/import-products/import-products.component';
import {CreateUserComponent} from './components/user/create-user/create-user.component';
import { MyProfileComponent } from './components/account/my-profile/my-profile.component';
import {CreateNewCategoryDialogComponent} from './components/product/create-product/create-new-category.dialog';
import {EditProductComponent} from "./components/product/edit-product/edit-product.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListRestaurantsComponent,
    CreateRestaurantComponent,
    ProductListComponent,
    CreateProductComponent,
    EditRestaurantComponent,
    HomeComponent,
    EditProductComponent,
    LoginComponent,
    ProductListFilterPipe,
    UserListFilterPipe,
    ListUsersComponent,
    ConfirmationDialogComponent,
    CreateNewCategoryDialogComponent,
    CreateUserComponent,
    MyProfileComponent,
    ImportProductsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  entryComponents: [CreateNewCategoryDialogComponent, ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
