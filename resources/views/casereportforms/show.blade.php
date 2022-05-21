<x-app-layout>


    <x-slot name="header">


        <ul class="nav align-items-center visit-navbar" id="pills-visits-tab" role="tablist">
            <li class="nav-item me-3">Case Report Form </li>

            <li class="nav-item ">
                <a class="nav-link rounded" id="pills-button-1" data-bs-toggle="pill" data-bs-target="#pills-visits-1"
                    role="presentation" aria-controls="pills-visits-1">
                    Visit 1</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded" id="pills-button-2" data-bs-toggle="pill" data-bs-target="#pills-visits-2"
                    role="presentation" aria-controls="pills-visits-2">
                    Visit 2</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded disabled" id="pills-button-disabled" data-bs-toggle="pill"
                    role="presentation">
                    Visit 3</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded disabled" id="pills-button-disabled" data-bs-toggle="pill"
                    role="presentation">
                    Visit 4</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded disabled" id="pills-button-disabled" data-bs-toggle="pill"
                    role="presentation">
                    Visit 5</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded disabled" id="pills-button-disabled" data-bs-toggle="pill"
                    role="presentation">
                    Visit 6</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded disabled" id="pills-button-disabled" data-bs-toggle="pill"
                    role="presentation">
                    Visit 7</a>
            </li>

            <li class="nav-item ">
                <a class="nav-link rounded" id="pills-button-disabled" data-bs-toggle="pill" role="presentation">
                    Unscheduled Visit</a>
            </li>

        </ul>

    </x-slot>


    <div class="row g-3">

        <div class="col-12">

            <div class="tab-content mb-3" id="pills-visits-tabContent" data-bs-target="#pills-visits-tab">
                <div class="tab-pane fade show active " id="pills-visits-1" role="tabpanel">
                    @include('casereportforms.firstVisit')
                </div>

                <div class="tab-pane fade " id="pills-visits-2" role="tabpanel">
                    @include('casereportforms.otherVisits')
                </div>


                {{-- @foreach ($casert->visits as $visit)
                    @if ($visit->visitform_status)
                        @if ($visit->visit_status)
                            
                        @else
                            <div class="tab-pane fade {{ $visit->visitform_status ? '' : '' }}"
                                id="pills-visits-{{ $visit->id }}" role="tabpanel" aria-selected="true">
                                @include('crf.visits')
                            </div>
                        @endif
                    @endif
                @endforeach --}}

            </div>
        </div>
    </div>



</x-app-layout>
