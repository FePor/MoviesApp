using BL;
using MoviesDal;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    class RatingBL : IRatingBL
    {

        public IRatingDL _ratingDL;
        public RatingBL(IRatingDL ratingDL)
        {
            _ratingDL = ratingDL;
        }
        public async Task<bool> SetRatingTitle(string tit, float rate)
        {
            var rating = _ratingDL.GetRatingTitle(tit).Result;
            rating.NumVotes++;
            rating.AverageRating = (rating.AverageRating + rate) / rating.NumVotes;
            await _ratingDL.SetRatingTitle(rating);
            return true;
        }
    }
}
