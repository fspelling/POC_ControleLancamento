import { LancamentoModel } from "src/app/lancamento/models/lancamento.model";

export interface RemoverLancamentoResponse {
    mensagem: string;
    error: boolean;
    lancamento: LancamentoModel;
}