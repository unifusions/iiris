<x-app-layout>


    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', $storeParameters['crf']) }}
                        class=""> {{ $crf->subject_id }}
                    </a> </li>

                <li class="breadcrumb-item"><a href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                        class="">
                        {{ $breadcrumb['name'] }} </a> </li>

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Electrocardiogram') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    <div class="container">
        <form action="{{ route($storeUri, $storeParameters) }}" method="POST">
          @method('PUT')
            @csrf
            <div class="card shadow mt-3">
                <div class="card-header">
                    <h4>Electrocardiogram</h4>
                </div>
                <div class="card-body">

                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2 col-form-label">
                            <label for="ecg_date" class="form-label">Date</label>
                        </div>
                        <div class="col-sm-4">
                            <div class="input-group">
                                <input type="text" class="form-control calendar" placeholder="" name="ecg_date"
                                    value="{{ $electrocardiogram->ecg_date }}">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Rhythm</label>
                        </div>
                        <div class="col-sm-10">
                            <div class="input-group align-items-baseline">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="rhythm" id="Sinus" value="Sinus" {{ $electrocardiogram->rhythm === 'Sinus' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="Sinus">Sinus</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="rhythm" id="AtrialFibrilation"
                                        value="Atrial Fibrilation"   {{ $electrocardiogram->rhythm === 'Atrial Fibrilation' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="AtrialFibrilation">Atrial Fibrilation</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="rhythm" id="AtrialFlutter"
                                        value="Atrial Flutter" {{ $electrocardiogram->rhythm === 'Atrial Flutter' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="AtrialFlutter">Atrial Flutter</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="rhythm" id="rhythmothers"
                                        value="Others" {{ $electrocardiogram->rhythm === 'Others' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="rhythmothers">Others</label>
                                </div>

                                <div class="form-check-inline fade hide ms-3" id="rhythmothers_text">
                                    <input type="text" class="form-control" placeholder="" name="rhythm_others"
                                        value="{{ $electrocardiogram->rhythm_others }}">
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Rate</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" placeholder="" name="rate"
                                    value="{{ $electrocardiogram->rate }}">
                                <span class="input-group-text text-secondary input-units">bpm</span>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">LVH</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="lvh" id="lvhyes" value="1" {{ $electrocardiogram->lvh ? 'checked' : '' }}>
                                    <label class="form-check-label" for="lvhyes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="lvh" id="lvhno" value="0" {{ $electrocardiogram->lvh ? '' : 'checked' }}>
                                    <label class="form-check-label" for="lvhno">No</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2"><label class="form-label">LV Strain</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="lvs" id="lvsyes" value="1" {{ $electrocardiogram->lvs ? 'checked' : '' }}>
                                    <label class="form-check-label" for="lvsyes">Yes</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="lvs" id="lvsno" value="0" {{ $electrocardiogram->lvs ? '' : 'checked' }}>
                                    <label class="form-check-label" for="lvsno">No</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2"> <label class="form-label">PR Interval</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" placeholder="" name="printerval" value="{{ $electrocardiogram->printerval }}">
                                <span class="input-group-text text-secondary input-units">ms</span>
                            </div>

                        </div>
                    </div>
                    <div class="row mb-3 align-items-baseline">
                        <div class="col-sm-2"><label for="" class="form-label">QRS Duration</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" placeholder="" name="qrsduration" value="{{ $electrocardiogram->qrsduration  }}">
                                <span class="input-group-text text-secondary input-units">ms</span>
                            </div>
                        </div>
                    </div>





                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>



</x-app-layout>
