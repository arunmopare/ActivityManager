using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            public DataContext _context { get; }
            public Handler(DataContext context)
            {
                _context = context;
            }
            public List<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return _context.Activities.ToList();
            }

            Task<List<Activity>> IRequestHandler<Query, List<Activity>>.Handle(Query request, CancellationToken cancellationToken)
            {
                return _context.Activities.ToListAsync();
            }
        }
    }
}