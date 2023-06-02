using Microsoft.AspNetCore.Mvc;
using Poc.ControleLancamento.Domain.Arguments.Lancamento.Request;
using Poc.ControleLancamento.Domain.Arguments.Lancamento.Response;
using Poc.ControleLancamento.Domain.Interfaces.Services;

namespace Poc.ControleLancamento.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LancamentoController : ControllerBase
    {
        private readonly ILancamentoService _LancamentoService;

        public LancamentoController(ILancamentoService LancamentoService)
        {
            _LancamentoService = LancamentoService;
        }

        [HttpGet]
        public ActionResult<ListarResponse> BuscarLancamentos()
        {
            var response = _LancamentoService.Listar();
            return Ok(response);
        }

        [HttpGet("{id}")]
        public ActionResult<ListarResponse> BuscarLancamentosPorId(Guid id)
        {
            var response = _LancamentoService.BuscarPorId(new BuscarPorIdRequest() { Id = id });
            return Ok(response);
        }

        [HttpPost]
        public ActionResult<ListarResponse> Adicionar(AdicionarRequest request)
        {
            var response = _LancamentoService.Adicionar(request);
            return Ok(response);
        }

        [HttpPut]
        public ActionResult<AtualizarResponse> Atualizar(AtualizarRequest request)
        {
            var response = _LancamentoService.Atualizar(request);
            return Ok(response);
        }

        [HttpDelete("{id}")]
        public ActionResult<ExcluirResponse> Excluir(Guid id)
        {
            var response = _LancamentoService.Excluir(new ExcluirRequest() { Id = id });
            return Ok(response);
        }
    }
}