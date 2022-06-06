<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', ['crf' => $crf]) }} class="">
                        {{ $crf->subject_id }}</a> </li>
                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Pre Operative Data') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>


    @empty($preoperative)
    @else
        <div
            class="  @can('coordinator') container-fluid @endcan  @canany(['investigator', 'sudo', 'admin']) container @endcanany">
            <div class="row">
                @can('coordinator')
                    <div class="col-xl-2 col-md-3">
                        <div class="card shadow-sm rounded-5">
                            <div class="card-header">
                                Preoperative Fields
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <a href=" {{ route('crf.preoperative.physicalexamination.create', ['crf' => $crf, 'preoperative' => $preoperative]) }} "
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center  {{ !empty($preoperative->physicalexaminations) ? 'disabled' : '' }} ">
                                        Physical Examination <span
                                            class="material-icons  {{ !empty($preoperative->physicalexaminations) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->physicalexaminations) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.symptoms.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center {{ !empty($preoperative->symptoms) ? 'disabled' : '' }} ">
                                        Pre-op Symptoms
                                        <span
                                            class="material-icons {{ !empty($preoperative->symptoms) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->symptoms) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.medicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center 
                                        {{ count($preoperative->medicalhistories) > 0 ? 'disabled' : '' }} ">
                                        Medical History
                                        <span
                                            class="material-icons {{ count($preoperative->medicalhistories) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($preoperative->medicalhistories) > 0 ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.surgicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                        {{ count($preoperative->surgicalhistories) > 0 ? 'disabled' : '' }}  ">
                                        Surgical History
                                        <span
                                            class="material-icons {{ count($preoperative->surgicalhistories) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($preoperative->surgicalhistories) > 0 ? 'done' : 'priority_high' }}
                                        </span>

                                    </a>
                                    <a href="{{ route('crf.preoperative.familyhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Family History

                                        <span
                                            class="material-icons {{ count($preoperative->familyhistories) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($preoperative->surgicalhistories) > 0 ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>
                                    <a href="{{ route('crf.preoperative.personalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Personal History
                                        <span
                                            class="material-icons {{ !empty($preoperative->personalhistories) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->personalhistories) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.physicalactivity.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Physical Activity
                                        <span
                                            class="material-icons {{ count($preoperative->physicalactivities) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($preoperative->physicalactivities) > 0 ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.labinvestigation.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                        {{ !empty($preoperative->labinvestigations) ? 'disabled' : '' }}  ">
                                        Lab Investigation
                                        <span
                                            class="material-icons {{ !empty($preoperative->labinvestigations) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->labinvestigations) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.electrocardiogram.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                        {{ !empty($preoperative->electrocardiograms) ? 'disabled' : '' }} ">
                                        Electrocardiogram
                                        <span
                                            class="material-icons {{ !empty($preoperative->electrocardiograms) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->electrocardiograms) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.echocardiography.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Echocardiography
                                        <span
                                            class="material-icons {{ !empty($preoperative->echocardiographies) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($preoperative->echocardiographies) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.preoperative.medication.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Medications
                                        <span
                                            class="material-icons {{ count($preoperative->physicalactivities) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($preoperative->physicalactivities) > 0 ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                @endcan
                <div class=" @can('coordinator') col-xl-10 col-md-9 @endcan  @can('investigator') col-12 @endcan ">

                    <div class="d-flex justify-content-between mb-3">
                        <span class="fs-3"> Preoperative Data </span>
                        @can('coordinator')
                            @if (!$preoperative->is_submitted)
                                <form
                                    action="{{ route('crf.preoperative.update', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                    method="POST" style="margin:0">
                                    @method('PUT')
                                    @csrf
                                    <input type="hidden" value=1 name="isSubmitted">
                                    <button class="btn btn-primary" type="submit">Submit for Approval</button>
                                </form>
                            @endif
                        @endcan

                        @can('investigator')
                            <form
                                action="{{ route('crf.preoperative.update', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                method="POST" style="margin:0">
                                @method('PUT')
                                @csrf
                                <button type="submit" class="btn btn-danger rounded-5" value=1 name="disapprove">Disapprove</button>
                                <button type="submit" class="btn btn-success rounded-5" value=1 name="approve">Approve</button>
                            </form>
                        @endcan
                    </div>
                    {{-- Physical Examination --}}
                    <div class="card shadow-sm mb-3 rounded-5">
                        @empty($preoperative->physicalexaminations)
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Physical Examination

                                        <span class="fw-normal text-secondary fst-italic">No Physical Examination record
                                            submitted</span>
                                    </span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.preoperative.physicalexamination.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary btn-sm rouded-5"> Add Physical Examination </a>
                                    @endcan
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Physical Examination</span>
                                    @can('coordinator')
                                        <a href="{{ route('crf.preoperative.physicalexamination.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'physicalexamination' => $preoperative->physicalexaminations]) }}"
                                            class="btn btn-warning btn-sm rounded-5">Edit </a>
                                    @endcan
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Height</div>
                                    <div class="col-9">{{ $preoperative->physicalexaminations->height }} <span
                                            class="text-secondary small">cms</span></div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Weight</div>
                                    <div class="col-9">{{ $preoperative->physicalexaminations->weight }} <span
                                            class="text-secondary small">kgs</span></div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Body Surface Area (BSA)</div>
                                    <div class="col-9">

                                        {{ $preoperative->physicalexaminations->bsa }} <span class="text-secondary small">
                                            m<sup>2</sup></span></div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Heart Rate</div>
                                    <div class="col-9">{{ $preoperative->physicalexaminations->heart_rate }}
                                        <span class="text-secondary small">bpm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-12 fw-bold">Blood Pressure</div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Systolic BP</div>
                                    <div class="col-9">{{ $preoperative->physicalexaminations->systolic_bp }}
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Diastolic BP</div>
                                    <div class="col-9">
                                        {{ $preoperative->physicalexaminations->diastolic_bp }}
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>
                            </div>
                        @endempty

                    </div>
                    {{-- /Physical Examination --}}

                    {{-- Preoperative Sympmtoms --}}
                    <div class="card shadow-sm mb-3 rounded-5">
                        @empty($preoperative->symptoms)
                            <div class="card-body ">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Pre-Operative Symptoms</span>
                                    <a href="{{ route('crf.preoperative.symptoms.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm rounded-5"> Add Pre Operative Symptoms </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header mb-3">
                                <div class=" d-flex justify-content-between  align-items-center">
                                    <span class="fs-6 fw-bold me-3">Pre-Operative Symptoms</span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.preoperative.symptoms.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'symptom' => $preoperative->symptoms]) }}"
                                            class="btn btn-warning btn-sm">Edit </a>
                                    @endcan
                                </div>
                            </div>
                            <div class="card-body">

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Symptoms</div>
                                    <div class="col-9 fw-bold">{{ $preoperative->symptoms->symptoms ? 'Yes' : 'No' }}
                                    </div>
                                </div>

                                @if ($preoperative->symptoms->symptoms)
                                    <div class="row mb-3 fw-normal">
                                        <div class="col-3 text-secondary">Angina on Exertion</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->angina ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->angina)
                                                    <div class="me-5">
                                                        <span class="text-secondary me-3">Class</span>
                                                        <span
                                                            class="fw-bold">{{ $preoperative->symptoms->angina_class }}</span>
                                                    </div>
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->angina_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->angina_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->angina_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Dyspnea on Exertion</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->dyspnea ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->dyspnea)
                                                    <div class="me-5">
                                                        <span class="text-secondary me-3">Class</span>
                                                        <span
                                                            class="fw-bold">{{ $preoperative->symptoms->dyspnea_class }}</span>
                                                    </div>
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->dyspnea_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->dyspnea_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->dyspnea_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>


                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Syncope</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->syncope ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->syncope)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->syncope_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->syncope_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->syncope_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Palpitation</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->palpitation ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->palpitation)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->palpitation_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->palpitation_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->palpitation_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Giddiness</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->giddiness ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->giddiness)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->giddiness_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->giddiness_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->giddiness_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Fever</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->fever ? 'Yes' : 'No' }} </div>
                                                @if ($preoperative->symptoms->fever)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->fever_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->fever_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->fever_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mb-3  fw-normal">
                                        <div class="col-3 text-secondary">Heart Failure Admission</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $preoperative->symptoms->heart_failure_admission ? 'Yes' : 'No' }}
                                                </div>
                                                @if ($preoperative->symptoms->heart_failure_admission)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $preoperative->symptoms->heart_failure_admission_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $preoperative->symptoms->heart_failure_admission_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $preoperative->symptoms->heart_failure_admission_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    @if ($preoperative->symptoms->others)
                                        <div class="row mb-3  fw-normal">
                                            <div class="col-3 text-secondary">Others</div>
                                            <div class="col-9">

                                                <div class="d-flex justify-content-start">
                                                    <div class="fw-bold me-5">
                                                        {{ $preoperative->symptoms->others_text }}</div>
                                                    @if ($preoperative->symptoms->others)
                                                        <div>
                                                            <span class="text-secondary me-3">Duration</span>
                                                            {{ $preoperative->symptoms->others_duration['days'] }}
                                                            <span class="text-secondary small me-3">days</span>

                                                            {{ $preoperative->symptoms->others_duration['months'] }}
                                                            <span class="text-secondary small me-3">month(s)</span>

                                                            {{ $preoperative->symptoms->others_duration['years'] }}
                                                            <span class="text-secondary small me-3">year(s)</span>

                                                        </div>
                                                    @endif
                                                </div>
                                            </div>
                                        </div>
                                    @endif
                            </div>
                        @else
                            <div class="card-body">
                                No Symptoms Found.
                            </div>
                            @endif
                        @endempty
                    </div>
                    {{-- /Preoperative Sympmtoms --}}


                    {{-- Medical History --}}
                    <section class="card shadow-sm rounded-5 mb-3">
                        @if ($preoperative->medical_history === 'null')
                            <div class="card-header">

                                <div class=" d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Pre-Operative Medical History</span>
                                    @if (!$preoperative->is_submitted)
                                        <a href="{{ route('crf.preoperative.medicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary rounded-5"> Add Medical History </a>
                                    @endif

                                </div>
                            </div>
                        @else
                            <div class="card-header">

                                <div class="d-flex justify-content-between"> <span class="fs-6 fw-bold me-3">
                                        Medical History</span>
                                    @if (!$preoperative->is_submitted)
                                        <a href="{{ route('crf.preoperative.medicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary rounded-5 btn-sm"> Add Medical History </a>
                                    @endif
                                </div>
                            </div>
                            @if ($preoperative->medical_history)
                                <div class="card-body">
                                    <div class="row mb-3">

                                        <div class="col-sm-12">
                                            <table class="table">
                                                <tr>
                                                    <th>Diagnosis</th>
                                                    <th>Duration</th>
                                                    <th>Treatment</th>
                                                </tr>
                                                @foreach ($preoperative->medicalhistories as $medicalhistory)
                                                    <tr>
                                                        <td> {{ $medicalhistory->diagnosis }}</td>
                                                        <td> {{ $medicalhistory->duration }}</td>
                                                        <td> {{ $medicalhistory->treatment }}</td>
                                                    </tr>
                                                @endforeach

                                            </table>
                                        </div>

                                    </div>
                                </div>
                            @else
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            No Previous Medical History Found.
                                        </div>
                                    </div>
                                </div>
                            @endif
                        @endif
                    </section>
                    {{-- /Medical History --}}


                    {{-- Surgery History --}}
                    <section class="card shadow-sm rounded-5 mb-3">
                        @if ($preoperative->surgical_history === 'null')
                            <div class="card-body">
                                <div class="row mb-3 ">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Surgical History</span>
                                        <a href="{{ route('crf.preoperative.surgicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary btn-sm"> Add Surgical History </a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="card-header">

                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Surgical History</span>
                                    <a href="{{ route('crf.preoperative.surgicalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Surgical History </a>
                                </div>

                            </div>
                            <div class="card-body">
                                @if (count($preoperative->surgicalhistories) > 0)
                                    <div class="row mb-3">

                                        <div class="col-sm-12">
                                            <table class="table">
                                                <tr>
                                                    <th>Diagnosis</th>
                                                    <th>Date of Procedure</th>
                                                    <th>Treatment</th>
                                                </tr>
                                                @foreach ($preoperative->surgicalhistories as $surgicalhistory)
                                                    <tr>
                                                        <td> {{ $surgicalhistory->diagnosis }}</td>
                                                        <td> {{ $surgicalhistory->sh_date->format('d.m.Y') }}</td>
                                                        <td> {{ $surgicalhistory->treatment }}</td>
                                                    </tr>
                                                @endforeach
                                            </table>
                                        </div>

                                    </div>
                                @else
                                    <div class="row mb-3">
                                        <div class="col-sm-12">
                                            No Previous Medical History Found.
                                        </div>
                                    </div>
                                @endif
                            </div>
                        @endif
                    </section>
                    {{-- /Surgery History --}}



                    {{-- Family History --}}
                    <section class="card shadow-sm rounded-5 mb-3">
                        @if ($preoperative->family_history === 'null')

                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Family History</span>
                                    <a href="{{ route('crf.preoperative.familyhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Family History </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Family History</span>
                                    <a href="{{ route('crf.preoperative.familyhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Family History </a>
                                </div>
                            </div>

                            <div class="card-body">
                                @if (count($preoperative->familyhistories) > 0)
                                    <div class="row mb-3">

                                        <div class="col-sm-12">
                                            <table class="table">
                                                <tr>
                                                    <th>Diagnosis</th>
                                                    <th>Relation</th>

                                                </tr>
                                                @foreach ($preoperative->familyhistories as $familyhistory)
                                                    <tr>
                                                        <td> {{ $familyhistory->diagnosis }}</td>

                                                        <td> {{ $familyhistory->relation }}</td>
                                                    </tr>
                                                @endforeach
                                            </table>
                                        </div>

                                    </div>
                                @else
                                    <div class="row mb-3">
                                        <div class="col-sm-12">
                                            No Previous Family History Found.
                                        </div>
                                    </div>
                                @endif
                            </div>

                        @endif
                    </section>
                    {{-- /Family History --}}


                    {{-- Personal History --}}
                    <section class="card shadow-sm rounded-5 mb-3">
                        @empty($preoperative->personalhistories)

                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Personal History</span>
                                    <a href="{{ route('crf.preoperative.personalhistory.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Personal History </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Personal History</span>
                                    <a href="{{ route('crf.preoperative.personalhistory.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'personalhistory' => $preoperative->personalhistories]) }}"
                                        class="btn btn-primary btn-sm"> Edit </a>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Smoking</div>
                                    <div class="col-9 fw-bold">
                                        <div class="mb-2">
                                            {{ $preoperative->personalhistories->smoking }}
                                        </div>


                                        @if ($preoperative->personalhistories->smoking !== 'Never')
                                            <div class="row fw-normal">
                                                <div class="col-sm-4">
                                                    <span class="text-secondary">No. of Cigrattes</span>
                                                    <span>{{ $preoperative->personalhistories->cigarettes }}</span>
                                                </div>

                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Smoking Since</span>
                                                    <span>{{ $preoperative->personalhistories->smoking_since }}</span>
                                                </div>


                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Stopped Since</span>
                                                    <span>{{ $preoperative->personalhistories->smoking_stopped }}</span>
                                                </div>


                                            </div>
                                        @endif

                                    </div>
                                </div>
                                <hr>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Alcohol</div>
                                    <div class="col-9 fw-bold">
                                        <div class="mb-2">
                                            {{ $preoperative->personalhistories->alchohol }}
                                        </div>


                                        @if ($preoperative->personalhistories->alchohol !== 'Never')
                                            <div class="row fw-normal">
                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Quantity</span>
                                                    <span>{{ $preoperative->personalhistories->cigarettes }}</span>
                                                    <span class="text-muted">ml</span>
                                                </div>

                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Smoking Since</span>
                                                    <span>{{ $preoperative->personalhistories->alchohol_since }}</span>
                                                </div>


                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Stopped Since</span>
                                                    <span>{{ $preoperative->personalhistories->alchohol_stopped }}</span>
                                                </div>


                                            </div>
                                        @endif

                                    </div>
                                </div>
                                <hr>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Tobacco</div>
                                    <div class="col-9 fw-bold">
                                        <div class="mb-2">
                                            {{ $preoperative->personalhistories->tobacco }}
                                        </div>

                                        @if ($preoperative->personalhistories->tobacco !== 'Never')
                                            <div class="row fw-normal">
                                                <div class="col-sm-12">
                                                    <span class="text-secondary">Type</span>
                                                    <span>{{ $preoperative->personalhistories->tobacco_type }}</span>

                                                </div>
                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Quantity</span>
                                                    <span>{{ $preoperative->personalhistories->tobacco_quantity }}</span>

                                                </div>

                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Consuming Since</span>
                                                    <span>{{ $preoperative->personalhistories->tobacco_since }}</span>
                                                </div>


                                                <div class="col-sm-4">
                                                    <span class="text-secondary">Stopped Since</span>
                                                    <span>{{ $preoperative->personalhistories->tobacco_stopped }}</span>
                                                </div>


                                            </div>
                                        @endif

                                    </div>
                                </div>

                            </div>

                        @endempty

                    </section>
                    {{-- /Personal History --}}

                    {{-- Physical Activity --}}
                    <div class="card shadow-sm rounded-5 mb-3">
                        @if ($preoperative->physical_activity === 'null')
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Physical Activity</span>
                                    <a href="{{ route('crf.preoperative.physicalactivity.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Physical Activity </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Physical Activity</span>
                                    <a href="{{ route('crf.preoperative.physicalactivity.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Physical Activity </a>
                                </div>
                            </div>
                            <div class="card-body">
                                @if (count($preoperative->physicalactivities) > 0)
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tr>
                                                <th>Activity Type</th>
                                                <th>Duration</th>
                                            </tr>

                                            @foreach ($preoperative->physicalactivities as $physicalactivity)
                                                <tr>
                                                    <td>{{ $physicalactivity->activity_type }}</td>
                                                    <td>{{ $physicalactivity->duration }} <span
                                                            class="text-muted">mins</span> </td>
                                                </tr>
                                            @endforeach

                                        </table>
                                    </div>
                                @else
                                    No physical activities recorded
                                @endif
                            </div>
                        @endif
                    </div>

                    {{-- /Physical Activity --}}

                    {{-- Lab Investigation --}}
                    <section class="card shadow-sm rounded-5 mb-3">

                        @empty($preoperative->labinvestigations)
                            <div class="card-body ">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Lab Investigation</span>
                                    <a href="{{ route('crf.preoperative.labinvestigation.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Lab Investigation </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class=" d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Lab Investigation</span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.preoperative.labinvestigation.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'labinvestigation' => $preoperative->labinvestigations]) }}"
                                            class="btn btn-warning btn-sm">Edit </a>
                                    @endcan
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $preoperative->labinvestigations->li_date->format('d/m/Y') }}
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Red Blood Cell (RBC)

                                    </div>
                                    <div class="col-3">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->rbc }}</span>
                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">White Blood Cell (WBC)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->wbc }}</span>

                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Hemoglobin
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->hemoglobin }}</span>
                                        <span class="text-secondary small me-3">g/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Hematocrit
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->hematocrit }}</span>
                                        <span class="text-secondary small me-3">%</span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Platelet Count

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->platelet }}</span>
                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Blood Urea

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->blood_urea }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Serum Creatinine

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->serum_creatinine }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Alanine Transaminase (ALT)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->alt }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Aspartate Transaminase (AST)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->ast }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Alkaline Phosphatase (ALP)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->alp }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Albumin
                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->albumin }}</span>
                                        <span class="text-secondary small me-3">gm/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Total Protein

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->total_protein }}</span>
                                        <span class="text-secondary small me-3">gm/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Bilirubin
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->labinvestigations->bilirubin }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Prothrombin Time(PT) INR

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->labinvestigations->pt_inr }}</span>
                                        <span class="text-secondary small me-3">seconds</span>
                                    </div>
                                </div>
                            </div>



                        @endempty
                    </section>
                    {{-- /Lab Investigation --}}





                    <div class="card shadow-sm rounded-5 mb-3">

                        @empty($preoperative->electrocardiograms)
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Electrocardiogram</span>
                                        <a href="{{ route('crf.preoperative.electrocardiogram.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary btn-sm"> Add Electrocardiograms </a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="row ">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Electrocardiogram</span>

                                        @can('coordinator')
                                            <a href="{{ route('crf.preoperative.electrocardiogram.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'electrocardiogram' => $preoperative->electrocardiograms]) }}"
                                                class="btn btn-warning btn-sm">Edit </a>
                                        @endcan
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $preoperative->electrocardiograms->ecg_date->format('d/M/Y') }}
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Rhythm

                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $preoperative->electrocardiograms->rhythm }}</span>
                                        @if ($preoperative->electrocardiograms->rhythm === 'Others')
                                            <span class="text-secondary">
                                                {{ $preoperative->electrocardiograms->rhythm_others }}
                                            </span>
                                        @endif

                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Rate</div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $preoperative->electrocardiograms->rate }}</span>

                                        <span class="text-secondary small me-3">bpm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVH</div>
                                    <div class="col-9 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->electrocardiograms->lvh ? 'Yes' : 'No' }}</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LV Strain
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->electrocardiograms->lvs ? 'Yes' : 'No' }}</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3 text-secondary">PR Interval</div>
                                    <div class="col-sm-3">
                                        <span
                                            class="fw-bold">{{ $preoperative->electrocardiograms->printerval }}</span>
                                        <span class="text-secondary small me-3">ms</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3 text-secondary">QRS Duration</div>
                                    <div class="col-sm-3 ">
                                        <span
                                            class="fw-bold">{{ $preoperative->electrocardiograms->qrsduration }}</span>
                                        <span class="text-secondary small me-3">ms</span>
                                    </div>
                                </div>
                            </div>
                        @endempty
                    </div>

                    <div class="card shadow-sm rounded-5 mb-3">
                        @empty($preoperative->echocardiographies)
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Echocardiography</span>
                                        <a href="{{ route('crf.preoperative.echocardiography.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary btn-sm"> Add Echocardiography </a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="row ">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Pre-Operative Echocardiography</span>

                                        @can('coordinator')
                                            <a href="{{ route('crf.preoperative.echocardiography.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'echocardiography' => $preoperative->echocardiographies]) }}"
                                                class="btn btn-warning btn-sm">Edit </a>
                                        @endcan
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $preoperative->echocardiographies->echodate->format('d/M/Y') }}
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Peak Velocity</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->peak_velocity }}</span>
                                        <span class="text-secondary small">m/s</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Velocity Time Integral (Aortic Valve)
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->velocity_time_integral }}</span>
                                        <span class="text-secondary small">cm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Peak Gradient
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->peak_gradient }}</span>
                                        <span class="text-secondary small">cm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Mean Gradient

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->mean_gradient }}</span>
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Heart Rate</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->heart_rate }}</span>
                                        <span class="text-secondary small">bpm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Stroke Volume
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->stroke_volume }}</span>
                                        <span class="text-secondary small">ml</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">DVI

                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $preoperative->echocardiographies->dvi }}</span>

                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Effective Orifice Area (EOA)
                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $preoperative->echocardiographies->eoa }}</span>
                                        <span class="text-secondary small">cm<sup>2</sup>/m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Acceleration Time

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->acceleration_time }}</span>
                                        <span class="text-secondary small">millisec
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVOT VTI


                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->lvot_vti }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LV Mass</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->lv_mass }}</span>
                                        <span class="text-secondary small">g
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">IVS Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->ivs_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">PW Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->pw_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVID-End Systole

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->lvidend_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVID-End Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->lvidend_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Ejection Fraction
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $preoperative->echocardiographies->ejection_fraction }}</span>
                                        <span class="text-secondary small">%
                                        </span>
                                    </div>
                                </div>

                            </div>

                        @endempty
                    </div>

                    <div class="card shadow-sm rounded-5 mb-3">
                        @empty($preoperative->hasMedications)
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Medications</span>
                                        <a href="{{ route('crf.preoperative.medication.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                            class="btn btn-primary btn-sm"> Add Medications </a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="card-header">


                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Medications</span>
                                    <a href="{{ route('crf.preoperative.medication.index', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                        class="btn btn-primary btn-sm"> All Medications </a>
                                </div>

                            </div>
                            <div class="card-body">
                                @if (count($preoperative->medications) > 0)
                                    <div class="table-responsive">
                                        <table class="table">
                                            <tr>
                                                <th>Medication</th>
                                                <th>Indication</th>
                                                <th>Start Date</th>
                                                <th>Status</th>

                                                <th>Stop Date</th>
                                                <th>Dosage</th>
                                                <th>Reason for Discontinuation</th>

                                            </tr>

                                            @foreach ($preoperative->medications as $medication)
                                                <tr>
                                                    <td>{{ $medication->medication }}</td>

                                                    <td>{{ $medication->indication }}</td>
                                                    <td>{{ $medication->start_date ? $medication->start_date->format('d.m.Y') : '' }}
                                                    </td>
                                                    <td>{{ $medication->status }}</td>
                                                    <td>{{ $medication->stop_date ? $medication->stop_date->format('d.m.Y') : '' }}
                                                    </td>
                                                    <td>{{ $medication->dosage }}</td>
                                                    <td>{{ $medication->reason }}</td>
                                                </tr>
                                            @endforeach
                                        </table>
                                    @else
                                        No medications were given.
                                @endif
                            </div>
                        @endempty
                    </div>
                </div>
            </div>
        </div>





    @endempty

</x-app-layout>
