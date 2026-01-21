<?php

namespace App\Http\Controllers\Tickets;

use App\Http\Controllers\Controller;
use App\Models\TicketComment;
use App\Models\Tickets;
use Illuminate\Http\Request;

class TicketCommentController extends Controller
{
    public function __invoke(Request $request)
    {
        TicketComment::Create([
            'content' => $request->content,
            'user_id' => $request->user_id,
            'ticket_id' => $request->ticket_id
        ]);

        return redirect()->back()->with(['message' => 'Replied to the Interaction']);
    }
}
