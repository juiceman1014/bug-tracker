using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BugReportsController : ControllerBase
    {
        private static List<BugReport> _bugReports = new List<BugReport>
        {
            new BugReport { Id = 1, Title = "Login button unresponsive", Description = "Clicking login does nothing.", AssignedTo = "Justin", Status = "Open" },
            new BugReport { Id = 2, Title = "Navbar overlaps content", Description = "Navbar covers content on small screens.", AssignedTo = "Alex", Status = "In Progress"}
        };

        // GET: api/bugreports
        [HttpGet]
        public ActionResult<IEnumerable<BugReport>> Get()
        {
            return Ok(_bugReports);
        }

        // POST: api/bugreports
        [HttpPost]
        public ActionResult<BugReport> Post(BugReport newBug)
        {
            newBug.Id = _bugReports.Count + 1;
            _bugReports.Add(newBug);
            return CreatedAtAction(nameof(Get), new { id = newBug.Id }, newBug);
        }
    }
}