using Poc.ControleLancamento.Domain.Entity.Base;
using Poc.ControleLancamento.Domain.Enums;

namespace Poc.ControleLancamento.Domain.Entity
{
    public class Lancamento : EntityBase
    {
        public TipoLancamento Tipo { get; set; }
        public decimal Valor { get; set; }
        public DateTime Data { get; set; }

        public void Alterar(TipoLancamento tipoLancamento, decimal valorLancamento, DateTime dataLancamento)
        {
            Tipo = tipoLancamento;
            Valor = valorLancamento;
            Data = dataLancamento;
        }
    }
}
