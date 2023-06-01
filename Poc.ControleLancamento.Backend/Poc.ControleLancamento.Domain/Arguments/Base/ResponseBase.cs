using Poc.ControleLancamento.Domain.Resourses;

namespace Poc.ControleLancamento.Domain.Arguments.Base
{
    public class ResponseBase
    {
        public string Mensagem { get; set; }
        public bool Error { get; set; }

        public ResponseBase()
        {
            Mensagem = Message.OPERACAO_REALIZADA_SUCESSO;
            Error = false;
        }
    }
}
