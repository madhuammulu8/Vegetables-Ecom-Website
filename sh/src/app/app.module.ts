import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyordersComponent } from './myorders/myorders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyordersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
       // 3. Initialize
       AngularFireModule.initializeApp(environment.firebase),
       AngularFirestoreModule,
       AngularFireAuthModule, 
       AngularFireStorageModule, NgbModule ,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
