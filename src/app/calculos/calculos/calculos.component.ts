import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculos',
  templateUrl: './calculos.component.html',
  styleUrls: ['./calculos.component.scss'],
})
export class CalculosComponent implements OnInit {
  numeroOuts: number;
  valorBlind: number;
  valorPoteSpr: number;
  menorStack: number;

  resultadoSpr: string;
  resultadoSprEquidade: string;

  valorPotePotOdds: number;
  valorApostaPotOdds: number;
  maisDeUmVilao = false;
  numeroViloesAMais: number;
  resultadoPotOdds: string;

  optionsDropdownBlinds = [
    { label: 'R$ 0,20', value: 0.2 },
    { label: 'R$ 0,40', value: 0.4 },
    { label: 'R$ 0,60', value: 0.6 },
    { label: 'R$ 0,80', value: 0.8 },
    { label: 'R$ 1,00', value: 1 },
    { label: 'R$ 2,00', value: 2 },
    { label: 'R$ 4,00', value: 4 },
    { label: 'R$ 6,00', value: 6 },
    { label: 'R$ 10,00', value: 10 },
    { label: 'R$ 20,00', value: 20 },
  ];
  sprEquidade: any[] = [
    { spr: 0.5, equidade: '25.0%' },
    { spr: 0.75, equidade: '30.0%' },
    { spr: 1, equidade: '33.3%' },
    { spr: 1.5, equidade: '37.5%' },
    { spr: 2, equidade: '42.0%' },
    { spr: 3, equidade: '42.9%' },
    { spr: 4, equidade: '44.4%' },
    { spr: 5, equidade: '45.5%' },
    { spr: 6, equidade: '46.2%' },
    { spr: 7, equidade: '46.7%' },
    { spr: 8, equidade: '47.1%' },
    { spr: 9, equidade: '47.4%' },
    { spr: 10, equidade: '47.6%' },
    { spr: 11, equidade: '47.8%' },
    { spr: 12, equidade: '48.0%' },
    { spr: 13, equidade: '48.1%' },
  ];

  constructor() {}

  ngOnInit(): void {}

  calcularSpr() {
    const spr = this.menorStack / this.valorPoteSpr;

    this.resultadoSpr = `SPR = ${spr.toFixed(2)}`;
    this.resultadoSprEquidade = `Necessário = ${this.retornaValorEquidadeParaSpr(
      spr
    )} de equidade`;
  }

  retornaValorEquidadeParaSpr(spr: number): string {
    if (spr <= 0.4) {
      return ' menos que 25%';
    } else if (spr > 0.4 && spr <= 0.5) {
      return '25%';
    } else if (spr > 0.5 && spr <= 0.75) {
      return '30%';
    } else if (spr > 0.75 && spr <= 1) {
      return '33.3%';
    } else if (spr > 1 && spr <= 1.5) {
      return '37.5%';
    } else if (spr > 1.5 && spr <= 2) {
      return '40.0%';
    }

    const sprInteiro = parseInt(spr.toString());

    const equidade = this.sprEquidade.find((item) => item.spr === sprInteiro);

    return equidade ? equidade.equidade : ' mais que 48.1%';
  }

  setaValorApostaPotOdds(valor: number) {
    this.valorApostaPotOdds = valor;
    this.calcularPotOdds();
  }

  calcularPotOdds() {
    if (this.valorApostaPotOdds && this.valorPotePotOdds) {
      let potOdds =
        this.valorApostaPotOdds /
        (this.valorPotePotOdds + this.valorApostaPotOdds * 2);

      this.resultadoPotOdds = `Pot odds = ${(potOdds * 100).toPrecision(2)}%`;
      'Pot odds = ' + (potOdds * 100).toPrecision(2) + '%';
    }
  }
}
