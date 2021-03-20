#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

#FROM  mcr.microsoft.com/dotnet/aspnet:5.0-focal AS base
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

#FROM mcr.microsoft.com/dotnet/sdk:5.0-focal AS build
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["AngelSignalsWeb.csproj", "."]
RUN dotnet restore "./AngelSignalsWeb.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "AngelSignalsWeb.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AngelSignalsWeb.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet AngelSignalsWeb.dll
#ENTRYPOINT ["dotnet", "AngelSignalsWeb.dll"]