using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Poc.ControleLancamento.Domain.Entity;

namespace Poc.ControleLancamento.Infra.Data.Map
{
    public class LancamentoMap : IEntityTypeConfiguration<Lancamento>
    {
        public void Configure(EntityTypeBuilder<Lancamento> builder)
        {
            builder.HasKey(p => p.ID);
            builder.Property(p => p.Tipo).IsRequired();
            builder.Property(p => p.Valor).IsRequired();
            builder.Property(p => p.Data).IsRequired();
        }
    }
}
