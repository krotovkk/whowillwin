import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const USER_NOT_FOUND_ERROR = 'auth/user-not-found';
const DEFAULT = 'DEFAULT';
const ERROR_MESSAGE = {
  [DEFAULT]: 'Неизвестная ошибка. Попробуйте позже',
  [USER_NOT_FOUND_ERROR]: 'Неверные имя пользователя и пароль',
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  onLogin() {
    const { email, password } = this.form.value;

    this.errorMessage = '';

    this.authService.login(email, password).subscribe(
      () => {
        this.form.reset();
        this.authService.isLoggedIn = true
      },
      error => {
        const code = error && error.code ? error.code : null;

        this.errorMessage = ERROR_MESSAGE[code] || ERROR_MESSAGE.DEFAULT;
      },
    );
  }

}
