
 @if($visit->visit_no===1)

     @include('crf.firstVisit')

     @else

     @include('crf.otherVisits')

@endif



