using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Media
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
            public string Emails { get; set; }
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
                var medium = new Medium
                {
                    Id = request.Id,
                    Name = request.Name,
                    Emails = request.Emails
                };
                dataContext.Media.Add(medium);
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}