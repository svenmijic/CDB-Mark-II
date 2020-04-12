using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Companies
{
    public class Details
    {
        public class Query : IRequest<Company>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Company>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<Company> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Companies.FindAsync(request.Id);
            }
        }
    }
}