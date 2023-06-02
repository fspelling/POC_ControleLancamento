import { LancamentoModel } from "src/app/lancamento/models/lancamento.model";

export interface AdicionarLancamentoResponse {
    mensagem: string;
    error: boolean;
    lancamento: LancamentoModel;
}