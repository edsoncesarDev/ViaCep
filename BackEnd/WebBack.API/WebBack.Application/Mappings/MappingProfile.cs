
using AutoMapper;
using WebBack.Application.DTOs;
using WebBack.Domain.Entities;

namespace WebBack.Application.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Endereco, EnderecoDto>().ReverseMap();
        }
        
    }
}
