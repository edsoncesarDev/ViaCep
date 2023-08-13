using Microsoft.Extensions.DependencyInjection;
using WebBack.Application.Interfaces;
using WebBack.Application.Mappings;
using WebBack.Application.Services;

namespace WebBack.CrossCutting.IoC
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddScoped<IEnderecoService, EnderecoService>();
            services.AddAutoMapper(typeof(MappingProfile));

            return services;
        }
    }
}
