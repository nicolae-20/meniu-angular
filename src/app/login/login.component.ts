import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  minLengthPass: number = 15

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(this.minLengthPass)])
  hide = true;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Trebuie sa introduci un email';
    }

    return this.email.hasError('email') ? 'Email invalid' : '';
  }

  getPasswordMessage() {
    if (this.password.hasError('minLength')) {
      return 'Parola trebuie sa contina minimum 15 caractere'
    }
    return this.password.hasError('password') ? 'Email invalid' : '';
  }
}

