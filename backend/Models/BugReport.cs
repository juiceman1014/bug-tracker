namespace backend.Models
{
    public class BugReport
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Status { get; set; } = "Open";
        public string AssignedTo { get; set; }
    }
}