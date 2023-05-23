namespace UkrMobilServiceNotes2.Models
{
    public class Note
    {
        public Guid? Id { get; set; }
        public string? Client { get; set; }
        public string? Device { get; set; }
        public string? Market { get; set; }
        public string? Phone { get; set; }
        public string? Product { get; set; }

        public DateTime? Date { get; set; }
        public bool? Status { get; set; }
    }
}