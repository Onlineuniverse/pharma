import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faLayerGroup,
  faFileInvoiceDollar,
  faWallet,
  faUsers,
  faCog,
  faBell,
  faClipboard
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  faHome = faHome;
  faLayerGroup = faLayerGroup;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faWallet = faWallet;
  faUsers = faUsers;
  faClipboard = faClipboard;
  faCog = faCog;
  faBell = faBell;

  constructor(private router: Router) {}

  ngOnInit() {
    $(document).ready(function(){
      $('.left-menu ul li').click(function () {
        $('.left-menu ul li').removeClass('active');
        $('.no-childern').removeClass('active');
        $(this).addClass('active');
      }); 
      $('.no-childern').click(function () {
        $('.no-childern').removeClass('active');
        $('.left-menu ul li').removeClass('active');
        $(this).addClass('active');
      }); 
    })
  }
  
  navigateToPurchase(){
		this.router.navigate(['/stock/purchaseorder']);
		
	}
	navigateToPurchaseOrderInvoice(){
		this.router.navigate(['stock/purchaseorderinvoice'])
	}

	navigateRoute(route: string) {
		
		this.router.navigate([`/stock/${route}`]);
		
	}

}
