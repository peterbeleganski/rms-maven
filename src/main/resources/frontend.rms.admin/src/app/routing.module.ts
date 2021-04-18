import {EditProductComponent} from './components/product/edit-product/edit-product.component';
import {EditRestaurantComponent} from './components/restaurant/edit-restaurant/edit-restaurant.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {CreateRestaurantComponent} from './components/restaurant/create-restaurant/create-restaurant.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListRestaurantsComponent} from './components/restaurant/list-restaurants/list-restaurants.component';
import {LoginComponent} from './components/common/login/login.component';
import {AuthGuard} from './security/auth.guard';
import { ImportProductsComponent } from './components/product/import-products/import-products.component';
import {ListUsersComponent} from './components/user/list-users/list-users.component';
import {CreateUserComponent} from './components/user/create-user/create-user.component';
import {MyProfileComponent} from './components/account/my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'restaurants/create',
    component: CreateRestaurantComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN'}
  },
  {
    path: 'restaurants',
    component: ListRestaurantsComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'restaurants/:id/edit',
    component: EditRestaurantComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'restaurants/:id/products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'restaurants/:id/products/:productId/edit',
    component: EditProductComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN,OWNER'},
    children: [
      { path: ':id/edit', component: EditProductComponent},
    ]
  },
  {
    path: 'products/create',
    canActivate: [AuthGuard],
    component: CreateProductComponent,
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'users/all',
    canActivate: [AuthGuard],
    component: ListUsersComponent,
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'users/create',
    canActivate: [AuthGuard],
    component: CreateUserComponent,
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'my-profile',
    canActivate: [AuthGuard],
    component: MyProfileComponent,
    data: {authorities: 'ADMIN,OWNER'}
  },
  {
    path: 'import',
    component: ImportProductsComponent,
    canActivate: [AuthGuard],
    data: {authorities: 'ADMIN'}
  },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
