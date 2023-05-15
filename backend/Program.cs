using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using UkrMobilServiceNotes2.Data;

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
builder.Services.AddTransient<INotesRepository, NotesRepository>();
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
);
// app.UseCors("AllowAll");

// app.UseCors(builder =>
//             builder
//             .WithOrigins("https://localhost:5000", "http://localhost:3000", "http://localhost:3007", "https://localhost:3007")            
//             .AllowAnyHeader()
//             .AllowAnyMethod()
//             .AllowCredentials()
// );

app.Run("http://localhost:5000");