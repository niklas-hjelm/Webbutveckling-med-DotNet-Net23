# Övningar APIer i .NET

## Övning 1: Skapa en enkel API

1. Skapa en ny ASP.NET Empty-projekt.
2. Lägg till en endpoint som returnerar den lista med produkter/tjänster du använt i Labb 1.
3. Kör APIet och testa att anropa det med Postman.
4. Kopiera din Labb 1 till en ny mapp (inte i api-projektet) och ändra så att den använder ditt API istället för den hårdkodade arrayen.
5. Kör din Labb 1 och testa att den fungerar med ditt API.

## Övning 2: Skapa en enkel API med Entity Framework

### Mål
Utgå från gårdagens kod på https://github.com/niklas-hjelm/LiveDemoNETAPI och byta ut listan mot valfri databas.

### Genomförande

Börja med att lägga till ett projekt parallellt med apiet som heter DataAccess och sätt upp det som om du skulle ha gjort det för en konsollapplikation (eller ta DataAccess från din labb 3 i databaser om det är utbrutet)

Referera sedan till det projektet i APIet

Lägg sedan till dbcontext (och eventuellt repository/service) i ServiceCollection i APIet via

```csharp
builder.Services.AddDbContext()
```
respektive
```csharp 
builder.Services.AddScoped()
```

Gör en migration och update-database (var noga med vilket projekt som är startup-projekt och vilket som är default project i package manager console) och kör sedan APIet och testa att det fungerar.

Ta sedan in dbcontext(eller eventuellt repository) i endpointsen så som AnimalService i exemplet.

Testa i postman.