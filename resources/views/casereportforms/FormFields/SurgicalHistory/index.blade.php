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

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Surgical History') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    @if (empty($preoperative->surgical_history))
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
                                <div class="fw-bold me-3"> Has Surgical History ?</div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="surgical_history" id="sh_yes"
                                        value="1">
                                    <label class="form-check-label" for="sh_yes">Yes</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="surgical_history" id="sh_no"
                                        value="0">
                                    <label class="form-check-label" for="sh_no">No</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    @else
        @if ($preoperative->medical_history)
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="card shadow-sm rounded-5">
                            <div class="card-header">
                                <h4>Add Surgical History</h4>
                            </div>
                            <div class="card-body">
                                <form
                                    action="{{ route('crf.preoperative.surgicalhistory.store', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                    method="POST">
                                    @csrf

                                    <div class="row mb-3">
                                        <div class="col-sm-3 col-form-label">
                                            <label class="form-label">Diagnosis</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <input type="text" class="form-control" name="sh_diagnosis"
                                                    placeholder="" value="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3 col-form-label"> <label class="form-label">Date of
                                                Procedure</label>
                                        </div>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <input type="text" class="form-control calendar" placeholder=""
                                                    name="sh_date" value="">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-sm-3 col-form-label"> <label
                                                class="form-label">Treatment</label></div>
                                        <div class="col-sm-9">
                                            <div class="input-group">
                                                <textarea id="" cols="30" rows="3" class="form-control" name="sh_treatment" placeholder="" value=""
                                                    spellcheck="false"></textarea>

                                            </div>
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
                        @if (count($preoperative->surgicalhistories) > 0)
                            <div class="card shadow">
                                <div class="card-body">
                                    <table class="table">
                                        <tr>
                                            <th>Diagnosis</th>
                                            <th>Date of Procedure</th>
                                            <th>Treatment</th>
                                            <th></th>
                                        </tr>

                                        @foreach ($preoperative->surgicalhistories as $surgicalhistory)
                                            <tr>
                                                <td>{{ $surgicalhistory->diagnosis }}</td>
                                                <td class="">
                                                    {{ $surgicalhistory->sh_date->format('d.m.Y') }}</td>
                                                <td>{{ $surgicalhistory->treatment }}</td>

                                                <form
                                                    action="{{ route('crf.preoperative.surgicalhistory.destroy', ['crf' => $crf, 'preoperative' => $preoperative, 'surgicalhistory' => $surgicalhistory]) }}"
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
