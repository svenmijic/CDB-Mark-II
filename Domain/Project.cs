using System;
using System.Collections.Generic;

namespace Domain
{
    public class Project
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int FrGoal { get; set; }
    }
}
