using System;
using System.Collections.Generic;

namespace Domain
{
    public class CompanyContact
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public long CompanyId { get; set; }
        public string Function { get; set; }
        public byte[] CreatedAt { get; set; }
    }
}
