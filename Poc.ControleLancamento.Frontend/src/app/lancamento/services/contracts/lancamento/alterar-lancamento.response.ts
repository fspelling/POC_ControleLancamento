import { LancamentoModel } from "src/app/lancamento/models/lancamento.model";

export interface AlterarLancamentoResponse {
    mensagem: string;
    error: boolean;
    lancamento: LancamentoModel;
}