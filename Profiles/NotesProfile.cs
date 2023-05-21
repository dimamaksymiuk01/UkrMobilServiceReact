using AutoMapper;
using UkrMobilServiceNotes2.Models;

namespace InforceTestingApp.Profiles
{
    public class NotesProfile : Profile
    {
        public NotesProfile()
        {
            CreateMap<NoteCreateDto, Note>();
        }
    }
}