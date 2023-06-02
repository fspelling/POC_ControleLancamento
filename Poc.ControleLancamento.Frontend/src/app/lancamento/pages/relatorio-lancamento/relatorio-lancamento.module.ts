import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioLancamentoComponent } from './relatorio-lancamento.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    RelatorioLancamentoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class RelatorioLancamentoModule { }
