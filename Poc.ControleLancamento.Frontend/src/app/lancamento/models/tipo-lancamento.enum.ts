export enum TipoLancamento {
    Debito,
    Credito
}

export const TipoLancamentoLabel = new Map<number, string>([
    [TipoLancamento.Debito, 'Débito'],
    [TipoLancamento.Credito, 'Crédito']
]);