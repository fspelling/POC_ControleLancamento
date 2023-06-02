import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { CadastroLancamentoModule } from './lancamento/pages/cadastro-lancamento/cadastro-lancamento.module';
import { RelatorioLancamentoModule } from './lancamento/pages/relatorio-lancamento/relatorio-lancamento.module';
import { AlertModule } from './shared/alert/alert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    ErrorsModule,
    BrowserAnimationsModule,
    CadastroLancamentoModule,
    RelatorioLancamentoModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
