using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using UkrMobilServiceNotes2.Data;
using AutoMapper;
using FluentValidation;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddMvc(options => options.EnableEndpointRouting = false);
builder.Services.AddValidatorsFromAssemblyContaining<Program>();
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddValidatorsFromAssemblyContaining<Program>();
builder.Services.AddFluentValidationAutoValidation();
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=UkrMobilNotes.db"));
//builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql("Host=localhost;Port=5432;Database=testtestDB;Username=postgres;Password=2512002"));
builder.Services.AddTransient<INotesRepository, NotesRepository>();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "frontend/build");
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStaticFiles();
app.UseRouting();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
    builder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod()
    .SetIsOriginAllowed(origin => true)
);
app.UseStaticFiles();
app.UseAuthorization();

app.UseEndpoints(endpoints => endpoints.MapControllers());

app.UseSpa(spa =>
          {
              spa.Options.SourcePath = "frontend";
              if (app.Environment.IsDevelopment())
              {
                  spa.UseReactDevelopmentServer(npmScript: "start");
              }
          });

app.Run("http://localhost:5000");