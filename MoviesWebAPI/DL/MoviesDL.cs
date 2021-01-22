using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Entities;
using MoviesWebAPI.Models;

namespace MoviesDal
{
    public class MoviesDL : IMoviesDL
    {
        IDMBContext _myDBContext;
        const string TYPE_MOVIE = "movie";
        public MoviesDL(IDMBContext mySiteDBContext)
        {
            _myDBContext = mySiteDBContext;
        }

        public async Task<List<Movie>> GetAllMovies(string t = null)
        {


            var r = _myDBContext.Akas.ToList()
                .GroupBy(a => a.TitleId)
                .Select(ak => new { title = ak.Key, lang = ak.Where(ass => !string.IsNullOrWhiteSpace(ass.Language)).Select(lang => lang.Language).Distinct().ToList() })
                .ToList(); 

            var result = from title in _myDBContext.Titles.ToList()
                         join rating in _myDBContext.Ratings.ToList() on title.Tconst equals rating.Tconst into Rating
                         from m in Rating.DefaultIfEmpty()
                         join akas in r on title.Tconst equals akas.title into Aka
                         from a in Aka.DefaultIfEmpty()
                         where title.TitleType == TYPE_MOVIE && (t == null || title.PrimaryTitle.Contains(t))
                         select new Movie
                         {
                             imdbID = title.Tconst,
                             Title = title.PrimaryTitle,
                             Released = Convert.ToString(title.StartYear),
                             Rating = m != null ? m.AverageRating : null,
                             Genre = title.Genres,
                             Language = a != null ? a.lang : new List<string>()
                         };
            return result.ToList();
        }

        public async Task<Movie> GetMovie(string id)
        {

            var r = _myDBContext.Akas.ToList()
                .GroupBy(a => a.TitleId)
                .Select(ak => new { title = ak.Key, lang = ak.Where(ass => !string.IsNullOrWhiteSpace(ass.Language)).Select(lang => lang.Language).Distinct().ToList() })
                .ToList();

            var result = from title in _myDBContext.Titles.ToList()
                         join rating in _myDBContext.Ratings.ToList() on title.Tconst equals rating.Tconst into Rating
                         from m in Rating.DefaultIfEmpty()
                         join akas in r on title.Tconst equals akas.title into Aka
                         from a in Aka.DefaultIfEmpty()
                         where title.TitleType == TYPE_MOVIE && title.Tconst == id
                         select new Movie
                         {
                             imdbID = title.Tconst,
                             Title = title.PrimaryTitle,
                             Released = Convert.ToString(title.StartYear),
                             Rating = m != null ? m.AverageRating : null,
                             Genre = title.Genres,
                             Language = a != null ? a.lang : new List<string>()
                         };
            return result.FirstOrDefault();
        }


    }
}


