using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using SampleHotelBooking.Infrastructure.Model;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace SampleHotelBooking;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> option) : base(option) { }

    public AppDbContext()
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Hotel> Hotels { get; set; }
    public DbSet<Amenity> Amenities { get; set; }
    public DbSet<Room> Rooms { get; set; }
    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Payment> Payments { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<HotelAmenity> HotelAmenities { get; set; }
    public DbSet<City> Cities { get; set; }
    public DbSet<InvoiceRecord> InvoiceRecords { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Hotel>()
                      .Property(h => h.ImageURLs)
                      .HasConversion(
                          v => string.Join(',', v),
                          v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList());
        //Myself 
        // .Metadata.SetValueComparer(new ValueComparer<string[]>(
        // (h1, h2) => h1.SequenceEqual(h2),
        //  h => h.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        //  h => h.ToArray()));

        modelBuilder.Entity<Room>()
            .Property(h => h.ImageURLs)
            .HasConversion(
                v => string.Join(',', v),
                v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList());
             //Myself :
           //  .Metadata.SetValueComparer(new ValueComparer<string[]>(
          //  (r1, r2) => r1.SequenceEqual(r2),
            //r => r.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
            //r => r.ToArray()));

        modelBuilder.Entity<Review>().HasOne(r => r.User)
            .WithMany(u => u.Reviews)
            .HasForeignKey(r => r.UserId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Review>().HasOne(r => r.Hotel)
            .WithMany(h => h.Reviews)
            .HasForeignKey(r => r.HotelId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Booking>().HasOne(b => b.User)
            .WithMany(u => u.Bookings)
            .HasForeignKey(b => b.UserId)
            .OnDelete(DeleteBehavior.NoAction);


       modelBuilder.Entity<Booking>().HasOne(b => b.Room)
            .WithMany(r => r.Bookings)
            .HasForeignKey(b => b.RoomId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<Hotel>().HasOne(h => h.Owner)
            .WithMany(u => u.Hotels)
            .HasForeignKey(h => h.OwnerId)
            .OnDelete(DeleteBehavior.NoAction);

        modelBuilder.Entity<HotelAmenity>()
        .HasKey(ha => new { ha.HotelId, ha.AmenityId });

        modelBuilder.Entity<HotelAmenity>()
            .HasOne(ha => ha.Hotel)
            .WithMany(h => h.HotelAmenities)
            .HasForeignKey(ha => ha.HotelId);

        modelBuilder.Entity<HotelAmenity>()
            .HasOne(ha => ha.Amenity)
            .WithMany(a => a.HotelAmenity)
            .HasForeignKey(ha => ha.AmenityId);

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId);

            entity.HasIndex(u => u.Email)
                  .IsUnique();
            entity.HasIndex(u => u.Username)
            .IsUnique();
        });

        modelBuilder.Entity<Payment>()
            .Property(p => p.Amount)
            .HasColumnType("float")
            .HasPrecision(10, 2);

        modelBuilder.Entity<Booking>()
            .Property(r => r.TotalPrice)
            .HasColumnType("float")
            .HasPrecision(10, 2);

        modelBuilder.Entity<Room>()
            .Property(r => r.PricePerNight)
            .HasColumnType("float")
            .HasPrecision(10, 2);

        modelBuilder.Entity<InvoiceRecord>()
            .HasOne(ha => ha.Booking);

        modelBuilder.Entity<City>()
          .HasMany(ho => ho.Hotels);
         
        modelBuilder.Entity<City>()
               .Property(h => h.ImageURLs)
               .HasConversion(
                   v => string.Join(',', v),
                  v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList());

        /*  .Property(c => c.ImageURLs)
    .HasConversion(
        v => string.Join(',', v),
        v => v.Split(',', StringSplitOptions.RemoveEmptyEntries))
    .Metadata.SetValueComparer(new ValueComparer<string[]>(
        (c1, c2) => c1.SequenceEqual(c2),
        c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
        c => c.ToArray()));
        */
        //AppDbContext.Seed(modelBuilder);

     //   base.OnModelCreating(modelBuilder);
    }

    
    /*   public DbSet<User> Users { get; set; }
       public DbSet<Hotel> Hotels { get; set; }
       public DbSet<Amenity> Amenities { get; set; }
       public DbSet<Room> Rooms { get; set; }
       public DbSet<Booking> Bookings { get; set; }
       public DbSet<Payment> Payments { get; set; }
       public DbSet<Review> Reviews { get; set; }
       public DbSet<HotelAmenity> HotelAmenities { get; set; }
       public DbSet<City> Cities { get; set; }
       public DbSet<InvoiceRecord> InvoiceRecords { get; set; }*/
}


