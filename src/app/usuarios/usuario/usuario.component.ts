import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  constructor(private service: UsuarioService) {}

  ngOnInit(): void {
    this.service.buscarUsuarios().subscribe((resposta) => {
      console.log(resposta);
    });
  }
}
