using Poc.ControleLancamento.Domain.Entity;
using Poc.ControleLancamento.Domain.Interfaces.Repositories.Base;

namespace Poc.ControleLancamento.Domain.Interfaces.Repositories
{
    public interface ILancamentoRepository : IRepositoryBase<Lancamento, Guid>
    {
    }
}
