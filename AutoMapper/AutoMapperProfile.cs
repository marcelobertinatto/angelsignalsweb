using System;
using AngelSignalsWeb.Model;
using AutoMapper;

namespace AngelSignalsWeb.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
