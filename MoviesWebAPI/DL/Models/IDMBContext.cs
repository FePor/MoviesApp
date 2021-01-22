using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace MoviesWebAPI.Models
{
    public partial class IDMBContext : DbContext
    {
        public IDMBContext()
        {
        }

        public IDMBContext(DbContextOptions<IDMBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Aka> Akas { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }
        public virtual DbSet<Title> Titles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-58UFOBM;Database=IDMB;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Hebrew_CI_AS");

            modelBuilder.Entity<Aka>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("akas");

                entity.Property(e => e.Attributes)
                    .HasMaxLength(50)
                    .HasColumnName("attributes");

                entity.Property(e => e.IsOriginalTitle)
                    .HasMaxLength(50)
                    .HasColumnName("isOriginalTitle");

                entity.Property(e => e.Language)
                    .HasMaxLength(50)
                    .HasColumnName("language");

                entity.Property(e => e.Ordering)
                    .HasMaxLength(50)
                    .HasColumnName("ordering");

                entity.Property(e => e.Region)
                    .HasMaxLength(50)
                    .HasColumnName("region");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .HasColumnName("title");

                entity.Property(e => e.TitleId)
                    .HasMaxLength(50)
                    .HasColumnName("titleId");

                entity.Property(e => e.Types)
                    .HasMaxLength(50)
                    .HasColumnName("types");

                entity.HasOne(d => d.TitleNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.TitleId)
                    .HasConstraintName("FK__akas__titleId__30F848ED");
            });

            modelBuilder.Entity<Rating>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("rating");

                entity.Property(e => e.AverageRating).HasColumnName("averageRating");

                entity.Property(e => e.NumVotes).HasColumnName("numVotes");

                entity.Property(e => e.Tconst)
                    .HasMaxLength(50)
                    .HasColumnName("tconst");

                entity.HasOne(d => d.TconstNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.Tconst)
                    .HasConstraintName("FK__rating__tconst__2F10007B");
            });

            modelBuilder.Entity<Title>(entity =>
            {
                entity.HasKey(e => e.Tconst)
                    .HasName("PK__title__85FD53444183395F");

                entity.ToTable("title");

                entity.Property(e => e.Tconst)
                    .HasMaxLength(50)
                    .HasColumnName("tconst");

                entity.Property(e => e.EndYear).HasColumnName("endYear");

                entity.Property(e => e.Genres)
                    .HasMaxLength(50)
                    .HasColumnName("genres");

                entity.Property(e => e.IsAdult).HasColumnName("isAdult");

                entity.Property(e => e.OriginalTitle)
                    .HasMaxLength(50)
                    .HasColumnName("originalTitle");

                entity.Property(e => e.PrimaryTitle)
                    .HasMaxLength(50)
                    .HasColumnName("primaryTitle");

                entity.Property(e => e.RuntimeMinutes).HasColumnName("runtimeMinutes");

                entity.Property(e => e.StartYear).HasColumnName("startYear");

                entity.Property(e => e.TitleType)
                    .HasMaxLength(50)
                    .HasColumnName("titleType");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
