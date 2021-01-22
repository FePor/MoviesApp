using Entities;
using MoviesDal;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IMoviesBL
    {
        Task<Movie> GetMovie(string tit);
        Task<List<Movie>> GetAllMovies(string title = null);
    }
}