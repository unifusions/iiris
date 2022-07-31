<?php

namespace App\Models;

use App\Traits\TicketsByFacility;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    use HasFactory, TicketsByFacility;

    protected $fillable = [
        'form_data',
        'subject',
        'from_user_id',
        'to_user_id',
        'facility_id',
        'status'
    ];

    // protected $casts = [

    //     'created_at' => 'datetime:d/m/Y',
    // ];
    public function facility()
    {
        return $this->belongsTo(Facility::class);
    }

    public function comments()
    {
        return $this->hasMany(TicketComment::class, 'ticket_id')
            ->orderBy('created_at', 'DESC');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['status'] ?? null, function ($query, $status) {
            $query->where(function ($query) use ($status) {
                $query->where('status', $status);
                // ->orWhere('last_name', 'like', '%'.$search.'%')
                // ->orWhere('email', 'like', '%'.$search.'%')
                // ->orWhereHas('organization', function ($query) use ($search) {
                // $query->where('name', 'like', '%'.$search.'%');
                // });
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
}
