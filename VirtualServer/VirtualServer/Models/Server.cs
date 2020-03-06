using System;

namespace VirtualServer.Models
{
    public class Server
    {
        public int Id { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime RemovedTime { get; set; }
        public bool IsSelectedForRemove { get; set; }
    }
}