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
    public class MediaController : ControllerBase
    {
        private readonly DataContext dataContext;

        public MediaController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpGet]
        public async Task<IActionResult> List()
        {
            return Ok(await dataContext.Media.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Details(Guid id)
        {
            var medium = await dataContext.Media.FindAsync(id);
            if (medium == null) return NotFound("Medium not found!");
            return Ok(medium);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Medium medium)
        {
            dataContext.Media.Add(medium);
            if (await dataContext.SaveChangesAsync() > 0) return Created("", medium);
            throw new Exception("Problem saving changes!");
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Medium mediumDto)
        {
            var medium = await dataContext.Media.FindAsync(mediumDto.Id);
            if (medium == null) throw new Exception("Medium not found!");
            medium.Name = mediumDto.Name ?? medium.Name;
            medium.Url = mediumDto.Url ?? medium.Url;
            medium.Emails = mediumDto.Emails ?? medium.Emails;
            await dataContext.SaveChangesAsync();
            return Ok(medium);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            var medium = await dataContext.Media.FindAsync(id);
            if (medium == null) return NotFound("Medium not found!");
            dataContext.Media.Remove(medium);
            if (await dataContext.SaveChangesAsync() > 0) return Ok();
            return BadRequest("Problem saving changes!");
        }
    }
}