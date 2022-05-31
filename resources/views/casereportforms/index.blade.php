<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
               <li class="breadcrumb-item">
                   <a href="{{ route('dashboard') }}"><span class="material-icons small">home</span></a>
               </li>
                <li class="breadcrumb-item active d-flex align-items-center" aria-current="page"> <span> {{ 'Case Report Forms' }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    

    @if (session('message'))
        <x-toast-notification>
            <x-slot name="type"> {{ session('type') }}</x-slot>{{ session('message') }}

        </x-toast-notification>
    @endif
    <div class="container">
        <div class="row">
            <div class="col-sm-12 mb-3 d-flex justify-content-between">
                @can('coordinator')
                    <a href="{{ route('crf.create') }}" class="btn btn-primary shadow">+ New Case Report Form</a>
                @endcan
            </div>

            <div class="col-sm-12">

                <div class="card shadow">
                    <div class="card-body">



                        <div class="row g-3 fw-bold pb-2 mb-2">

                            <div class="col-sm-1">#</div>
                            <div class="col-sm-2">Created On</div>
                            <div class="col-sm-1">Subject ID</div>
                            <div class="col-sm-2">Facility</div>
                            <div class="col-sm-1">UHID</div>
                            <div class="col-sm-3">Status</div>

                            <div class="col-sm-2 text-right">Actions</div>
                        </div>

                        @if ($caseReportForm->total() > 0)
                            @foreach ($caseReportForm as $index => $crf)
                                <div class="row  border-top pt-2 mt-2">

                                    <div class="col-sm-1">{{ $index + 1 }}</div>
                                    <div class="col-sm-2">{{ $crf->created_at }}</div>
                                    <div class="col-sm-1">{{ $crf->subject_id }}</div>
                                    <div class="col-sm-1">{{ $crf->facility->name }}</div>
                                    <div class="col-sm-1">{{ $crf->uhid }}</div>
                                    <div class="col-sm-4">


                                        <a href=" {{ route('crf.preoperative.index', ['crf' => $crf]) }}"
                                            class="badge text-decoration-none rounded-pill fw-normal {{ $crf->preoperatives->form_status ? ($crf->preoperatives->visit_status ? 'bg-success' : 'bg-warning text-dark ') : 'disabled text-white bg-secondary' }}">
                                            Pre Operative</a>

                                        <a
                                            class="badge text-decoration-none rounded-pill fw-normal {{ $crf->intraoperatives->form_status ? ($crf->intraoperatives->visit_status ? 'bg-success' : 'bg-warning text-dark ') : 'disabled text-white bg-secondary' }}">Intra
                                            Operative</a>
                                        <a href=" {{ route('crf.postoperative.index', ['crf' => $crf]) }}"
                                            class="badge text-decoration-none rounded-pill fw-normal nav-link  {{ $crf->postoperatives->form_status ? ($crf->postoperatives->visit_status ? 'bg-success' : 'bg-warning text-dark ') : 'disabled text-white bg-secondary' }}">Post
                                            Operative</a>



                                    </div>

                                    <div class="col-sm-2 gap-1"> <a href="{{ route('crf.edit', $crf->subject_id) }}"
                                            class="btn btn-sm btn-secondary">Edit</a>
                                        <a href="{{ route('crf.show', $crf->subject_id) }}" type="button"
                                            class="btn btn-sm btn-info">View</a>

                                        <a href="{{ route('crf.destroy', $crf->subject_id) }}" type="button"
                                            class="btn btn-sm btn-danger">Delete</a>
                                    </div>
                                </div>
                            @endforeach
                        @endif

                    </div>

                    @if ($caseReportForm->hasPages())
                        <div class="card-footer">

                            {{ $caseReportForm->links() }}


                        </div>
                    @endif
                </div>


            </div>







        </div>
    </div>

</x-app-layout>
