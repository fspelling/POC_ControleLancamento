using Poc.ControleLancamento.Domain.Arguments.Lancamento.Request;
using Poc.ControleLancamento.Domain.Arguments.Lancamento.Response;
using Poc.ControleLancamento.Domain.Entity;
using Poc.ControleLancamento.Domain.Interfaces.Repositories;
using Poc.ControleLancamento.Domain.Interfaces.Services;
using Poc.ControleLancamento.Domain.Resourses;

namespace Poc.ControleLancamento.Domain.Services
{
    public class LancamentoService : ILancamentoService
    {
        private readonly ILancamentoRepository _lancamentoRepository;

        public LancamentoService(ILancamentoRepository lancamentoRepository)
            => _lancamentoRepository = lancamentoRepository;

        public BuscarPorIdResponse BuscarPorId(BuscarPorIdRequest request)
        {
            var lancamento = _lancamentoRepository.ObterPorId(request.Id);

            return new BuscarPorIdResponse()
            {
                Lancamento = lancamento,
                Error = lancamento == null ? true : false,
                Mensagem = lancamento == null ? string.Format(Message.DADOS_NAO_ENCONTRADOS, request.Id) : Message.OPERACAO_REALIZADA_SUCESSO
            };
        }

        public ListarResponse Listar()
        {
            var lancamentos = _lancamentoRepository.Listar().ToList();

            return new ListarResponse()
            {
                Lancamentos = lancamentos,
                Error = lancamentos == null ? true : false,
                Mensagem = lancamentos == null ? Message.DADOS_NAO_ENCONTRADOS : Message.OPERACAO_REALIZADA_SUCESSO
            };
        }

        public AdicionarResponse Adicionar(AdicionarRequest request)
        {
            var lancamento = new Lancamento()
            {
                ID = Guid.NewGuid(),
                Tipo = request.TipoLancamento,
                Valor = request.ValorLancamento,
                Data = request.DataLancamento
            };

            var cadastro = _lancamentoRepository.Adicionar(lancamento);
            return new AdicionarResponse()
            {
                Lancamento = cadastro,
                Error = cadastro == null ? true : false,
                Mensagem = cadastro == null ? Message.CADASTRO_ERRO : Message.CADASTRO_REALIZADO_SUCESSO
            };
        }

        public ExcluirResponse Excluir(ExcluirRequest request)
        {
            var lancamento = _lancamentoRepository.ObterPorId(request.Id);
            var lancamentoRemovida = _lancamentoRepository.Remover(lancamento);

            return new ExcluirResponse()
            {
                Lancamento = lancamentoRemovida,
                Error = lancamentoRemovida == null ? true : false,
                Mensagem = lancamentoRemovida == null ? Message.DADOS_NAO_ENCONTRADOS : Message.DADOS_EXCLUIDOS
            };
        }

        public AtualizarResponse Atualizar(AtualizarRequest request)
        {
            var lancamento = _lancamentoRepository.ObterPorId(request.ID);
            lancamento.Alterar(request.TipoLancamento, request.ValorLancamento, request.DataLancamento);

            var cadastroAtualizado = _lancamentoRepository.Alterar(lancamento);

            return new AtualizarResponse()
            {
                Lancamento = cadastroAtualizado,
                Error = cadastroAtualizado == null ? true : false,
                Mensagem = cadastroAtualizado == null ? Message.CADASTRO_ERRO : Message.CADASTRO_REALIZADO_SUCESSO
            };
        }
    }
}
