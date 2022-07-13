<?php

namespace App\Models;

use App\Traits\TicketsByFacility;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tickets extends Model
{
    use HasFactory, TicketsByFacility;
}
