import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login-jp.component.html',
  styleUrls: ['./login-jp.component.css']
})
export class LoginJpComponent {
  showLogin: boolean = true;

  toggleForm(): void {
    this.showLogin = !this.showLogin;
  }
}