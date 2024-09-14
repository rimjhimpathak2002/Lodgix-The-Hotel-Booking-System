using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SampleHotelBooking.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using SampleHotelBooking.Interface;
using SampleHotelBooking.Service;
using SampleHotelBooking.Infrastructure.Model;
using SampleHotelBooking.Repository;

namespace SampleHotelBooking;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.

        builder.Services.AddControllers();

        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        builder.Services.AddScoped<IUserService, UserService>();
        builder.Services.AddTransient<ICityService, CityService>();
        builder.Services.AddTransient<IAmenityService, AmenityService>();
        builder.Services.AddTransient<IHotelService, HotelService>();
        builder.Services.AddTransient<IHotelAmenityService, HotelAmenityService>();
        builder.Services.AddTransient<IRoomService, RoomService>();
        builder.Services.AddTransient<IBookingService, BookingService>();
        builder.Services.AddScoped<ITokenService, TokenService>();

        /////////////
        builder.Services.AddScoped<IRepository<string, User>, UserRepository>();
        builder.Services.AddScoped<IRepository<int, City>, CityRepository>();
        builder.Services.AddScoped<IRepository<int, Amenity>, AmenityRepository>();
        builder.Services.AddScoped<IRepository<int, Hotel>, HotelRepository>();
        builder.Services.AddScoped<IRepository<int, Room>, RoomRepository>();
        builder.Services.AddScoped<IRepository<int, Booking>, BookingRepository>();
        builder.Services.AddDbContext<AppDbContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("ConStr")));


        builder.Services.AddAuthentication(options =>
        {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(o =>
        {
            o.TokenValidationParameters = new TokenValidationParameters
            {
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"])),
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = false,
                ValidateIssuerSigningKey = true
            };
        });
        builder.Services.AddAuthorization();
        // Add configuration from appsettings.json
        builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddEnvironmentVariables();


        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        //builder.Services.AddSwaggerGen();

        builder.Services.AddSwaggerGen(opt =>
        {
            opt.SwaggerDoc("v1", new OpenApiInfo { Title = "MyAPI", Version = "v1" });
            opt.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                In = ParameterLocation.Header,
                Description = "Please enter token",
                Name = "Authorization",
                Type = SecuritySchemeType.Http,
                BearerFormat = "JWT",
                Scheme = "bearer"
            });

            opt.AddSecurityRequirement(new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference = new OpenApiReference
                    {
                        Type=ReferenceType.SecurityScheme,
                        Id="Bearer"
                    }
                },
                new string[]{}
            }
        });
        });

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        //app.UseAuthorization();
        IConfiguration configuration = app.Configuration;
        IWebHostEnvironment environment = app.Environment;

        app.MapControllers();

        app.Run();
    
}
}



