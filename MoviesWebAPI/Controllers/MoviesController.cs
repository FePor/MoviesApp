using BL;
using Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
        private readonly ILogger<MoviesController> _logger;
        IMoviesBL _moviesBL;

        public MoviesController(ILogger<MoviesController> logger , IMoviesBL moviesBL)
        {
            _logger = logger;
            _moviesBL = moviesBL;
        }


        [HttpGet]
        public ActionResult<Movies> GetMovies(string t = null)
        {

            var list = _moviesBL.GetAllMovies(t).GetAwaiter().GetResult();
            return new Movies { Search = list, Total = list.Count };

        }

        [HttpGet("{id}", Name = "GetMovie")]
        public ActionResult<Movie> GetMovie(string id = null) 
        {
            var movie = _moviesBL.GetMovie(id).GetAwaiter().GetResult();
            return movie;

        }
    }
}
