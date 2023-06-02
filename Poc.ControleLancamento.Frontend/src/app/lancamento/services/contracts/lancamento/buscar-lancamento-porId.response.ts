import { LancamentoModel } from "src/app/lancamento/models/lancamento.model";

export interface BuscarLancamentoPorIdResponse {
    mensagem: string;
    error: boolean;
    lancamento: LancamentoModel;
}