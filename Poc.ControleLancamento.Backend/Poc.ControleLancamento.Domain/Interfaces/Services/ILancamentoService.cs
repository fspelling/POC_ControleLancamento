using Poc.ControleLancamento.Domain.Arguments.Lancamento.Request;
using Poc.ControleLancamento.Domain.Arguments.Lancamento.Response;

namespace Poc.ControleLancamento.Domain.Interfaces.Services
{
    public interface ILancamentoService
    {
        ListarResponse Listar();
        BuscarPorIdResponse BuscarPorId(BuscarPorIdRequest request);
        AdicionarResponse Adicionar(AdicionarRequest request);
        ExcluirResponse Excluir(ExcluirRequest request);
        AtualizarResponse Atualizar(AtualizarRequest request);
    }
}
