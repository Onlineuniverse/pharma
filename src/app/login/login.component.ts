import {
  Component,
  OnInit,
  Renderer2
} from '@angular/core';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-screen');
  }

  ngOnInit() {
    $(document).ready(function () {
				
			$('.forgot-password-link').click(function (e) {
				e.preventDefault();
				$('.login-form').hide();
				$('.forgot-password-form').show();
				$(this).hide();
				$('.login-link').show();
      }); 
      $('.login-link').click(function (e) {
				e.preventDefault();
				$('.login-form').show();
				$('.forgot-password-form').hide();
				$(this).hide();
				$('.forgot-password-link').show();
			}); 
			
		});
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'login-screen');
  }

}
