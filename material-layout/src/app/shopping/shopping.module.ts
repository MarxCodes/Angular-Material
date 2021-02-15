import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { ShoppingDetailComponent } from './components/shopping-detail/shopping-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes = [
  {path: '', component: ShopComponent},
  { path: '/:id', component: ShoppingDetailComponent},
  { path: 'cart', component: CartComponent}
]
@NgModule({
  declarations: [ToolbarComponent, ShopComponent, ShoppingListComponent, ShoppingItemComponent, ShoppingDetailComponent,CartComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class ShoppingModule { }
