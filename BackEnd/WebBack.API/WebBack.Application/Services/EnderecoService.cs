
using AutoMapper;
using Microsoft.Extensions.Configuration;
using RestSharp;
using System;
using System.Text.Json;
using System.Threading.Tasks;
using WebBack.Application.DTOs;
using WebBack.Application.Interfaces;
using WebBack.Domain.Entities;

namespace WebBack.Application.Services
{
    public class EnderecoService : IEnderecoService
    {
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public EnderecoService(IConfiguration config, IMapper mapper)
        {
            _config = config;
            _mapper = mapper;
        }

        public async Task<EnderecoDto> GetEnderecoAsync(string cep)
        {
			try
			{
                var options = new RestClientOptions(_config["APIViaCEP"])
                {
                    MaxTimeout = -1,
                };

                var client = new RestClient(options);
                var request = new RestRequest($"/ws/{cep}/json", Method.Get);
                RestResponse response = await client.ExecuteAsync(request);
                if (response.IsSuccessStatusCode)
                {
                    if (!response.Content.Contains("erro"))
                    {
                        var result = JsonSerializer.Deserialize<Endereco>(response.Content);
                        return _mapper.Map<EnderecoDto>(result);
                    }
                    
                }

                return null;
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
        }
        
    }
}
