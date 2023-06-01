using Poc.ControleLancamento.Domain.Arguments.Base;

namespace Poc.ControleLancamento.Domain.Arguments.Lancamento.Response
{
    public class ListarResponse : ResponseBase
    {
        public List<Entity.Lancamento>? Lancamentos { get; set; }
    }
}
