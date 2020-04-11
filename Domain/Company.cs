using System;
using System.Collections.Generic;

namespace Domain
{
    public class Company
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Comment { get; set; }
        public ICollection<CompanyContact> Contacts { get; set; }
    }
}
