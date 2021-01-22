using System;
using System.Collections.Generic;

namespace Entities
{
    public class Movie
    {
        public string imdbID { get; set; }
        public string Title { get; set; }
        public string Released { get; set; }
        public double? Rating { get; set; }
        public string Genre { get; set; }

        public List<string> Language { get; set; }
        public string Description { get; set; }
        public string Poster { get; set; }

    }

    public class Movies
    {
        public List<Movie> Search { get; set; }
        public int Total { get; set; }

    }
}
