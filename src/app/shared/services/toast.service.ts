import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  exibirToast(
    titulo: string,
    mensagem: string,
    severidade: 'success' | 'warn' | 'error'
  ) {
    this.messageService.add({
      summary: titulo,
      detail: mensagem,
      severity: severidade,
      life: 7000,
    });
  }
}
