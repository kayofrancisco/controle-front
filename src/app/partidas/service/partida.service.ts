import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ContentDTO } from '../../shared/models/dto/content-dto';
import { Observable } from 'rxjs';
import { Partida } from 'src/app/shared/models/partida';

@Injectable({
  providedIn: 'root',
})
export class PartidaService {
  private url = environment.url + '/partidas';

  constructor(private http: HttpClient) {}

  salvar(partida: Partida): Observable<ContentDTO<Partida>> {
    return this.http.post<ContentDTO<Partida>>(this.url, partida);
  }

  buscar(): Observable<ContentDTO<Partida[]>> {
    return this.http.get<ContentDTO<Partida[]>>(this.url);
  }

  excluir(id: number): Observable<ContentDTO<any>> {
    return this.http.delete<ContentDTO<any>>(this.url + '/' + id);
  }
}
