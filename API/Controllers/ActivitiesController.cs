using Persistence;
using Microsoft.AspNetCore.Mvc;
using Domain;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Activity>> GetActivities()
        {
            return _context.Activities.ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Activity> GetActivity(Guid id)
        {
            return _context.Activities.Where(activity => activity.Id == id).FirstOrDefault();
        }
    }
}