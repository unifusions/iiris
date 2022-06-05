

@if(auth()->check())
<x-app-layout>
    Invalid Data Request
</x-app-layout>

@else
<x-guest-layout>
    404
</x-guest-layout>

@endif