using System;
using System.Collections.Generic;

#nullable disable

namespace MoviesWebAPI.Models
{
    public partial class Aka
    {
        public string TitleId { get; set; }
        public string Ordering { get; set; }
        public string Title { get; set; }
        public string Region { get; set; }
        public string Language { get; set; }
        public string Types { get; set; }
        public string Attributes { get; set; }
        public string IsOriginalTitle { get; set; }

        public virtual Title TitleNavigation { get; set; }
    }
}
