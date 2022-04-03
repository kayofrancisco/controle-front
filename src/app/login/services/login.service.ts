import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentDTO } from '../../shared/models/dto/content-dto';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = environment.url;
  private urlTokenURL = this.url + environment.obterTokenUrl;
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<ContentDTO<any>> {
    let params = new URLSearchParams();
    params.append('username', email);
    params.append('password', senha);
    params.append('grant_type', 'password');

    return this.http.post<any>(this.urlTokenURL, params.toString(), {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        Authorization: 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      },
    });
  }

  obterToken() {
    const tokenString = localStorage.getItem('access_token');

    return tokenString ? JSON.parse(tokenString).access_token : null;
  }

  estaAutenticado(): boolean {
    const token = this.obterToken();

    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }
}
