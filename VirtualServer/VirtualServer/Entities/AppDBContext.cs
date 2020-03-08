using Microsoft.EntityFrameworkCore;
using VirtualServer.Models;

namespace VirtualServer.Entities
{
    public sealed class AppDBContext : DbContext
    {
        public DbSet<Server> Servers { get; set; }
        public DbSet<UsageTime> UsageTimes { get; set; }

        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
        {
        }   
    }
}