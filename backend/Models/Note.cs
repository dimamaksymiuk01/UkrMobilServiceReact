using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
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
// namespace UkrMobilServiceNotes2.Models
// {
//     public class Note
//     {
//         [BsonId]
//         [BsonRepresentation(BsonType.ObjectId)]
//         public Guid? Id { get; set; }
//         [BsonElement("client")]
//         public string? Client { get; set; }
//         [BsonElement("device")]
//         public string? Device { get; set; }
//         [BsonElement("market")]
//         public string? Market { get; set; }
//         [BsonElement("phone")]
//         public string? Phone { get; set; }
//         [BsonElement("product")]
//         public string? Product { get; set; }
//         [BsonElement("date")]
//         public DateTime? Date { get; set; }
//         [BsonElement("status")]
//         public bool? Status { get; set; }
//     }
// }