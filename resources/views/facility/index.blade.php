<x-app-layout>
    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}"><span class="material-icons small">home</span></a>
                </li>

                <li class="breadcrumb-item active d-flex align-items-center" aria-current="page"> <span>
                        {{ 'Facility Management' }}</span>
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

                <a href="{{ route('facility.create') }}" class="btn btn-primary shadow rounded-5">+ New Facility</a>

            </div>
            <div class="col-sm-12">
                <div class="card shadow rounded-5">
                    <div class="card-body">
                        @if (count($facilities) > 0)
                            <div class="table-responsive">
                                <table class="table">
                                    <tr>
                                        <th>Code</th>
                                        <th>Facility Name</th>
                                        <th>Address</th>
                                        <th>State</th>
                                        <th>Users</th>
                                        <th></th>
                                    </tr>
                                    @foreach ($facilities as $facility)
                                        <tr>
                                            <td>{{ str_pad($facility->id, 3, '0', STR_PAD_LEFT) }}</td>
                                            <td>{{ $facility->name }}</td>
                                            <td><span> {{ $facility->address_line_1 }}</span> <br>
                                                <span>{{ $facility->address_line_2 }}</span> <br>
                                                <span>{{ $facility->city . '-' . $facility->pin_code }}</span>
                                            </td>
                                            <td>{{ $facility->state }}</td>
                                            <td>{{ count($facility->users) }}</td>
                                            <td>
                                                 <div class="d-flex gap-2">
                                                  <a href="{{ route('facility.edit', ['facility' => $facility]) }}"
                                                       class="btn btn-info btn-sm rounded-5 text-white">Edit</a>
                                                   <form
                                                       action="{{ route('facility.destroy', ['facility' => $facility]) }}"
                                                       method="post">
                                                       @method('DELETE') @csrf
                                                       <button type="submit"
                                                           class="btn btn-danger btn-sm rounded-5">Delete</button>
   
                                                   </form>
                                                 </div>
                                               
                                            </td>
                                        </tr>
                                    @endforeach
                                </table>
                            </div>

                        @endif
                    </div>

                    @if ($facilities->hasPages())
                        <div class="card-footer">

                            {{ $caseReportForm->links() }}


                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>


</x-app-layout>
