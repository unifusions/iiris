<x-app-layout>
    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}"><svg xmlns="http://www.w3.org/2000/svg" height=20 width=20 fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg></a>
                </li>
                <li class="breadcrumb-item active d-flex align-items-center" aria-current="page"> <span>
                        {{ 'Case Report Forms' }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>




    <div class="container mb-3">

        <div class="row">
            <div class="col-sm-12 mb-3 d-flex justify-content-between align-items-center">

                <div class="fs-3  fw-normal ">Case Report Forms</div>

                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-light bg-white shadow-sm rounded-5  d-flex align-items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 class="me-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        <span class="text-uppercase small fw-bold">Export </span>
                    </button>

                    <button class="btn btn-sm btn-light bg-white shadow-sm rounded-5  d-flex align-items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 class="me-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                        <span class="text-uppercase small fw-bold">Print </span>
                    </button>
                    @can('coordinator')
                        <a class="btn btn-sm btn-primary shadow-sm rounded-5 d-flex align-items-center py-2"
                            href="{{ route('crf.create') }}">
                            <svg xmlns="http://www.w3.org/2000/svg" width=24 height=24 class="me-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>

                           
                            <span class="text-uppercase small fw-bold">New Case Report Form</span>
                        </a>
                    @endcan
                </div>



            </div>

            <div class="col-sm-12">
              

              
                <div class="card shadow-sm rounded-5">
                    <div class="card-body">
                       
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Subject ID</th>
                                        <th>Facility</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>

                                </thead>

                                <tbody class=" ">
                                    @if ($caseReportForm->total() > 0)
                                        @foreach ($caseReportForm as $index => $crf)
                                            <tr class="align-middle">
                                                <td>{{ $crf->subject_id }}</td>
                                                <td>{{ $crf->facility->name }}</td>
                                                <td>{{ $crf->age }}</td>
                                                <td>{{ $crf->gender }}</td>
                                                <td>
                                                    <div class="d-flex justify-content-even gap-2">
                                                        <a href=" {{ route('crf.preoperative.index', ['crf' => $crf]) }}"
                                                            class="badge text-decoration-none rounded-pill fw-bold p-2 {{ $crf->preoperatives->form_status ? ($crf->preoperatives->visit_status ? 'bg-success' : 'bg-warning ') : 'bg-secondary' }}">
                                                            Pre Operative</a>

                                                        <a href="{{ route('crf.intraoperative.index', ['crf' => $crf]) }}"
                                                            class="badge text-decoration-none rounded-pill fw-bold p-2 {{ $crf->intraoperatives->form_status ? ($crf->intraoperatives->visit_status ? 'bg-success' : 'bg-warning') : 'bg-secondary' }}">Intra
                                                            Operative</a>
                                                        <a href=" {{ route('crf.postoperative.index', ['crf' => $crf]) }}"
                                                            class="badge text-decoration-none rounded-pill fw-bold p-2  {{ $crf->postoperatives->form_status ? ($crf->postoperatives->visit_status ? 'bg-success' : 'bg-warning') : ' bg-secondary' }}">Post
                                                            Operative</a>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div class="d-flex justify-content-even gap-2">

                                                        <div class="me-3"> <a
                                                                href="{{ route('crf.show', $crf->subject_id) }}"
                                                                class="fw-bold text-decoration-none text-primary">
                                                              View


                                                            </a></div>
                                                        <div class="me-3">
                                                            <a href="{{ route('crf.edit', $crf->subject_id) }}"
                                                                class="fw-bold text-decoration-none text-primary">

                        
                                                               Edit
                                                            </a>
                                                        </div>
                                                        <div class="">
                                                            @can('admin')
                                                                <form
                                                                    action="{{ route('crf.destroy', $crf->subject_id) }}"
                                                                    method="POST" style="margin: 0">
                                                                    @method('DELETE') @csrf
                                                                    <button type="submit" type="submit"
                                                                        class="">
                                                                        <span
                                                                            class="material-icons text-danger small fs-icon me-2">delete
                                                                        </span>
                                                                        <span class="text-uppercase small fw-bold">Delete</span>

                                                                    </button>
                                                                </form>
                                                            @endcan
                                                        </div>




                                                    </div>

                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>

                        </div>

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
