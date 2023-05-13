using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.AspNetCore.Hosting.Server.Features;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UkrMobilServiceNotes2.Data;
using UkrMobilServiceNotes2.Models;

namespace UkrMobilServiceNotes2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INotesRepository repository;

        public NotesController(INotesRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAllNotes()
        {
            var notes = await repository.GetAllNotes();
            return Ok(notes);
        }

        [HttpDelete("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteNote(Guid id)
        {
            await repository.DeleteNote(id);
            return Ok();
        }

        [HttpPost("")]
        [AllowAnonymous]
        public async Task<IActionResult> AddNote([FromBody] Note note)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Note tmp = note;
            tmp.Id = Guid.NewGuid();
            await repository.CreateNote(tmp);
            return Ok(tmp);
        }
    }
}