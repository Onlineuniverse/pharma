import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
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
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'IHealth Pharm';
  faHome = faHome;
  faLayerGroup = faLayerGroup;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faWallet = faWallet;
  faUsers = faUsers;
  faClipboard = faClipboard;
  faCog = faCog;
  faBell = faBell;

  navigateToStock() {
    this.router.navigate(['/stock'])
  }

  ngOnInit(){
    $(document).ready(function () {
      $('#top-menu li').click(function () {
        $('#top-menu li').removeClass('active');
        $(this).addClass('active');
      });
    });
  }

}
