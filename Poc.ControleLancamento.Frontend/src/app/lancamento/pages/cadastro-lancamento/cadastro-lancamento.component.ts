import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LancamentoService } from '../../services/lancamento.service';
import { LancamentoModel } from '../../models/lancamento.model';
import { TipoLancamento } from '../../models/tipo-lancamento.enum';
import { BuscarLancamentoPorIdResponse } from '../../services/contracts/lancamento/buscar-lancamento-porId.response';
import { AdicionarLancamentoResponse } from '../../services/contracts/lancamento/adicionar-lancamento.response';
import { AlterarLancamentoResponse } from '../../services/contracts/lancamento/alterar-lancamento.response';
import { Guid } from 'guid-typescript';
import * as moment from 'moment';
import { valoresPositivos } from 'src/app/shared/validators/forms.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-cadastro-lancamento',
  templateUrl: './cadastro-lancamento.component.html',
  styleUrls: ['./cadastro-lancamento.component.scss']
})
export class CadastroLancamentoComponent implements OnInit  {
  id: string = '';
  formLancamento: FormGroup = this.formBuilder.group({});

  private _acaoTela: string = '';

  constructor(private formBuilder: FormBuilder, private lancamentoService: LancamentoService, private route: ActivatedRoute, private router: Router, private alertService: AlertService) { }

  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = p['id']);

    this.formLancamento = this.formBuilder.group({
      valor: ['', [Validators.required, valoresPositivos]],
      tipo: [0, Validators.required]
    });

    this._acaoTela = (this.id == '' || this.id == null ? 'SALVAR' : 'ALTERAR');
    this.criarForm();
  }

  criarForm() {
    let lancamento: LancamentoModel = { id: '', tipo: TipoLancamento.Debito, valor: 0, data: '' };

    if (this._acaoTela == 'ALTERAR') {
      this.lancamentoService.buscarLancamentosPorId(this.id)
        .subscribe((response: BuscarLancamentoPorIdResponse) => {
          this.preencherObjForm(response.lancamento);
        });
    } else {
      this.preencherObjForm(lancamento);
    }
  }

  preencherObjForm(lancamento: LancamentoModel) {
    if (this._acaoTela == 'ALTERAR') {
      this.formLancamento = this.formBuilder.group({
        valor: [lancamento.valor, [Validators.required, valoresPositivos]],
        tipo: [lancamento.tipo, Validators.required]
      });
    }
  }

  salvarForm() {
    if (this.formLancamento.invalid) {
      return;
    }

    const lancamento = this.criarLancamentoModel(this.formLancamento, (this.id == null ? Guid.create().toString() : this.id));

    if (this._acaoTela == 'SALVAR') this.salvar(lancamento);
    else this.alterar(lancamento);
  }

  salvar(lancamento: LancamentoModel) {
    this.lancamentoService.adicionarLancamento(lancamento)
      .subscribe((response: AdicionarLancamentoResponse) => {
        this.alertService.Success('Cadastro realizado com sucesso');
      });
  }

  alterar(lancamento: LancamentoModel) {
    this.lancamentoService.alterarLancamento(lancamento)
      .subscribe((response: AlterarLancamentoResponse) => {
        this.alertService.Success('Cadastro alterado com sucesso');
        this.router.navigate(['relatorio']);
      });
  }

  criarLancamentoModel(formLancamento: FormGroup, id: string): LancamentoModel {
    return {
      id,
      valor: formLancamento.get('valor')?.value,
      tipo: formLancamento.get('tipo')?.value,
      data: moment().format()
    };
  }
}