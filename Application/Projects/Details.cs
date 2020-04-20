using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Projects
{
    public class Details
    {
        public class Query : IRequest<Project>
        {
            public long Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Project>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<Project> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Projects.FindAsync(request.Id);
            }
        }
    }
}