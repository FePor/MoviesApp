using System.Collections.Generic;
using System.Threading.Tasks;
using Entities;

namespace MoviesDal
{
    public interface IMoviesDL
    {
        Task<List<Movie>> GetAllMovies(string t);
        Task<Movie> GetMovie(string id);

    }
}