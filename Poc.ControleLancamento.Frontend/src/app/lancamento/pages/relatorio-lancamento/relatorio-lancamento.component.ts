import { Component, OnInit } from '@angular/core';
import { faTrash, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';

import { LancamentoModel } from '../../models/lancamento.model';
import { LancamentoService } from '../../services/lancamento.service';
import { RemoverLancamentoResponse } from '../../services/contracts/lancamento/remover-lancamento.response';
import { ListarLancamentosResponse } from '../../services/contracts/lancamento/listar-lancamentos.response';
import { Router } from '@angular/router';
import { TipoLancamento, TipoLancamentoLabel } from '../../models/tipo-lancamento.enum';

@Component({
  selector: 'app-relatorio-lancamento',
  templateUrl: './relatorio-lancamento.component.html',
  styleUrls: ['./relatorio-lancamento.component.scss']
})
export class RelatorioLancamentoComponent implements OnInit {
  lancamentos: LancamentoModel[] = [];
  displayColumns: string[] = ['Valor Lançamento', 'Tipo Lançamento', 'Data Lançamento', 'Ações'];
  mensagemErro: string = 'Sem registros.';
  saldoDia: number = 0;

  tipoLancamentoLabel = TipoLancamentoLabel;
  moment = moment;
  
  iconRemove = faTrash;
  iconEdit = faPenToSquare;
  iconCreate = faPlus;

  constructor(private lancamentoService: LancamentoService, private router: Router) { }

  ngOnInit(): void {
    this.listarLancamentos();
    this.lancamentoService.listenGrid().subscribe(() => this.listarLancamentos());
  }

  removerLancamento(id: string) {
    this.lancamentoService.removerLancamento(id).subscribe(
      (response : RemoverLancamentoResponse) => {
        // TODO: implementar alert
        this.listarLancamentos();
      }
    );
  }

  alterarLancamento(id: string) {
    this.router.navigate(['cadastro', id])
  }

  listarLancamentos() {
    this.lancamentoService.listarLancamento().subscribe(
      (response : ListarLancamentosResponse) => {
        if (!response.error) {
          this.lancamentos = response.lancamentos;
          this.saldoDia = response.lancamentos.reduce((total, atual) => total + atual.valor, 0);
        }
      }
    );
  }
}
