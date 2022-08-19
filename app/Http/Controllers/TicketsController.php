<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\Tickets;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class TicketsController extends Controller
{
    public function index()
    {
        // return redirect()->route('underconstruction');


        return Inertia::render('Tickets/Index', [

            'filters' => request()->all('status'),
            'tickets' => Tickets::orderBy('created_at', 'desc')
                ->filter(request()->only('status'))
                ->paginate(10)
                ->through(function ($ticket) {
                    return [
                        'id' => $ticket->id,
                        'form_data' => $ticket->form_data,
                        'from_user' => User::where('id', $ticket->from_user_id)->pluck('name'),
                        'to_user' => User::where('id', $ticket->to_user_id)->pluck('name'),
                        'facility' => $ticket->facility->name,
                        'subject' => $ticket->subject,
                        'status' => $ticket->status,
                        'isAdminQuery' => User::where('id', $ticket->from_user_id)->where('role_id', '2')->orWhere('role_id', '1')->exists(),
                        'ticketUrl' => route('tickets.show', [$ticket]),
                        'links' => $ticket->links
                    ];
                }),

        ]);
    }

    public function create(Request $request)
    {
        // return redirect()->route('underconstruction');
        return Inertia::render('Tickets/Create', [
            'crf' => CaseReportForm::pluck('subject_id')->map(function ($crf) {
                return [
                    'label' => $crf,
                    'value' => $crf
                ];
            }),
           
            'selectedCrf' => Inertia::lazy(
                fn () =>
                CaseReportForm::query()
                    ->when(
                        $request->input('subject'),
                        function ($query, $subjectId) {
                            $query->where('subject_id', $subjectId);
                        }
                    )
                    ->with('facility')
                    ->with('facility.users')
                    ->with('facility.users.role')
                    
                    ->first(),
                    
            ),
            
            

        ]);
    }


    public function store(Request $request)
    {
        
        Tickets::Create([
            'form_data' => $request->subject,
            'subject' => $request->message,
            'from_user_id' => $request->from_user_id,
            'to_user_id' => $request->to_user_id,
            'facility_id' => $request->facility_id,
            'status' => $request->status
        ]);
        return redirect()->route('tickets.index')->with(['message' => 'Ticket has been raised']);
    }

    public function show(Tickets $ticket)
    {

        $user = User::find($ticket->closedby_user_id);
        return Inertia::render(
            'Tickets/Show',
            [
                'ticket' => $ticket,
                'closedByUser' => $user !== null ? ($user->role) : null,
                'backUrl' => route('tickets.index'),
                'comments' => $ticket->comments->map(function ($comment) {
                    return [
                        'id' =>  $comment->id,
                        'content' => $comment->content,
                        'user_id' => $comment->user_id,
                        'comment_user' => $comment->user->name,
                        'replied_on' => $comment->created_at
                    ];
                }),
            ]
        );
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, Tickets $ticket)
    {
        if (isset($request->status)) {
            $ticket->status = $request->status;
            $ticket->closedby_user_id = $request->closedByUser;
            $ticket->save();
            return redirect()->route('tickets.index')->with(['message' => 'Ticket has been closed successfully']);
        }
    }


    public function destroy($id)
    {
        //
    }
}
