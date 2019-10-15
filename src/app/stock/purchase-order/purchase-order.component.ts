import {
  Component,
  OnInit
} from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  columnDefs = [{
      headerName: 'Item',
      field: 'item',
      sortable: true,
      filter: true,
      checkboxSelection: true
    },
    {
      headerName: 'Description',
      field: 'description',
      sortable: true,
      filter: true
    }, ,
    {
      headerName: 'Formulation',
      field: 'formulation',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Batch No',
      field: 'batch',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Quantity',
      field: 'qty',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Expiry',
      field: 'expiry',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true
    }
  ];

  rowData = [{
      item: 'R0000',
      description: 'Celica',
      formulation: 'CAP',
      batch: 'DL001',
      qty: '45',
      expiry: '3/10/2019',
      price: 34400
    },
    {
      item: 'R0001',
      description: 'Celica',
      formulation: 'CAP',
      batch: 'DL002',
      qty: '74',
      expiry: '7/10/2019',
      price: 36770
    },
    {
      item: 'R0002',
      description: 'Celica',
      formulation: 'CAP',
      batch: 'DL003',
      qty: '133',
      expiry: '10/4/2019',
      price: 22000
    },
    {
      item: 'R0002',
      description: 'Celica',
      formulation: 'CAP',
      batch: 'DL003',
      qty: '133',
      expiry: '10/4/2019',
      price: 22000
    },
    {
      item: 'R0002',
      description: 'Celica',
      formulation: 'CAP',
      batch: 'DL003',
      qty: '133',
      expiry: '10/4/2019',
      price: 22000
    }
  ];

  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
				
			$('.submit-for-approval, .submit-later').click(function (e) {
				e.preventDefault();
				$('.grid-area').show();
				$('.new-purchase-order').hide();
      }); 
      $('.edit-btn').click(function (e) {
				e.preventDefault();
				$('.new-purchase-order').show();
				$('.grid-area').hide();
			}); 
			
		});
  }

}
