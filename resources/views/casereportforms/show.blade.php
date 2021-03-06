<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}"><span class="material-icons small">home</span></a>
                </li>

                <li class="breadcrumb-item">
                    <a href="{{ route('crf.index') }}">Case Report Form</a>
                </li>

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ $crf->subject_id }}</span></li>

            </ol>
        </nav>
    </x-slot>
    @if (session('message'))
    <x-toast-notification>               {{ session('message') }}
    </x-toast-notification>
@endif

    <div class="container">

        <div class="row">
            <div class="col-sm-12 mb-3 d-flex justify-content-even align-items-center">

                <div class="fs-3  fw-normal me-3">Case Report Form |  {{ $crf->subject_id }}</div>

                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-light bg-white shadow-sm rounded-5  d-flex align-items-center py-2">
                        <span class="material-icons me-3 text-primary">file_download</span>
                        <span class="text-uppercase small fw-bold">Export </span>
                    </button>

                    <button class="btn btn-sm btn-light bg-white shadow-sm rounded-5  d-flex align-items-center py-2">
                        <span class="material-icons me-3 text-primary">print </span>
                        <span class="text-uppercase small fw-bold">Print </span>
                    </button>
                    
                </div>

              

            </div>
        </div>

        <div class="card shadow-sm rounded-5">

            <div class="card-body">

                <div class="row">
                    <div class="col-md-4">
                        <div class="row">
                            <div class="col-md-4 text-secondary">Protocol Number</div>
                            <div class="col-md-8">2021-04</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Facility</div>
                            <div class="col-md-8">{{ $crf->facility->name }}</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Created On</div>
                            <div class="col-md-8">{{ $crf->created_at }}</div>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Subject ID</div>
                            <div class="col-md-8"> {{ $crf->subject_id }}</div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">UHID</div>
                            <div class="col-md-8"> {{ $crf->uhid }}</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Date of Consent</div>
                            <div class="col-md-8"> {{ $crf->date_of_consent }}</div>
                        </div>

                    </div>
                    <div class="col-md-4">
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Date of Birth</div>
                            <div class="col-md-8"> {{ $crf->date_of_birth }}</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Gender</div>
                            <div class="col-md-8"> {{ $crf->gender }}</div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-4 text-secondary">Age</div>
                            <div class="col-md-8"> {{ $crf->age }}</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        
        <div class="card shadow-sm mt-3 rounded-5">
            <div class="card-body">
                <ul class="nav align-items-center justify-content-between">

                    
                    <li class="nav-item ">
                        <a class="nav-link rounded {{ $crf->preoperatives->form_status ? '' : 'disabled' }}"
                            href="{{ route('crf.preoperative.index', ['crf' => $crf->subject_id]) }}">
                            Pre Operative Data</a>

                    </li>

                    <li class="nav-item ">
                        <a class="nav-link rounded {{ $crf->intraoperatives->form_status ? '' : 'disabled' }}"
                            href="{{ route('crf.intraoperative.index', ['crf' => $crf->subject_id]) }}">
                            Intra Operative Data</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link rounded {{ $crf->postoperatives->form_status ? '' : 'disabled' }}"
                            href="{{ route('crf.postoperative.index', ['crf' => $crf->subject_id]) }}">
                            Post Operative Data</a>
                    </li>


                    @foreach ($crf->scheduledvisits as $visit)
                        <li class="nav-item ">
                            <a class="nav-link rounded {{ $visit->form_status ? '' : 'disabled' }}" href="">
                                Visit {!! $visit->visit_no !!}</a>
                        </li>
                    @endforeach
                    <li class="nav-item ">
                        <a href="" class="nav-link rounded-5">
                            Unscheduled Visits
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </div>




</x-app-layout>
