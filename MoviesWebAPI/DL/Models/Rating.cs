using System;
using System.Collections.Generic;

#nullable disable

namespace MoviesWebAPI.Models
{
    public partial class Rating
    {
        public string Tconst { get; set; }
        public double? AverageRating { get; set; }
        public int? NumVotes { get; set; }

        public virtual Title TconstNavigation { get; set; }
    }
}
