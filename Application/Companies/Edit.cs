using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Companies
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Url { get; set; }
            public string Address { get; set; }
            public string City { get; set; }
            public string Phone { get; set; }
            public string Comment { get; set; }
            public string Category { get; set; }
            public bool IsAnnualSponsor { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext dataContext;
            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var company = await dataContext.Companies.FindAsync(request.Id);
                if (company == null) throw new Exception("Company not found!");
                company.Name = request.Name ?? company.Name;
                company.Url = request.Url ?? company.Url;
                company.Address = request.Address ?? company.Address;
                company.City = request.City ?? company.City;
                company.Phone = request.Phone ?? company.Phone;
                company.Comment = request.Comment ?? company.Comment;
                company.Category = request.Category ?? company.Category;
                company.IsAnnualSponsor = request.IsAnnualSponsor ? request.IsAnnualSponsor : company.IsAnnualSponsor;
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}