using Microsoft.EntityFrameworkCore;
using Poc.ControleLancamento.Domain.Entity;
using Poc.ControleLancamento.Infra.Data.Map;

namespace Poc.ControleLancamento.Infra.Data
{
    public class ControleLancamentoDbContext : DbContext
    {
        public ControleLancamentoDbContext(DbContextOptions<ControleLancamentoDbContext> options)
            : base(options)
        {
        }

        public DbSet<Lancamento> Lancamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Lancamento>().Property(p => p.Tipo).HasConversion(typeof(string));
            modelBuilder.ApplyConfiguration(new LancamentoMap());

            base.OnModelCreating(modelBuilder);
        }
    }
}
