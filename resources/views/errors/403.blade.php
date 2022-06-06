@if (auth()->check())
    <x-app-layout>
        <div class="container">
            You are not authorized to perform this action. Please contact your system administrator
        </div>
       
    </x-app-layout>
@else
    <x-guest-layout>
        You are not authorized to perform this action.

        

    </x-guest-layout>
@endif    
