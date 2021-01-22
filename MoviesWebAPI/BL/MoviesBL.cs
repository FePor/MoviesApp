using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using System.Linq;
using MoviesDal;
using Entities;

namespace BL
{
    public class MoviesBL : IMoviesBL
    {
        public IMoviesDL _moviesDL;
        public MoviesBL(IMoviesDL moviesDL)
        {
            _moviesDL = moviesDL;
        }
        public Task<Movie> GetMovie(string tit)
        {
            return _moviesDL.GetMovie(tit);
        }

        public Task<List<Movie>> GetAllMovies(string title = null)
        {
            return _moviesDL.GetAllMovies(title);//throw new NotImplementedException();
        }
    }
}
