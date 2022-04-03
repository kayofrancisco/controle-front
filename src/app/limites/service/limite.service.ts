import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContentDTO } from '../../shared/models/dto/content-dto';
import { Observable } from 'rxjs';
import { Limite } from '../../shared/models/Limite';

@Injectable({
  providedIn: 'root',
})
export class LimiteService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  buscar(): Observable<ContentDTO<Limite[]>> {
    return this.http.get<ContentDTO<Limite[]>>(this.url + '/limites');
  }
}
