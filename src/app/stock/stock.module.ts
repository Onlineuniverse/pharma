import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestNewQuotationComponent } from './request-new-quotation/request-new-quotation.component';
import { AgGridModule } from 'ag-grid-angular';
import { PendingRequestQuotationComponent } from './pending-request-quotation/pending-request-quotation.component';
import { OutstandingQuotationsComponent } from './outstanding-quotations/outstanding-quotations.component';
import { DistributorQuotationsComponent } from './distributor-quotations/distributor-quotations.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseInvoiceComponent } from './purchase-invoice/purchase-invoice.component';

@NgModule({
  declarations: [RequestNewQuotationComponent, PendingRequestQuotationComponent, OutstandingQuotationsComponent, DistributorQuotationsComponent, PurchaseOrderComponent, PurchaseInvoiceComponent],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ]
})
export class StockModule { }
