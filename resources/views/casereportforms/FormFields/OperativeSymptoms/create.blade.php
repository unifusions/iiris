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

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __( $storeParameters['operative'] . ' Symptoms') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>
    <form action="{{ route($storeUri, $storeParameters) }}" method="POST">
        @csrf
        <div class="container">
            <div class="card shadow my-3">
                <div class="card-header">
                    <h4>{{  $storeParameters['operative'] }} Symptoms
                    </h4>
                </div>

                <div class="card-body">
                    <div class="row  mb-3 align-items-baseline border-bottom">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="symptoms">
                              {{  $storeParameters['operative'] }} Symptoms
                            </label>
                        </div>
                        <div class="col-sm-10">
                            <input class="form-check-input" type="checkbox" name="symptoms"
                                id="symptoms">
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="angina">
                                Angina on Exertion
                            </label>
                        </div>
                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="angina" name="angina" disabled>
                        </div>

                        <div class="col-sm-3 fade hide" id="angina_class">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-3 col-form-label">Class</label></div>
                                <div class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassOne" value="I">
                                        <label class="form-check-label" for="anginaOnExertionClassOne">I</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassTwo" value="II">
                                        <label class="form-check-label" for="anginaOnExertionClassTwo">II</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassThree" value="III">
                                        <label class="form-check-label" for="anginaOnExertionClassThree">III</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassFour" value="IV">
                                        <label class="form-check-label" for="anginaOnExertionClassFour">IV</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 fade hide" id="angina_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="angina_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="angina_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="angina_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="dyspnea">Dyspnea on Exertion</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="dyspnea"
                                name="dyspnea" disabled>
                        </div>

                        <div class="col-sm-3 fade hide"  id="dyspnea_class">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-3 col-form-label">Class</div>
                                <div class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassOne" value="I">
                                        <label class="form-check-label" for="dyspneaOnExertionClassOne">I</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassTwo" value="II">
                                        <label class="form-check-label" for="dyspneaOnExertionClassTwo">II</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassThree" value="III">
                                        <label class="form-check-label" for="dyspneaOnExertionClassThree">III</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassFour" value="IV">
                                        <label class="form-check-label" for="dyspneaOnExertionClassFour">IV</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 fade hide"  id="dyspnea_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="dyspnea_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="dyspnea_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="dyspnea_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="syncope">Syncope</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="syncope" name="syncope" disabled>
                        </div>

                        <div class="col-sm-6 fade hide" id="syncope_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="syncope_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="syncope_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="syncope_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="palpitation">Palpitation</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="palpitation"
                                name="palpitation" disabled> 
                        </div>

                        <div class="col-sm-6 fade hide" id="palpitation_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="palpitation_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="palpitation_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="palpitation_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="giddiness">Giddiness</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="giddiness" name="giddiness" disabled>
                        </div>

                        <div class="col-sm-6 fade hide" id="giddiness_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="giddiness_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="giddiness_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="giddiness_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="fever">Fever</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="fever" name="fever" disabled>
                        </div>

                        <div class="col-sm-6 fade hide" id="fever_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="fever_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="fever_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="fever_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @if($storeParameters['operative'] === 'Preoperative')

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="heart_failure_admission">Heart Failure
                                Admission</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox" id="heart_failure_admission"
                                name="heart_failure_admission" disabled>
                        </div>

                        <div class="col-sm-6 fade hide" id="heart_failure_admission_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="heart_failure_admission_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="heart_failure_admission_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="heart_failure_admission_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endif

                    <div class="row align-items-baseline">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="others">Others</label>
                        </div>

                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox"  id="others" name="others" disabled>
                        </div>

                        <div class="col-sm-3 fade hide" id="others_text">
                            <input type="text" class="form-control" placeholder="" name="others_text" value="">
                        </div>

                        <div class="col-sm-6 fade hide" id = "others_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="others_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="others_duration[months]" value="">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="others_duration[years]" value="">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>

            </div>


        </div>
    </form>


</x-app-layout>
