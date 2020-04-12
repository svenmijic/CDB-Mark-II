using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Companies
{
    public class Create
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
                var company = new Company
                {
                    Id = request.Id,
                    Name = request.Name,
                    Url = request.Url,
                    Address = request.Address,
                    City = request.City,
                    Phone = request.Phone,
                    Comment = request.Comment,
                    Category = request.Category
                };
                dataContext.Companies.Add(company);
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}