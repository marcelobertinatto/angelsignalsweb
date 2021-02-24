using System;
using AngelSignalsWeb.Model;
using Microsoft.EntityFrameworkCore;

namespace AngelSignalsWeb.Data
{
    public class Context : DbContext
    {
        public DbSet<User> User { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}
