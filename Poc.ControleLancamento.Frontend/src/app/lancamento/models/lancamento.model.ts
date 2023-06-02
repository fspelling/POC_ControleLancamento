import { TipoLancamento } from "./tipo-lancamento.enum";

export interface LancamentoModel {
    id: string;
    tipo: TipoLancamento,
    valor: number;
    data: string;
}