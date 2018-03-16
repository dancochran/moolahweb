import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { CustomerMainComponent } from './customer-main/customer-main.component';
import { AccountMainComponent } from './account-main/account-main.component';
import { TransactionMainComponent } from './transaction-main/transaction-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountOpenCheckingComponent } from './account-open-checking/account-open-checking.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const appRoutes: Routes = [
  { path: 'transaction', component: TransactionMainComponent },
  { path: 'account', component: AccountMainComponent },
  { path: 'account/open/checking', component: AccountOpenCheckingComponent },
  { path: 'customer', component: CustomerMainComponent },
  { path: 'customer/:id',      component: CustomerDetailComponent },
  {
    path: 'moolah',
    component: AppComponent,
    data: { title: 'Moolah v1.0' }
  },
  { path: '',
    redirectTo: '/moolah',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    CustomerMainComponent,
    AccountMainComponent,
    TransactionMainComponent,
    PageNotFoundComponent,
    AccountOpenCheckingComponent,
    CustomerDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
