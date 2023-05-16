using System.Text.Json.Serialization;
using FluentValidation;

namespace UkrMobilServiceNotes2.Models
{
    public class NoteCreateDto
    {
        [JsonPropertyName("client")]
        public string? Client { get; set; }
        [JsonPropertyName("device")]
        public string? Device { get; set; }
        [JsonPropertyName("market")]
        public string? Market { get; set; }
        [JsonPropertyName("phone")]
        public string? Phone { get; set; }
        [JsonPropertyName("product")]
        public string? Product { get; set; }
        [JsonPropertyName("date")]
        public DateTime? Date { get; set; }
        [JsonPropertyName("status")]
        public bool? Status { get; set; }
    }
}