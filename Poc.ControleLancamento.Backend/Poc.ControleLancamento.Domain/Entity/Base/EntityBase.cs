using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Poc.ControleLancamento.Domain.Entity.Base
{
    public abstract class EntityBase
    {
        public Guid ID { get; set; }

        protected EntityBase() => ID = Guid.NewGuid();
    }
}
