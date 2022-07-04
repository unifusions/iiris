<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', ['crf' => $storeParameters['crf']]) }}
                        class=""> {{ $crf->subject_id }}
                    </a> </li>

                <li class="breadcrumb-item"><a
                        href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                        class="">
                        {{ $breadcrumb['name'] }} </a> </li>

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Echocardiography') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>


    <div class="container">
        <form action="{{ route($storeUri, $storeParameters) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card  shadow mt-3">
                <div class="card-header">
                    <h4>{{ __('Echocardiography') }}</h4>
                </div>
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label"><label class="form-label">Date</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control calendar" placeholder="" value=""
                                    name="echodate">

                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Peak Velocity</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="peak_velocity" placeholder=""
                                    value="">
                                <span class="input-group-text text-secondary input-units">mmHg</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Velocity Time Integral <br />(Aortic Valve)</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="velocity_time_integral"
                                    placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Peak Gradient</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="peak_gradient" placeholder=""
                                    value="">
                                <span class="input-group-text text-secondary input-units">mmHg</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Mean Gradient</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="mean_gradient" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">mmHg</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Heart Rate</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="heart_rate" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">bpm</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Stroke Volume</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="stroke_volume" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">ml</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">DVI</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control" name="dvi" placeholder="" value="">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Effective Orifice Area (EOA)</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="eoa" placeholder="" value="">
                                <span
                                    class="input-group-text text-secondary input-units">cm<sup>2</sup>/m<sup>2</sup></span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Acceleration Time</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="acceleration_time" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">millisec</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">LVOT VTI</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="lvot_vti" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>

                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">LV Mass</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="lv_mass" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">g</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label mt-3">IVS Diastole</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="ivs_diastole" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>

                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label mt-3">PW Diastole</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="pw_diastole" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">LVID-End Systole</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="lvidend_systole" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label mt-3">LVID-End Diastole</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="lvidend_diastole" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">cm</span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Ejection Fraction</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="number" class="form-control with-units" name="ejection_fraction" placeholder="" value="">
                                <span class="input-group-text text-secondary input-units">% </span>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3">
<div class="col-sm-2 col-form-label">
    <label for="" class="form-label">Upload Files</label>
</div>

                    
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="file" class="form-control" name="echofiles" multiple>
                        </div>
                    </div>

                </div>
                <div class="card-footer">
                    <button class="btn btn-primary" type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>


</x-app-layout>
