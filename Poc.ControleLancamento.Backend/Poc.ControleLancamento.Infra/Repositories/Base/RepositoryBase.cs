using Microsoft.EntityFrameworkCore;
using Poc.ControleLancamento.Domain.Entity.Base;
using Poc.ControleLancamento.Domain.Interfaces.Repositories.Base;
using System.Linq.Expressions;

namespace Poc.ControleLancamento.Infra.Repositories.Base
{
    public class RepositoryBase<TEntidade, TId> : IRepositoryBase<TEntidade, TId> where TEntidade : EntityBase where TId : struct
    {
        private readonly DbContext _context;

        public RepositoryBase(DbContext context)
        {
            _context = context;
        }

        public TEntidade Adicionar(TEntidade entidade)
        {
            var result = _context.Set<TEntidade>().Add(entidade).Entity;
            _context.SaveChanges();

            return result;
        }

        public TEntidade Alterar(TEntidade entidade)
        {
            _context.Entry(entidade).State = EntityState.Modified;
            _context.SaveChanges();

            return entidade;
        }

        public IQueryable<TEntidade> Listar(params Expression<Func<TEntidade, object>>[] includeProperties)
        {
            IQueryable<TEntidade> query = _context.Set<TEntidade>();
            return query;
        }

        public TEntidade ObterPorId(TId id, params Expression<Func<TEntidade, object>>[] includeProperties)
        {
            if (includeProperties.Any())
                return Listar(includeProperties).FirstOrDefault(p => p.ID.ToString() == id.ToString());

            return _context.Set<TEntidade>().Find(id);
        }

        public TEntidade Remover(TEntidade entidade)
        {
            var result = _context.Set<TEntidade>().Remove(entidade).Entity;
            _context.SaveChanges();

            return result;
        }
    }
}
