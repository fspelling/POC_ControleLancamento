using Poc.ControleLancamento.Domain.Entity;
using Poc.ControleLancamento.Domain.Interfaces.Repositories;
using Poc.ControleLancamento.Infra.Data;
using Poc.ControleLancamento.Infra.Repositories.Base;

namespace Poc.ControleLancamento.Infra.Repositories
{
    public class LancamentoRepository : RepositoryBase<Lancamento, Guid>, ILancamentoRepository
    {
        protected readonly ControleLancamentoDbContext _context;

        public LancamentoRepository(ControleLancamentoDbContext context) : base(context)
        {
            _context = context;
        }
    }
}
