import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ContentDTO } from '../../shared/models/dto/content-dto';
import { Usuario } from '../../shared/models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  buscarUsuarios(): Observable<ContentDTO<Usuario[]>> {
    return this.http.get<ContentDTO<Usuario[]>>(this.url + '/usuarios');
  }
}
