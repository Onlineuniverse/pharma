import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { RequestNewQuotationComponent } from './stock/request-new-quotation/request-new-quotation.component';
import { PendingRequestQuotationComponent } from './stock/pending-request-quotation/pending-request-quotation.component';
import { OutstandingQuotationsComponent } from './stock/outstanding-quotations/outstanding-quotations.component';
import { DistributorQuotationsComponent } from './stock/distributor-quotations/distributor-quotations.component';
import { PurchaseOrderComponent } from './stock/purchase-order/purchase-order.component';
import { PurchaseInvoiceComponent } from './stock/purchase-invoice/purchase-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StockComponent,
    RequestNewQuotationComponent,
    PendingRequestQuotationComponent,
    OutstandingQuotationsComponent,
    DistributorQuotationsComponent,
    PurchaseOrderComponent,
    PurchaseInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
