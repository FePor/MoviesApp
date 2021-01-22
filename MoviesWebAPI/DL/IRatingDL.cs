using System.Collections.Generic;
using System.Threading.Tasks;
using Entities;
using MoviesWebAPI.Models;

namespace MoviesDal
{
    public interface IRatingDL
    {
        Task<Rating> GetRatingTitle(string tit);
        Task<Rating> SetRatingTitle(Rating r);


    }
}