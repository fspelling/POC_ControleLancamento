export enum TipoLancamento {
    Debito,
    Credito
}

export const TipoLancamentoLabel = new Map<number, string>([
    [TipoLancamento.Debito, 'Debito'],
    [TipoLancamento.Credito, 'Credito']
]);