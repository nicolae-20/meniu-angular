import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showPassword: boolean = false;

  isLogged: boolean = true;

  minLengthPass: number = 7;
  minLengthUser: number = 3;

  username = new FormControl('', [Validators.required, Validators.minLength(this.minLengthUser)])
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPass)])
  hide = true;

  constructor(public authService: AuthService) {}

  

  onSwitchMode() {
      this.isLogged = !this.isLogged;
  }

  onSubmit(form: NgForm) {
      console.log(form.value);
      form.reset();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must type an email';
    }

    return this.email.hasError('email') ? 'Email invalid' : '';
  }

  getPasswordMessage() {
    if (this.password.validator?.length)
    {
      return `Password must be at least ${this.minLengthPass} characters`;
    }

      return;
  }

  getUsernameMessage() {
    if (this.username.validator?.length) {
      return `Username must be at least ${this.minLengthUser} characters`
    }

    return;
  }
  
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
