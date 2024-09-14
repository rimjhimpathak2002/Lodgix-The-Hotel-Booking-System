
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using SampleHotelBooking.Infrastructure.DTOs;
using SampleHotelBooking.Interface;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SampleHotelBooking.Service;

/*  public class TokenService: ITokenService
  {
  private readonly IConfiguration _configuration;

  public TokenService(IConfiguration configuration)
      {
          _configuration = configuration;
  }

  public string GenerateJWT(string userId, string role)
  {
      //Form Security Key and Credential
      var key = _configuration.GetValue<string>("ApiSettings:Secret");
      var securedKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
      var securityCredentials = new SigningCredentials(securedKey, SecurityAlgorithms.HmacSha256);


      //Define Claims with a List of Claims 
      var claims = new List<Claim>()
          {
              new Claim(JwtRegisteredClaimNames.Sub,userId),
              new Claim(ClaimTypes.Role,role),
              new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString()), //Unique Id
              //new Claim("Department",department),
              //new Claim("accessLevel",accessLevel)
          };

      //Define the Token Object
      var token = new JwtSecurityToken(

            issuer: "SampleHotelStay.com",
            audience: "USers",
            claims: claims,
            expires: DateTime.Now.AddHours(1),
            signingCredentials: securityCredentials
          );


      var tokenS = new JwtSecurityTokenHandler();

      return tokenS.WriteToken(token);
  }



  }*/

public class TokenService : ITokenService
{
    private readonly IConfiguration _configuration;

    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string GenerateJWT(string userId, string role)
    {
        throw new NotImplementedException();
    }

    public string GenerateToken(string userId, string role)
    {
        // Retrieve configuration values for issuer, audience, and key
        var issuer = _configuration["Jwt:Issuer"];
        var audience = _configuration["Jwt:Audience"];
        var key = _configuration["Jwt:Key"];

        // Create security key and signing credentials
        var securedKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var credentials = new SigningCredentials(securedKey, SecurityAlgorithms.HmacSha256);

        // Define claims
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Sub, userId),
            new Claim(ClaimTypes.Role, role),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        // Define token descriptor
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Issuer = issuer,
            Audience = audience,
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = credentials
        };

        // Create token handler and generate token
        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}

public interface ITokenService
{
}