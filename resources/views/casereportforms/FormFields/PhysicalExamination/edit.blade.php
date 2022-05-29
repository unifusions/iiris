<x-app-layout>


    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', $storeParameters['crf']) }}
                        class=""> {{ $crf->subject_id }}
                    </a> </li>

                <li class="breadcrumb-item"><a href=" {{ route($breadcrumb['link'], $storeParameters) }}"
                        class="">
                        {{ $breadcrumb['name'] }} </a> </li>

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Physical Examination : Edit') }}</span>
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
                    <h4>Physical Examination</h4>
                </div>
                <div class="card-body">
                    <div class="row  mb-3 align-items-baseline">
                        <label class="col-sm-2 col-form-label">Height</label>
                        <div class="col-sm-6">
                            <div class="input-group has-validation">
                                <input id="height" name="height" type="number" value= "{{ $physicalexamination->height }}"
                                    class="form-control with-units 
                                  @if ($errors->has('height')) is-invalid @endif"
                                    placeholder="" >
                                <span class="input-group-text input-units text-secondary">cms</span>

                            </div>
                        </div>
                        <div class="col-sm-3">
                            @error('height')
                                <div class="text-danger">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                    </div>

                    <div class="row  mb-3 align-items-baseline">
                        <label class="col-sm-2 col-form-label">Weight</label>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input id="weight" type="number" name="weight"  value="{{ $physicalexamination->weight }}"
                                    class="form-control 
                                                    @if ($errors->has('weight')) is-invalid @endif with-units"
                                    placeholder="">
                                <span class="input-group-text input-units text-secondary">kgs</span>
                            </div>

                        </div>
                        <div class="col-sm-4"> @error('weight')
                                <div class="text-danger">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline">
                        <label class="col-sm-2 col-form-label">Body Surface Area</label>

                        <div class="col-sm-6">

                            <div class="input-group">
                                <input id="bsa" type="number"  class="form-control" name="bsa" value="{{ $physicalexamination->bsa }}" readonly>
                                <span class="input-group-text input-units text-secondary">m<sup>2</sup></span>
                            </div>
                        </div>
                    </div>


                    <div class="row mb-3 align-items-baseline">
                        <label class="col-sm-2 col-form-label">Heart Rate</label>
                        <div class="col-sm-6">

                            <div class="input-group">
                                <input type="number" name="heart_rate"
                                    class="form-control
                                  @if ($errors->has('heart_rate')) is-invalid @endif with-units"
                                    placeholder="" value="{{ $physicalexamination->heart_rate }}">
                                <span class="input-group-text input-units text-secondary">bpm</span>
                            </div>

                        </div>
                        <div class="col-sm-4">
                            @error('heart_rate')
                                <div class="text-danger">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                    </div>

                    <hr>

                    <div class="row mb-3">

                        <div class="col-sm-12">
                            <h5>Blood Pressure</h5>
                        </div>

                    </div>

                    <div class="row mb-3 align-items-baseline">

                        <label class="col-sm-2 col-form-label">Systolic BP</label>

                        <div class="col-sm-6">

                            <div class="input-group">
                                <input type="number" name="systolic_bp"
                                    class="
                                  form-control with-units 
                                  @if ($errors->has('systolic_bp')) is-invalid @endif"
                                    placeholder="" value="{{ $physicalexamination->systolic_bp }}">
                                <span class="input-group-text input-units text-secondary">mmHg</span>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            @error('systolic_bp')
                                <div class=" text-danger">
                                    {{ $message }}
                                </div>
                            @enderror
                        </div>
                    </div>
                    <div class="row mb-3 align-items-baseline">
                        <label class="col-sm-2 col-form-label">Diastolic BP</label>
                        <div class="col-sm-6">

                            <div class="input-group">
                                <input type="number" name="diastolic_bp" class="form-control with-units
                                  @if ($errors->has('diastolic_bp')) is-invalid @endif
                                  "
                                    placeholder="" value="{{ $physicalexamination->diastolic_bp }}">
                                <span class="input-group-text input-units text-secondary">mmHg</span>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            @error('diastolic_bp')
                                <div class=" invalid-feedback">
                                    {{ $message }}
                                </div>
                            @enderror
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
