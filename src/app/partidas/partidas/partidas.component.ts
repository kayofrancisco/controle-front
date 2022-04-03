import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LimiteService } from '../../limites/service/limite.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss'],
})
export class PartidasComponent implements OnInit {
  form: FormGroup;

  constructor(private limiteService: LimiteService) {}

  ngOnInit(): void {
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

    this.limiteService.buscar().subscribe((resposta) => {
      console.log(resposta);
    });
  }
}
