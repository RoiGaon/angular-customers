import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerPageComponent } from './components/customer-page/customer-page.component';
import { CustomersTableIcons } from './components/customers-table-icons.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddEditDisplayCustomerComponent } from './components/customer-page/add-edit-display-customer/add-edit-display-customer.component';
import { RouterModule } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import {AngularFireAuthGuardModule} from "@angular/fire/compat/auth-guard";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";



const firebaseConfig = {
  apiKey: "AIzaSyADCnX7v74ku2ZE5D8uhoPa9SyREyoxu5M",
  authDomain: "customer-angular-7c0f5.firebaseapp.com",
  databaseURL: "https://customer-angular-7c0f5-default-rtdb.firebaseio.com",
  projectId: "customer-angular-7c0f5",
  storageBucket: "customer-angular-7c0f5.appspot.com",
  messagingSenderId: "414661901191",
  appId: "1:414661901191:web:8d34e3cf9a6017b32b7122",
  measurementId: "G-E5HNDSWZF9"
};

@NgModule({
  imports: [
    AngularFireAuthGuardModule,
    BrowserModule,
    FormsModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,

    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomerPageComponent,
        canActivate: [AngularFireAuthGuard]
      },

      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [AngularFireAuthGuard]
      },

      {
        path: 'login',
        component: LoginPageComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ])
  ],
  declarations: [
    AppComponent,
    CustomersTableIcons,
    CustomerPageComponent,
    AddEditDisplayCustomerComponent,
    ContactsPageComponent,
    LoginPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
