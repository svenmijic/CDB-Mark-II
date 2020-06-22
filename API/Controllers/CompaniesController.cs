using System;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly DataContext dataContext;

        public CompaniesController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            return Ok(await dataContext.Companies.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Details(Guid id)
        {
            var company = await dataContext.Companies.FindAsync(id);
            if (company == null) return NotFound("Company not found!");
            return Ok(company);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Company company)
        {
            dataContext.Companies.Add(company);
            if (await dataContext.SaveChangesAsync() > 0) return Created("", company);
            return BadRequest("Problem saving changes!");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Company companyDto)
        {
            var company = await dataContext.Companies.FindAsync(companyDto.Id);
            if (company == null) return NotFound("Company not found!");
            company.Name = companyDto.Name ?? company.Name;
            company.Url = companyDto.Url ?? company.Url;
            company.Address = companyDto.Address ?? company.Address;
            company.City = companyDto.City ?? company.City;
            company.Phone = companyDto.Phone ?? company.Phone;
            company.Comment = companyDto.Comment ?? company.Comment;
            company.Category = companyDto.Category ?? company.Category;
            company.IsAnnualSponsor = companyDto.IsAnnualSponsor ? companyDto.IsAnnualSponsor : company.IsAnnualSponsor;
            await dataContext.SaveChangesAsync();
            return Ok(company);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            var company = await dataContext.Companies.FindAsync(id);
            if (company == null) return NotFound("Company not found!");
            dataContext.Remove(company);
            if (await dataContext.SaveChangesAsync() > 0) return Ok();
            return BadRequest("Problem saving changes!");
        }
    }
}