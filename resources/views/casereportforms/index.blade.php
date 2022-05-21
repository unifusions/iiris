<x-app-layout>


    <x-slot name="header">
        <div class="d-flex justify-content-between align-items-center">

            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ __('Case Report Forms') }}
            </h2>

            {{-- @can('research-coordinator') --}}
                <a href="{{ route('crf.create') }}" class="btn btn-primary">+ New Case Report Form</a>
                {{-- @endcan --}}
        </div>
    </x-slot>

    <div class="row">
        <div class="col-12">

          
        </div>


    

    @can('research-coordinator')
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject ID</th>
                        <th>Facility</th>
                        <th>UHID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {{-- @if (count($caseReportForm) > 0) --}}
                        {{-- @foreach ($caseReportForm as $index => $crf)
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ $crf->subjectId }}</td>
                                <td>{{ $crf->facility->facilityName }}</td>
                                <td>{{ $crf->uhid }}</td>
                                <td>
                                    <h6> <span
                                            class="badge rounded-pill {{ $crf->status ? 'bg-success px-3' : 'bg-warning text-dark  px-4' }}">
                                            {{ $crf->status ? 'Approved' : 'Draft' }}
                                        </span></h6>
                                </td>
                                <td>

                                    <a href="{{ route('crf.edit', $crf->id) }}" class="btn btn-sm btn-secondary">Edit</a>
                                    <a href="{{ route('crf.show', $crf->id) }}" type="button"
                                        class="btn btn-sm btn-info">View</a>

                                    <a href="{{ route('crf.destroy', $crf->id) }}" type="button"
                                        class="btn btn-sm btn-danger">Delete</a>

                                </td>
                            </tr>
                        @endforeach
                    @else
                        No Records
                    @endif --}}

                    <tr>
                        <td> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    {{-- @elsecan('reseach-investigator') --}}
        reserach co-ordinator
    @else
    @endcan




    </div>
</x-app-layout>
