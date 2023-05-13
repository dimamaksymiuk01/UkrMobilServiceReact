using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UkrMobilServiceNotes2.Models;

namespace UkrMobilServiceNotes2.Data
{
    public interface INotesRepository
    {
        public Task<Note> CreateNote(Note note);
        public Task DeleteNote(Guid id);
        public Task<List<Note>> GetAllNotes();
        public Task<Note> UpdateNote(Note note);
    }
}