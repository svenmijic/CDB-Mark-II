using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Projects
{
    public class Delete
    {
        public class Command : IRequest
        {
            public long Id { get; set; }
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
                var project = await dataContext.Companies.FindAsync(request.Id);
                if (project == null) throw new Exception("Project not found!");
                dataContext.Remove(project);
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}
