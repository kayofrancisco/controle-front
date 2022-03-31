import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/app/shared/models/conta';
import { ContentDTO } from 'src/app/shared/models/dto/content-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  buscarContas(): Observable<ContentDTO<Conta[]>> {
    return this.http.get<ContentDTO<Conta[]>>(this.url + '/contas');
  }
}
