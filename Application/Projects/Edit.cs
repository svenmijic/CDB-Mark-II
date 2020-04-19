using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Projects
{
    public class Edit
    {
        public class Command : IRequest
        {
            public long Id { get; set; }
            public string Name { get; set; }
            public DateTime StartDate { get; set; }
            public DateTime? EndDate { get; set; }
            public int FrGoal { get; set; }
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
                var project = await dataContext.Projects.FindAsync(request.Id);
                if (project == null) throw new Exception("Project not found!");
                project.Name = request.Name ?? project.Name;
                project.StartDate = request.StartDate;
                project.EndDate = request.EndDate ?? project.EndDate;
                project.FrGoal = request.FrGoal;
                if (await dataContext.SaveChangesAsync() > 0) return Unit.Value;
                throw new Exception("Problem saving changes!");
            }
        }
    }
}
