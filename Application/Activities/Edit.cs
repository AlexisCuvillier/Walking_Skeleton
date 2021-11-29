using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);


            //    activity.Title = request.Activity.Title ?? activity.Title; (possible de refactorer avec Mapper ce qui evite decrire chaque ligne a la mains
            //    pour faire le tour de chaque propriété a l'interieur de mon activité(col de ma bdd pour le coup))

                _mapper.Map(request.Activity, activity);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }

    }
}