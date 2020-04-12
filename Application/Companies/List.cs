using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Companies
{
    public class List
    {
        public class Query : IRequest<List<Company>> { }

        public class Handler : IRequestHandler<Query, List<Company>>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<List<Company>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Companies.ToListAsync();
            }
        }
    }
}