<x-app-layout>
    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', $storeParameters['crf']) }}
                        class=""> {{ $crf->subject_id }}
                    </a> </li>

                <li class="breadcrumb-item"><a
                        href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                        class="">
                        {{ $breadcrumb['name'] }} </a> </li>

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Medications') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    @if (empty($preoperative->hasMedications))
        <div class="container">
            <form
                action="{{ route('crf.preoperative.update', ['crf' => $storeParameters['crf'], 'preoperative' => $storeParameters['preoperative']]) }}"
                method="POST">
                @method('PUT')
                @csrf
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <div class="fw-bold me-3"> Has Medications ?</div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="hasMedications" id="m_yes"
                                        value="1">
                                    <label class="form-check-label" for="m_yes">Yes</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="hasMedications" id="m_no"
                                        value="0">
                                    <label class="form-check-label" for="m_no">No</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    @else
        @if ($preoperative->hasMedications)
        <div class="container-fluid">
            <div class="row g-3">
                <div class="col-sm-4">
                    <div class="card shadow-sm rounded-5">
                        <div class="card-header">
                            <h4>Add Medications</h4>
                        </div>
                        <div class="card-body">
                            <form
                                action="{{ route('crf.preoperative.medication.store', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                method="POST">
                                @csrf

                                <div class="row mb-3">
                                    <div class="col-sm-3 col-form-label">
                                        <label class="form-label">Medication</label>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="medication_name"
                                                placeholder="" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3 col-form-label">
                                        <label class="form-label">Indication</label>
                                    </div>
                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" name="indication" placeholder=""
                                                value="">
                                        </div>
                                    </div>
                                </div>



                                <div class="row mb-3">
                                    <div class="col-sm-3 col-form-label">
                                        <label class="form-label">Status</label>
                                    </div>

                                    <div class="col-sm-9">
                                        <select class="form-select" name="status" id="medication_status">
                                            <option selected></option>
                                            <option value="ongoing">Ongoing</option>
                                            <option value="discontinued">Discontinued</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3" id="stop_date_wrapper">
                                    <div class="col-sm-3 col-form-label">
                                        <label id="date_label" class="form-label">Start Date</label>
                                    </div>

                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="medication_date"
                                                name="medication_stop_date" placeholder="" autocomplete="off">
                                            <input type="hidden" class="form-control" id="mstart_date"
                                                name="mstart_date" placeholder="" value="">
                                            <input type="hidden" class="form-control" id="mstop_date"
                                                name="mstop_date" placeholder="" value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3" id="stop_date_wrapper">
                                    <div class="col-sm-3 col-form-label">
                                        <label class="form-label">Dosage</label>
                                    </div>

                                    <div class="col-sm-9">
                                        <div class="input-group">
                                            <input type="text" class="form-control " name="dosage" placeholder=""
                                                value="">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3" id="discontinuationWrapper" style="display: none">
                                    <div class="col-sm-3 col-form-label">
                                        <label class="form-label">Reason for discontinuation</label>
                                    </div>

                                    <div class="col-sm-9">
                                        <textarea id="" cols="30" rows="3" class="form-control" name="reason" placeholder="" value=""></textarea>
                                    </div>
                                </div>



                                <div class="row">
                                    <div class="col-sm-9 col-offset-3">
                                        <button class="btn btn-primary">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-sm-8">
                    
                    @if (count($preoperative->medications) > 0)
                        <div class="card  shadow-sm rounded-5">
                            <div class="card-body">
                                <table class="table">
                                    <tr>
                                        <th>Medication</th>
                                        <th>Indication</th>
                                        <th>Start Date</th>
                                        <th>Status</th>
                                        
                                        <th>Stop Date</th>
                                        <th>Dosage</th>
                                        <th>Reason for Discontinuation</th>

                                        <th></th>
                                    </tr>

                                    @foreach ($preoperative->medications as $medication)
                                        <tr>
                                            <td>{{ $medication->medication }}</td>

                                            <td>{{ $medication->indication }}</td>
                                            <td>{{ $medication->start_date? $medication->start_date->format('d.m.Y') : '' }}</td>
                                            <td>{{ $medication->status }}</td>
                                            <td>{{ $medication->stop_date? $medication->stop_date->format('d.m.Y') : '' }}</td>
                                            <td>{{ $medication->dosage }}</td>
                                            <td>{{ $medication->reason }}</td>
                                            <form
                                                action="{{ route('crf.preoperative.medication.destroy', ['crf' => $crf, 'preoperative' => $preoperative, 'medication' => $medication]) }}"
                                                method="POST">
                                                @method('DELETE')
                                                @csrf
                                                <td>
                                                    <button class="btn btn-danger btn-sm">Delete</button>
                                                </td>
                                            </form>


                                        </tr>
                                    @endforeach

                                </table>



                            </div>

                            <div class="card-footer">
                                <a href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                                    class="btn btn-primary"> Back</a>
                            </div>




                        </div>
                    @endif
                </div>


            </div>
        </div>
        @else
            false
        @endif
    @endif

</x-app-layout>
