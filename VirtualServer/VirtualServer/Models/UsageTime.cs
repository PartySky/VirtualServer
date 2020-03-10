using System;
using System.Numerics;

namespace VirtualServer.Models
{
    public class UsageTime
    {
        public int Id { get; set; }
        public Nullable<DateTime> LastStartDate { get; set; }
        public Nullable<DateTime> LastStopDate { get; set; }
        public String TotalUsageTime { get; set; }
    }
}