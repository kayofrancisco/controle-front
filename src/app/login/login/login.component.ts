import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    const tokenString = localStorage.getItem('access_token');

    if (tokenString) {
      this.router.navigate(['/calculos']);
    }

    this.form = new FormGroup({
      email: new FormControl('kayofrancisco@hotmail.com', [
        Validators.required,
        Validators.email,
      ]),
      senha: new FormControl('123456', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  realizarLogin() {
    const { email, senha } = this.form.value;

    this.service.login(email, senha).subscribe(
      (resposta) => {
        const access_token = JSON.stringify(resposta);
        localStorage.setItem('access_token', access_token);
        this.router.navigate(['/calculos']);
      },
      (error: HttpErrorResponse) => {
        console.log('error', error.error);
      }
    );
  }
}
