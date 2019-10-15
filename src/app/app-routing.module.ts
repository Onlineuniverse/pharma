import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { RequestNewQuotationComponent } from './stock/request-new-quotation/request-new-quotation.component';
import { PendingRequestQuotationComponent } from './stock/pending-request-quotation/pending-request-quotation.component';
import { OutstandingQuotationsComponent } from './stock/outstanding-quotations/outstanding-quotations.component';
import { DistributorQuotationsComponent } from './stock/distributor-quotations/distributor-quotations.component';
import { PurchaseOrderComponent } from './stock/purchase-order/purchase-order.component';
import { PurchaseInvoiceComponent } from './stock/purchase-invoice/purchase-invoice.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'stock',
    component: StockComponent,
    data: { title: 'Stock' },
    children: [
      {
        path: 'requestnewquotations',
        component: RequestNewQuotationComponent,
        data: { title: 'Quotations' }
      },
      {
        path: 'pendingrequestquotations',
        component: PendingRequestQuotationComponent,
        data: { title: 'Quotations' }
      },
      {
        path: 'outstandingquotations',
        component: OutstandingQuotationsComponent,
        data: { title: 'Quotations' }
      },
      {
        path: 'distributorquotations',
        component: DistributorQuotationsComponent,
        data: { title: 'Quotations' }
      },
      {
        path: 'purchaseorder',
        component: PurchaseOrderComponent,
        data: { title: 'PurchaseOrder' }
      },
      {
        path:'purchaseorderinvoice',
        component:PurchaseInvoiceComponent,
        data:{title:'PurchaseOrderInvoice'}
      },
    ]
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    enableTracing: true
  }
);
