
using System.Threading.Tasks;
using WebBack.Application.DTOs;

namespace WebBack.Application.Interfaces
{
    public interface IEnderecoService
    {
        Task<EnderecoDto> GetEnderecoAsync(string cep);
    }
}
