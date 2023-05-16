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
        private readonly IMapper mapper;

        public NotesController(INotesRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
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
        public async Task<IActionResult> AddNote([FromBody] NoteCreateDto noteDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            Note tmp = mapper.Map<Note>(noteDto);
            tmp.Id = Guid.NewGuid();
            await repository.CreateNote(tmp);
            return Ok(tmp);
        }
        [HttpPost("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> ChangeNoteStatus(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            await repository.ChangeStatus(id);
            return Ok(await repository.GetNoteById(id));
        }
    }
}