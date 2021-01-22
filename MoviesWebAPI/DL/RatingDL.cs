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
    public class RatingDL : IRatingDL
    {
        IDMBContext _myDBContext;
        public RatingDL(IDMBContext mySiteDBContext)
        {
            _myDBContext = mySiteDBContext;
        }

        public async Task<Rating> GetRatingTitle(string tit)
        {
            return await _myDBContext.Ratings.SingleOrDefaultAsync(b => b.Tconst == tit);
        }

        public Task<Rating> SetRatingTitle(Rating r)
        {
            var result = _myDBContext.Ratings.SingleOrDefault(b => b.Tconst == r.Tconst);
            if (result != null)
            {
                result.NumVotes = r.NumVotes;
                result.AverageRating = r.AverageRating;
                _myDBContext.SaveChanges();
            }
            return GetRatingTitle(r.Tconst);
        }
    }
}
