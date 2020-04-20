using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Projects
{
    public class List
    {
        public class Query : IRequest<List<Project>> { }

        public class Handler : IRequestHandler<Query, List<Project>>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<List<Project>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Projects.ToListAsync();
            }
        }
    }
}
