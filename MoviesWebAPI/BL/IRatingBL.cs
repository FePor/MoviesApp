using Entities;
using MoviesDal;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BL
{
    public interface IRatingBL
    {
        //Task<Rating> GetRatingTitle(string tit);
        Task<bool> SetRatingTitle(string tit, float rate);
    }
}