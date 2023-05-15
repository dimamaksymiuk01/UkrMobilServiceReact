using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.EntityFrameworkCore;
using UkrMobilServiceNotes2.Data;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder();


builder.Services.AddMvc(options => options.EnableEndpointRouting = false);
builder.Services.AddValidatorsFromAssemblyContaining<Program>();
builder.Services.AddFluentValidationAutoValidation();
// builder.Services.Configure<ApiBehaviorOptions>(options =>
//             {
//                 options.SuppressModelStateInvalidFilter = true;
//             });

builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite("Data Source=UkrMobilNotes.db"));
builder.Services.AddTransient<INotesRepository, NotesRepository>();
builder.Services.AddControllers();
builder.Services.AddSpaStaticFiles(configuration => configuration.RootPath = "frontend/build");

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}
app.UseSpaStaticFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(builder =>
    builder
     .AllowAnyOrigin()
     .AllowAnyHeader()
     .AllowAnyMethod()
);

app.UseStaticFiles();
app.UseAuthorization();

app.UseEndpoints(endpoints => endpoints.MapControllers());

// app.UseSpa(spa => spa.Options.SourcePath = "frontend");
app.UseSpa(spa =>
          {
              spa.Options.SourcePath = "frontend";

              if (app.Environment.IsDevelopment())
              {
                  spa.UseReactDevelopmentServer(npmScript: "start");
              }
          });
app.Run();