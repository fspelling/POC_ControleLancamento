using Poc.ControleLancamento.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Poc.ControleLancamento.Domain.Arguments.Lancamento.Request
{
    public class AdicionarRequest
    {
        [Required(ErrorMessage = "Tipo do lancamento é obrigatório")]
        public TipoLancamento TipoLancamento { get; set; }

        [Required(ErrorMessage = "Valor do lancamento é obrigatório")]
        public decimal ValorLancamento { get; set; }

        [Required(ErrorMessage = "Data do lancamento é obrigatório")]
        public DateTime DataLancamento { get; set; }
    }
}
