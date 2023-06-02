import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroLancamentoComponent } from './cadastro-lancamento.component';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    CadastroLancamentoComponent
  ],
  imports: [
    CommonModule,
    VmessageModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ]
})
export class CadastroLancamentoModule { }
