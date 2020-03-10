using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualServer.Models
{
    public class Server
    {
        public int Id { get; set; }
        public DateTime CreateTime { get; set; }
        public Nullable<DateTime> RemovedTime { get; set; }
        [Column(TypeName = "TINYINT(4)")]
        public bool IsRemoved { get; set; }
    }
}