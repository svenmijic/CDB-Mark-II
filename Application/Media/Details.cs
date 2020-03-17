using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Media
{
    public class Details
    {
        public class Query : IRequest<Medium>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Medium>
        {
            private readonly DataContext dataContext;

            public Handler(DataContext dataContext)
            {
                this.dataContext = dataContext;
            }
            public async Task<Medium> Handle(Query request, CancellationToken cancellationToken)
            {
                return await dataContext.Media.FindAsync(request.Id);
            }
        }
    }
}