using System.Linq.Expressions;

namespace Poc.ControleLancamento.Domain.Interfaces.Repositories.Base
{
    public interface IRepositoryBase<TEntidade, TId> where TEntidade : class where TId : struct
    {
        IQueryable<TEntidade> Listar(params Expression<Func<TEntidade, object>>[] includeProperties);

        TEntidade ObterPorId(TId id, params Expression<Func<TEntidade, object>>[] includeProperties);

        TEntidade Adicionar(TEntidade entidade);

        TEntidade Alterar(TEntidade entidade);

        TEntidade Remover(TEntidade entidade);
    }
}
