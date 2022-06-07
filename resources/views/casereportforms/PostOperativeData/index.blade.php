<x-app-layout>
    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', ['crf' => $crf]) }} class="">
                        {{ $crf->subject_id }}</a> </li>
                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Post Operative Data') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>


    @empty($postoperative)
    @else
        <div
            class="  @can('coordinator') container-fluid @endcan  @canany(['investigator', 'sudo', 'admin']) container @endcanany ">
            <div class="row">
                @can('coordinator')
                    <div class="col-xl-2 col-md-3">
                        <div class="card shadow-sm rounded-5">
                            <div class="card-header">
                                Postoperative Fields
                            </div>
                            <div class="card-body">
                                <div class="list-group">
                                    <a href=" {{ route('crf.postoperative.physicalexamination.create', ['crf' => $crf, 'postoperative' => $postoperative]) }} "
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center  {{ !empty($postoperative->physicalexaminations) ? 'disabled' : '' }} ">
                                        Physical Examination <span
                                            class="material-icons  {{ !empty($postoperative->physicalexaminations) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->physicalexaminations) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.symptoms.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center {{ !empty($postoperative->symptoms) ? 'disabled' : '' }} ">
                                        Pre-op Symptoms
                                        <span
                                            class="material-icons {{ !empty($postoperative->symptoms) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->symptoms) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.labinvestigation.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                          {{ !empty($postoperative->labinvestigations) ? 'disabled' : '' }}  ">
                                        Lab Investigation
                                        <span
                                            class="material-icons {{ !empty($postoperative->labinvestigations) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->labinvestigations) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.electrocardiogram.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                          {{ !empty($postoperative->electrocardiograms) ? 'disabled' : '' }} ">
                                        Electrocardiogram
                                        <span
                                            class="material-icons {{ !empty($postoperative->electrocardiograms) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->electrocardiograms) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.echocardiography.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Echocardiography
                                        <span
                                            class="material-icons {{ !empty($postoperative->echocardiographies) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->echocardiographies) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.safetyparameter.index', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center
                                          {{ !empty($postoperative->safetyparameters) ? 'disabled' : '' }}  ">
                                        Safety Parameters
                                        <span
                                            class="material-icons {{ !empty($postoperative->safetyparameters) ? 'text-success' : 'text-warning' }}">
                                            {{ !empty($postoperative->safetyparameters) ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>

                                    <a href="{{ route('crf.postoperative.medication.index', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Medications
                                        <span
                                            class="material-icons {{ count($postoperative->medications) > 0 ? 'text-success' : 'text-warning' }}">
                                            {{ count($postoperative->medications) > 0 ? 'done' : 'priority_high' }}
                                        </span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                @endcan
                <div class=" @can('coordinator') col-xl-10 col-md-9 @endcan  @can('investigator') col-12 @endcan ">

                    <div class="d-flex justify-content-between mb-3">
                        <span class="fs-3">Postoperative Data </span>
                        @can('coordinator')
                            @if (!$postoperative->is_submitted)
                                <form
                                    action="{{ route('crf.postoperative.update', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
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
                                action="{{ route('crf.postoperative.update', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                method="POST" style="margin:0">
                                @method('PUT')
                                @csrf
                                <button type="submit" class="btn btn-danger rounded-5" value=1
                                    name="disapprove">Disapprove</button>
                                <button type="submit" class="btn btn-success rounded-5" value=1 name="approve">Approve</button>
                            </form>
                        @endcan
                    </div>
                    {{-- Physical Examination --}}
                    <div class="card shadow-sm mb-3 rounded-5">
                        @empty($postoperative->physicalexaminations)
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Physical Examination

                                        <span class="fw-normal text-secondary fst-italic">No Physical Examination record
                                            submitted</span>
                                    </span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.physicalexamination.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                            class="btn btn-primary btn-sm rouded-5"> Add Physical Examination </a>
                                    @endcan
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Physical Examination</span>
                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.physicalexamination.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'physicalexamination' => $postoperative->physicalexaminations]) }}"
                                            class="btn btn-warning btn-sm rounded-5">Edit </a>
                                    @endcan
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Height</div>
                                    <div class="col-9">{{ $postoperative->physicalexaminations->height }} <span
                                            class="text-secondary small">cms</span></div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Weight</div>
                                    <div class="col-9">{{ $postoperative->physicalexaminations->weight }} <span
                                            class="text-secondary small">kgs</span></div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Body Surface Area (BSA)</div>
                                    <div class="col-9">

                                        {{ $postoperative->physicalexaminations->bsa }} <span class="text-secondary small">
                                            m<sup>2</sup></span></div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Heart Rate</div>
                                    <div class="col-9">{{ $postoperative->physicalexaminations->heart_rate }}
                                        <span class="text-secondary small">bpm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-12 fw-bold">Blood Pressure</div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Systolic BP</div>
                                    <div class="col-9">{{ $postoperative->physicalexaminations->systolic_bp }}
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>

                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Diastolic BP</div>
                                    <div class="col-9">
                                        {{ $postoperative->physicalexaminations->diastolic_bp }}
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>
                            </div>
                        @endempty

                    </div>
                    {{-- /Physical Examination --}}

                    {{-- postoperative Sympmtoms --}}


                    <div class="card shadow-sm mb-3 rounded-5">
                        @empty($postoperative->symptoms)
                            <div class="card-body ">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Post-Operative Symptoms</span>
                                    <a href="{{ route('crf.postoperative.symptoms.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="btn btn-primary btn-sm rounded-5"> Add Post Operative Symptoms </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header mb-3">
                                <div class=" d-flex justify-content-between  align-items-center">
                                    <span class="fs-6 fw-bold me-3">Post-Operative Symptoms</span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.symptoms.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'symptom' => $postoperative->symptoms]) }}"
                                            class="btn btn-warning btn-sm">Edit </a>
                                    @endcan
                                </div>
                            </div>
                            <div class="card-body">

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Symptoms</div>
                                    <div class="col-9 fw-bold">{{ $postoperative->symptoms->symptoms ? 'Yes' : 'No' }}
                                    </div>
                                </div>

                                @if ($postoperative->symptoms->symptoms)
                                    <div class="row mb-3 fw-normal">
                                        <div class="col-3 text-secondary">Angina on Exertion</div>
                                        <div class="col-9">

                                            <div class="d-flex justify-content-start">
                                                <div class="fw-bold me-5">
                                                    {{ $postoperative->symptoms->angina ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->angina)
                                                    <div class="me-5">
                                                        <span class="text-secondary me-3">Class</span>
                                                        <span
                                                            class="fw-bold">{{ $postoperative->symptoms->angina_class }}</span>
                                                    </div>
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->angina_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->angina_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->angina_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->dyspnea ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->dyspnea)
                                                    <div class="me-5">
                                                        <span class="text-secondary me-3">Class</span>
                                                        <span
                                                            class="fw-bold">{{ $postoperative->symptoms->dyspnea_class }}</span>
                                                    </div>
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->dyspnea_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->dyspnea_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->dyspnea_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->syncope ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->syncope)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->syncope_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->syncope_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->syncope_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->palpitation ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->palpitation)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->palpitation_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->palpitation_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->palpitation_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->giddiness ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->giddiness)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->giddiness_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->giddiness_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->giddiness_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->fever ? 'Yes' : 'No' }} </div>
                                                @if ($postoperative->symptoms->fever)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->fever_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->fever_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->fever_duration['years'] }}
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
                                                    {{ $postoperative->symptoms->heart_failure_admission ? 'Yes' : 'No' }}
                                                </div>
                                                @if ($postoperative->symptoms->heart_failure_admission)
                                                    <div>
                                                        <span class="text-secondary me-3">Duration</span>
                                                        {{ $postoperative->symptoms->heart_failure_admission_duration['days'] }}
                                                        <span class="text-secondary small me-3">days</span>

                                                        {{ $postoperative->symptoms->heart_failure_admission_duration['months'] }}
                                                        <span class="text-secondary small me-3">month(s)</span>

                                                        {{ $postoperative->symptoms->heart_failure_admission_duration['years'] }}
                                                        <span class="text-secondary small me-3">year(s)</span>

                                                    </div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>

                                    @if ($postoperative->symptoms->others)
                                        <div class="row mb-3  fw-normal">
                                            <div class="col-3 text-secondary">Others</div>
                                            <div class="col-9">

                                                <div class="d-flex justify-content-start">
                                                    <div class="fw-bold me-5">
                                                        {{ $postoperative->symptoms->others_text }}</div>
                                                    @if ($postoperative->symptoms->others)
                                                        <div>
                                                            <span class="text-secondary me-3">Duration</span>
                                                            {{ $postoperative->symptoms->others_duration['days'] }}
                                                            <span class="text-secondary small me-3">days</span>

                                                            {{ $postoperative->symptoms->others_duration['months'] }}
                                                            <span class="text-secondary small me-3">month(s)</span>

                                                            {{ $postoperative->symptoms->others_duration['years'] }}
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
                    {{-- /postoperative Sympmtoms --}}



                    {{-- Lab Investigation --}}
                    <section class="card shadow-sm rounded-5 mb-3">

                        @empty($postoperative->labinvestigations)
                            <div class="card-body ">
                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Lab Investigation</span>
                                    <a href="{{ route('crf.postoperative.labinvestigation.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="btn btn-primary btn-sm"> Add Lab Investigation </a>
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class=" d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Lab Investigation</span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.labinvestigation.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'labinvestigation' => $postoperative->labinvestigations]) }}"
                                            class="btn btn-warning btn-sm">Edit </a>
                                    @endcan
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $postoperative->labinvestigations->li_date->format('d/m/Y') }}
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Red Blood Cell (RBC)

                                    </div>
                                    <div class="col-3">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->rbc }}</span>
                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">White Blood Cell (WBC)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->wbc }}</span>

                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Hemoglobin
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->hemoglobin }}</span>
                                        <span class="text-secondary small me-3">g/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Hematocrit
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->hematocrit }}</span>
                                        <span class="text-secondary small me-3">%</span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Platelet Count

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->platelet }}</span>
                                        <span class="text-secondary small me-3">cells/cu.mm
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Blood Urea

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->blood_urea }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Serum Creatinine

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->serum_creatinine }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Alanine Transaminase (ALT)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->alt }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Aspartate Transaminase (AST)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->ast }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Alkaline Phosphatase (ALP)

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->alp }}</span>
                                        <span class="text-secondary small me-3">u/l
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Albumin
                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->albumin }}</span>
                                        <span class="text-secondary small me-3">gm/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Total Protein

                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->total_protein }}</span>
                                        <span class="text-secondary small me-3">gm/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Bilirubin
                                    </div>
                                    <div class="col-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->labinvestigations->bilirubin }}</span>
                                        <span class="text-secondary small me-3">mg/dl
                                        </span>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Prothrombin Time(PT) INR

                                    </div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->labinvestigations->pt_inr }}</span>
                                        <span class="text-secondary small me-3">seconds</span>
                                    </div>
                                </div>
                            </div>



                        @endempty
                    </section>
                    {{-- /Lab Investigation --}}

                    <div class="card shadow-sm rounded-5 mb-3">

                        @empty($postoperative->electrocardiograms)
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Electrocardiogram</span>
                                        <a href="{{ route('crf.postoperative.electrocardiogram.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
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
                                            <a href="{{ route('crf.postoperative.electrocardiogram.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'electrocardiogram' => $postoperative->electrocardiograms]) }}"
                                                class="btn btn-warning btn-sm">Edit </a>
                                        @endcan
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $postoperative->electrocardiograms->ecg_date->format('d/M/Y') }}
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Rhythm

                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $postoperative->electrocardiograms->rhythm }}</span>
                                        @if ($postoperative->electrocardiograms->rhythm === 'Others')
                                            <span class="text-secondary">
                                                {{ $postoperative->electrocardiograms->rhythm_others }}
                                            </span>
                                        @endif

                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Rate</div>
                                    <div class="col-3 ">
                                        <span class="fw-bold">{{ $postoperative->electrocardiograms->rate }}</span>

                                        <span class="text-secondary small me-3">bpm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVH</div>
                                    <div class="col-9 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->electrocardiograms->lvh ? 'Yes' : 'No' }}</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LV Strain
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->electrocardiograms->lvs ? 'Yes' : 'No' }}</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3 text-secondary">PR Interval</div>
                                    <div class="col-sm-3">
                                        <span
                                            class="fw-bold">{{ $postoperative->electrocardiograms->printerval }}</span>
                                        <span class="text-secondary small me-3">ms</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-sm-3 text-secondary">QRS Duration</div>
                                    <div class="col-sm-3 ">
                                        <span
                                            class="fw-bold">{{ $postoperative->electrocardiograms->qrsduration }}</span>
                                        <span class="text-secondary small me-3">ms</span>
                                    </div>
                                </div>
                            </div>
                        @endempty
                    </div>

                    <div class="card shadow-sm rounded-5 mb-3">
                        @empty($postoperative->echocardiographies)
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Echocardiography</span>
                                        <a href="{{ route('crf.postoperative.echocardiography.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
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
                                            <a href="{{ route('crf.postoperative.echocardiography.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'echocardiography' => $postoperative->echocardiographies]) }}"
                                                class="btn btn-warning btn-sm">Edit </a>
                                        @endcan
                                    </div>
                                </div>
                            </div>

                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Date</div>
                                    <div class="col-9 fw-bold">
                                        {{ $postoperative->echocardiographies->echodate->format('d/M/Y') }}
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Peak Velocity</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->peak_velocity }}</span>
                                        <span class="text-secondary small">m/s</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Velocity Time Integral (Aortic Valve)
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->velocity_time_integral }}</span>
                                        <span class="text-secondary small">cm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Peak Gradient
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->peak_gradient }}</span>
                                        <span class="text-secondary small">cm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Mean Gradient

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->mean_gradient }}</span>
                                        <span class="text-secondary small">mmHg</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Heart Rate</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->heart_rate }}</span>
                                        <span class="text-secondary small">bpm</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Stroke Volume
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->stroke_volume }}</span>
                                        <span class="text-secondary small">ml</span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">DVI

                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $postoperative->echocardiographies->dvi }}</span>

                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Effective Orifice Area (EOA)
                                    </div>
                                    <div class="col-9">
                                        <span class="fw-bold">{{ $postoperative->echocardiographies->eoa }}</span>
                                        <span class="text-secondary small">cm<sup>2</sup>/m<sup>2</sup></span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Acceleration Time

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->acceleration_time }}</span>
                                        <span class="text-secondary small">millisec
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVOT VTI


                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->lvot_vti }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LV Mass</div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->lv_mass }}</span>
                                        <span class="text-secondary small">g
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">IVS Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->ivs_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">PW Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->pw_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVID-End Systole

                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->lvidend_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">LVID-End Diastole
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->lvidend_diastole }}</span>
                                        <span class="text-secondary small">cm
                                        </span>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-3 text-secondary">Ejection Fraction
                                    </div>
                                    <div class="col-9">
                                        <span
                                            class="fw-bold">{{ $postoperative->echocardiographies->ejection_fraction }}</span>
                                        <span class="text-secondary small">%
                                        </span>
                                    </div>
                                </div>

                            </div>

                        @endempty
                    </div>
                    {{-- Safety Parameters --}}
                    {{-- Physical Examination --}}
                    <div class="card shadow-sm mb-3 rounded-5">
                        @empty($postoperative->safteyparameters)
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Safety Parameter

                                        <span class="fw-normal text-secondary fst-italic small">No Safetey Parameters record
                                            has been
                                            submitted</span>
                                    </span>

                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.safetyparameter.create', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                            class="btn btn-primary btn-sm rouded-5"> Add Safety Parameter </a>
                                    @endcan
                                </div>
                            </div>
                        @else
                            <div class="card-header">
                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="fs-6 fw-bold me-3">Safety Parameters</span>
                                    @can('coordinator')
                                        <a href="{{ route('crf.postoperative.safetyparameter.edit', ['crf' => $crf, 'postoperative' => $postoperative, 'safetyparameter' => $postoperative->safetyparameters]) }}"
                                            class="btn btn-warning btn-sm rounded-5">Edit </a>
                                    @endcan
                                </div>
                            </div>

                            <div class="card-body">


                                <div class="row mb-3 fw-normal">

                                    <div class="col-3 text-secondary ">Structural Value Deterioration
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->structural_value_deterioration }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Valve Thrombosis
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->valve_thrombosis }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">All Paravalvular Leak
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->all_paravalvular_leak }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Major Paravalvular Leak
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->major_paravalvular_leak }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Non-structural Valve Deterioration
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->non_structural_value_deterioration }}

                                    </div>

                                </div>
                                <hr>
                                <div class="row mb-3">
                                    <div class="col-sm-12 fw-bold">
                                        Clinical Safety Parameters
                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Thromboembolism</div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->thromboembolism }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">All Bleeding/Hemorrhage
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->all_bleeding }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Major Bleeding/Hemorrhage

                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->major_bleeding }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Endocarditis</div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->endocarditis }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">All-cause Mortality
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->all_mortality }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Valve-related Mortality
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->valve_mortality }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Valve-related reoperation
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->valve_related_operation }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Explant</div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->explant }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Haemolysis</div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->haemolysis }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Sudden Unexplained Death
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->sudden_unexplained_death }}

                                    </div>
                                </div>
                                <div class="row mb-3 fw-normal">
                                    <div class="col-3 text-secondary ">Cardiac Death
                                    </div>
                                    <div class="col-9">
                                        {{ $postoperative->safetyparameters->cardiac_death }}

                                    </div>
                                </div>
                            </div>
                        @endempty

                    </div>
                    {{-- /Physical Examination --}}
                    {{-- /Safety Parameters --}}
                    <div class="card shadow-sm rounded-5 mb-3">
                        @empty($postoperative->hasMedications)
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-between">
                                        <span class="fs-6 fw-bold me-3">Medications</span>
                                        <a href="{{ route('crf.postoperative.medication.index', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                            class="btn btn-primary btn-sm"> Add Medications </a>
                                    </div>
                                </div>
                            </div>
                        @else
                            <div class="card-header">


                                <div class="d-flex justify-content-between">
                                    <span class="fs-6 fw-bold me-3">Medications</span>
                                    <a href="{{ route('crf.postoperative.medication.index', ['crf' => $crf, 'postoperative' => $postoperative]) }}"
                                        class="btn btn-primary btn-sm"> All Medications </a>
                                </div>

                            </div>
                            <div class="card-body">
                                @if (count($postoperative->medications) > 0)
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

                                            @foreach ($postoperative->medications as $medication)
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
