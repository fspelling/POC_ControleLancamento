﻿using Poc.ControleLancamento.Domain.Arguments.Base;

namespace Poc.ControleLancamento.Domain.Arguments.Lancamento.Response
{
    public class AdicionarResponse : ResponseBase
    {
        public Entity.Lancamento? Lancamento { get; set; }
    }
}
