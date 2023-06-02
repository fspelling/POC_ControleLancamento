import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CadastroLancamentoComponent } from './lancamento/pages/cadastro-lancamento/cadastro-lancamento.component';
import { RelatorioLancamentoComponent } from './lancamento/pages/relatorio-lancamento/relatorio-lancamento.component';

const routes: Route[] = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: 'cadastro',
  },
  {
      path: 'cadastro',
      component: CadastroLancamentoComponent
  },
  {
    path: 'cadastro/:id',
    component: CadastroLancamentoComponent
},
  {
    path: 'relatorio',
    component: RelatorioLancamentoComponent
},
  {
      path: 'not-found',
      component: NotFoundComponent,
      data: { title: 'Not found' }
  },
  {
      path: '**',
      redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
