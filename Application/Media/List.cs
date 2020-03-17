using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Media
{
    public class List
    {
        public class Query : IRequest<List<Medium>> { }

        public class Handler : IRequestHandler<Query, List<Medium>>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<List<Medium>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Media.ToListAsync();
            }
        }
    }
}