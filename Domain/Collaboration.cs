using System;
using System.Collections.Generic;

namespace Domain
{
    public class Collaboration
    {
        public long Id { get; set; }
        public long? CompanyId { get; set; }
        public long? ProjectId { get; set; }
        public long? PersonId { get; set; }
        public string Responsible { get; set; }
        public string Comment { get; set; }
        public byte[] Contacted { get; set; }
        public byte[] Successful { get; set; }
        public byte[] Letter { get; set; }
        public byte[] Meeting { get; set; }
        public long? Priority { get; set; }
        public byte[] CreatedAt { get; set; }
        public byte[] UpdatedAt { get; set; }
        public double? Amount { get; set; }
        public byte[] ContactInFuture { get; set; }
        public string Type { get; set; }
    }
}
