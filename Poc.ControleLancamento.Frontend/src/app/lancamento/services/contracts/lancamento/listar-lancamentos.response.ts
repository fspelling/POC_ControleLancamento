import { LancamentoModel } from "src/app/lancamento/models/lancamento.model";

export interface ListarLancamentosResponse {
    mensagem: string;
    error: boolean;
    lancamentos: LancamentoModel[];
}