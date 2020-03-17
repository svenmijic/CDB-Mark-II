using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Media
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var medium = await dataContext.Media.FindAsync(request.Id);
                if (medium == null) throw new Exception("Medium not found!");
                dataContext.Remove(medium);
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}