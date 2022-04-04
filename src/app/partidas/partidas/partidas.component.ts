import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LimiteService } from '../../limites/service/limite.service';
import { Limite } from '../../shared/models/Limite';
import { Conta } from 'src/app/shared/models/conta';
import { ContaService } from 'src/app/contas/services/conta.service';
import { PartidaService } from '../service/partida.service';
import { format } from 'date-fns';
import { ToastService } from '../../shared/services/toast.service';
import { Partida } from '../../shared/models/partida';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss'],
})
export class PartidasComponent implements OnInit {
  form: FormGroup;
  limites: Limite[];
  contas: Conta[];
  dataHoje = new Date();
  travarTela = false;
  requisicoesEmAndamento = 0;
  partidas: Partida[];
  partidasFiltradas: Partida[];

  contasFiltro: any[];
  ganhoPerdaFiltro: string[] = ['Todos', 'Ganhos', 'Perdas'];
  limiteFiltro: any[];

  constructor(
    private limiteService: LimiteService,
    private contaService: ContaService,
    private service: PartidaService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.montaForm();
    this.buscaInformacoes();
  }

  montaForm() {
    this.form = new FormGroup({
      conta: new FormControl(null, [Validators.required]),
      limite: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required]),
      quantidadeMaos: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      quantidadeMesas: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      dataJs: new FormControl(new Date(), [Validators.required]),
    });
  }

  buscaInformacoes() {
    this.requisicoesEmAndamento = 3;

    this.service.buscar().subscribe(
      (resposta) => {
        if (resposta.code === 200) {
          this.partidas = resposta.result.sort((a, b) =>
            b.data.localeCompare(a.data)
          );
          this.partidasFiltradas = this.partidas;
        }
      },
      () => {},
      () => this.requisicoesEmAndamento--
    );

    this.limiteService.buscar().subscribe(
      (resposta) => {
        if (resposta.code == 200) {
          this.limites = resposta.result;
          this.form.controls['limite'].setValue(
            this.limites.find((item) => item.bigBlind === 0.6)
          );
          this.limiteFiltro = [
            { blind: 'Todos' },
            ...this.limites.map((item) => {
              return { blind: `${item.smallBlind}/${item.bigBlind}` };
            }),
          ];
        }
      },
      () => {},
      () => this.requisicoesEmAndamento--
    );

    this.contaService.buscarContas().subscribe(
      (resposta) => {
        if (resposta.code === 200) {
          this.contas = resposta.result;
          this.contasFiltro = [
            {
              nick: 'Todos',
            },
            ...this.contas,
          ];
        }
      },
      () => {},
      () => this.requisicoesEmAndamento--
    );
  }

  salvar() {
    this.travarTela = true;

    let partida = this.form.value;
    partida.data = format(partida.dataJs, 'dd/MM/yyyy HH:mm:ss');

    this.service.salvar(partida).subscribe(
      (resposta) => {
        if (resposta.code === 200) {
          this.partidas = [resposta.result, ...this.partidas];
          this.partidasFiltradas = this.partidas;
        } else {
          resposta.messages.forEach((msg) =>
            this.toastService.exibirToast('Erro ao salvar partida', msg, 'warn')
          );
        }
      },
      () => {},
      () => (this.travarTela = false)
    );
  }

  selecionouContaFiltro(evento: any) {
    const nick = evento?.value.nick;

    if (nick && nick !== 'Todos') {
      this.partidasFiltradas = this.partidas.filter(
        (item) => item.conta.nick === nick
      );
    } else {
      this.partidasFiltradas = this.partidas;
    }
  }

  selecionouGanhaPerdaFiltro(evento: any) {
    const infoValor = evento.value;

    if (infoValor === 'Todos') {
      this.partidasFiltradas = this.partidas;
    } else if (infoValor === 'Ganhos') {
      this.partidasFiltradas = this.partidas.filter((item) => item.valor >= 0);
    } else {
      this.partidasFiltradas = this.partidas.filter((item) => item.valor < 0);
    }
  }

  selecionouLimiteFiltro(evento: any) {
    const limite = evento.value.blind;

    if (limite === 'Todos') {
      this.partidasFiltradas = this.partidas;
    } else {
      this.partidasFiltradas = this.partidas.filter(
        (item) => `${item.limite.smallBlind}/${item.limite.bigBlind}` === limite
      );
    }
  }

  excluir(partida: Partida) {
    this.travarTela = true;
    this.service.excluir(partida.id).subscribe(
      (resposta) => {
        if (resposta.code === 200) {
          // melhorar depois
          this.buscaInformacoes();
        }
      },
      () => {},
      () => (this.travarTela = false)
    );
  }
}
