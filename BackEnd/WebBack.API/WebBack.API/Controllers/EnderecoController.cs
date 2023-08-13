using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using WebBack.Application.DTOs;
using WebBack.Application.Interfaces;

namespace WebBack.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnderecoController : ControllerBase
    {
        private readonly IEnderecoService _enderecoService;

        public EnderecoController(IEnderecoService enderecoService)
        {
            _enderecoService = enderecoService;
        }

        [HttpGet("{cep}")]
        public async Task<ActionResult<EnderecoDto>> GetEndereco(string cep)
        {
            try
            {
                var endereco = await _enderecoService.GetEnderecoAsync(cep);
                if (endereco == null) return BadRequest("Cep inválido.");

                return Ok(endereco);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    $"Erro ao tentar recuperar Endereco. Erro: {ex.Message}");
            }
        }
    }
}
