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

                <li class="breadcrumb-item active" aria-current="page"> <span>
                        {{ __($storeParameters['operative'] . ' Symptoms') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>
    <form action="{{ route($storeUri, $storeParameters) }}" method="POST">
        @method('PUT')
        @csrf
        <div class="container">
            <div class="card shadow my-3">
                <div class="card-header">
                    <h4>{{ $storeParameters['operative'] }} Symptoms
                    </h4>
                </div>

                <div class="card-body">
                    <div class="row  mb-3 align-items-baseline border-bottom">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="symptoms">
                                {{ $storeParameters['operative'] }} Symptoms
                            </label>
                        </div>
                        <div class="col-sm-10">
                            <input class="form-check-input" type="checkbox" name="symptoms" id="symptoms"
                                {{ $symptom->symptoms ? 'checked' : '' }}>
                        </div>
                    </div>

                    <div class="row mb-3 align-items-baseline border-bottom pb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-check-label" for="angina">
                                Angina on Exertion
                            </label>
                        </div>
                        <div class="col-sm-1">
                            <input class="form-check-input" type="checkbox" id="angina" name="angina"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->angina ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-3 fade {{ $symptom->angina ? 'show' : 'hide' }}" id="angina_class">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-3 col-form-label">Class</label></div>
                                <div class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassOne" value="I"
                                            {{ $symptom->angina_class === 'I' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="anginaOnExertionClassOne">I</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassTwo" value="II"
                                            {{ $symptom->angina_class === 'II' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="anginaOnExertionClassTwo">II</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassThree" value="III"
                                            {{ $symptom->angina_class === 'III' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="anginaOnExertionClassThree">III</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="angina_class"
                                            id="anginaOnExertionClassFour" value="IV"
                                            {{ $symptom->angina_class === 'IV' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="anginaOnExertionClassFour">IV</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->angina ? 'show' : 'hide' }}" id="angina_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="{{ $symptom->angina_duration['days'] }}"
                                                    name="angina_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="angina_duration[months]"
                                                    value="{{ $symptom->angina_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="angina_duration[years]"
                                                    value="{{ $symptom->angina_duration['years'] }}">
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
                            <input class="form-check-input" type="checkbox" id="dyspnea" name="dyspnea"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->dyspnea ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-3 fade {{ $symptom->dyspnea ? 'show' : 'hide' }}" id="dyspnea_class">
                            <div class="row d-flex align-items-center">
                                <div class="col-sm-3 col-form-label">Class</div>
                                <div class="col-sm-9">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassOne" value="I"
                                            {{ $symptom->dyspnea_class === 'I' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="dyspneaOnExertionClassOne">I</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassTwo" value="II"
                                            {{ $symptom->dyspnea_class === 'II' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="dyspneaOnExertionClassTwo">II</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassThree" value="III"
                                            {{ $symptom->dyspnea_class === 'III' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="dyspneaOnExertionClassThree">III</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="dyspnea_class"
                                            id="dyspneaOnExertionClassFour" value="IV"
                                            {{ $symptom->dyspnea_class === 'IV' ? 'checked' : '' }}>
                                        <label class="form-check-label" for="dyspneaOnExertionClassFour">IV</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->dyspnea ? 'show' : 'hide' }}" id="dyspnea_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="" name="dyspnea_duration[days]"
                                                    value="{{ $symptom->dyspnea_duration['days'] }}">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="dyspnea_duration[months]"
                                                    value="{{ $symptom->dyspnea_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="dyspnea_duration[years]"
                                                    value="{{ $symptom->dyspnea_duration['years'] }}">
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
                            <input class="form-check-input" type="checkbox" id="syncope" name="syncope"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->syncope ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->syncope ? 'show' : 'hide' }}" id="syncope_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="syncope_duration[days]"
                                                    value="{{ $symptom->syncope_duration['days'] }}">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="syncope_duration[months]"
                                                    value="{{ $symptom->syncope_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="syncope_duration[years]"
                                                    value="{{ $symptom->syncope_duration['years'] }}">
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
                            <input class="form-check-input" type="checkbox" id="palpitation" name="palpitation"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->palpitation ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->palpitation ? 'show' : 'hide' }}" id="palpitation_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="{{ $symptom->palpitation_duration['days'] }}"
                                                    name="palpitation_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="palpitation_duration[months]"
                                                    value="{{ $symptom->palpitation_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="palpitation_duration[years]"
                                                    value="{{ $symptom->palpitation_duration['years'] }}">
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
                            <input class="form-check-input" type="checkbox" id="giddiness" name="giddiness"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->giddiness ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-6 fade  {{ $symptom->giddiness ? 'show' : 'hide' }}" id="giddiness_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="{{ $symptom->giddiness_duration['days'] }}"
                                                    name="giddiness_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="giddiness_duration[months]"
                                                    value="{{ $symptom->giddiness_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="giddiness_duration[years]"
                                                    value="{{ $symptom->giddiness_duration['years'] }}">
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
                            <input class="form-check-input" type="checkbox" id="fever" name="fever"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->fever ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->fever ? 'show' : 'hide' }}" id="fever_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    value="{{ $symptom->fever_duration['days'] }}"
                                                    name="fever_duration[days]">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="fever_duration[months]"
                                                    value="{{ $symptom->fever_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="fever_duration[years]"
                                                    value="{{ $symptom->fever_duration['years'] }}">
                                                <span class="input-group-text text-secondary input-units">years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    @if ($storeParameters['operative'] === 'Preoperative')
                        <div class="row mb-3 align-items-baseline border-bottom pb-3">
                            <div class="col-sm-2 col-form-label">
                                <label class="form-check-label" for="heart_failure_admission">Heart Failure
                                    Admission</label>
                            </div>

                            <div class="col-sm-1">
                                <input class="form-check-input" type="checkbox" id="heart_failure_admission"
                                    name="heart_failure_admission" {{ $symptom->symptoms ? '' : 'disabled' }}
                                    {{ $symptom->heart_failure_admission ? 'checked' : '' }}>
                            </div>

                            <div class="col-sm-6 fade {{ $symptom->heart_failure_admission ? 'show' : 'hide' }}"
                                id="heart_failure_admission_duration">
                                <div class="row align-items-baseline">
                                    <div class="col-sm-2 col-form-label">Duration</div>
                                    <div class="col-sm-10">
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="input-group">
                                                    <input type="number" class="form-control with-units" placeholder=""
                                                        value="{{ $symptom->heart_failure_admission_duration['days'] }}"
                                                        name="heart_failure_admission_duration[days]">
                                                    <span
                                                        class="input-group-text text-secondary input-units">days</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-group">
                                                    <input type="number" class="form-control with-units" placeholder=""
                                                        name="heart_failure_admission_duration[months]"
                                                        value="{{ $symptom->heart_failure_admission_duration['months'] }}">
                                                    <span
                                                        class="input-group-text text-secondary input-units">months</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="input-group">
                                                    <input type="number" class="form-control with-units" placeholder=""
                                                        name="heart_failure_admission_duration[years]"
                                                        value="{{ $symptom->heart_failure_admission_duration['years'] }}">
                                                    <span
                                                        class="input-group-text text-secondary input-units">years</span>
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
                            <input class="form-check-input" type="checkbox" id="others" name="others"
                                {{ $symptom->symptoms ? '' : 'disabled' }}
                                {{ $symptom->others ? 'checked' : '' }}>
                        </div>

                        <div class="col-sm-3 fade {{ $symptom->others ? 'show' : 'hide' }}" id="others_text">
                            <input type="text" class="form-control" placeholder="" name="others_text"
                                value="{{ $symptom->others_text }}">
                        </div>

                        <div class="col-sm-6 fade {{ $symptom->others ? 'show' : 'hide' }}" id="others_duration">
                            <div class="row align-items-baseline">
                                <div class="col-sm-2 col-form-label">Duration</div>
                                <div class="col-sm-10">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="others_duration[days]"
                                                    value="{{ $symptom->others_duration['days'] }}">
                                                <span class="input-group-text text-secondary input-units">days</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="others_duration[months]"
                                                    value="{{ $symptom->others_duration['months'] }}">
                                                <span class="input-group-text text-secondary input-units">months</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="input-group">
                                                <input type="number" class="form-control with-units" placeholder=""
                                                    name="others_duration[years]"
                                                    value="{{ $symptom->others_duration['years'] }}">
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
                    <button type="submit" class="btn btn-primary">Update</button>
                </div>

            </div>


        </div>
    </form>


</x-app-layout>
