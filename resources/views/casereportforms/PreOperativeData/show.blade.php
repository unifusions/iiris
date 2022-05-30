<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', $crf) }} class="">
                        {{ $crf->subject_id }}</a> </li>
                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Pre Operative Data') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    @empty($preoperative)
    @else
        <div class="  @can('coordinator') container-fluid @endcan  @can('investigator') container @endcan">
            <div class="row">
                @can('coordinator')
                    <div class="col-3">
                        <div class="card shadow">
                            <div class="card-header">
                                Fields
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

                                    <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Medical History

                                        <span class="material-icons text-warning">priority_high</span>
                                    </a>

                                    <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Surgical History


                                        <span class="material-icons text-warning">priority_high</span>
                                    </a> <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Family History

                                        <span class="material-icons text-warning">priority_high</span>
                                    </a> <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Personal History

                                        <span class="material-icons text-warning">priority_high</span>
                                    </a> <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Physical Activity
                                        <span class="material-icons text-warning">priority_high</span>
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

                                    <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Electrocardiogram
                                        <span class="material-icons text-warning">priority_high</span>
                                    </a>

                                    <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Echocardiography
                                        <span class="material-icons text-warning">priority_high</span>
                                    </a>

                                    <a href="#"
                                        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        Medications
                                        <span class="material-icons text-warning">priority_high</span>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                @endcan
                <div class=" @can('coordinator') col-9 @endcan  @can('investigator') col-12 @endcan ">

                    <div class="card shadow mb-3">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <span class="fs-3"> Preoperative Data </span>
                                @can('investigator')
                                    <form action="">
                                        @csrf
                                        <button type="submit" class="btn btn-success">Approve</button>
                                    </form>
                                @endcan
                            </div>
                        </div>
                        <div class="card-body">
                            {{-- Physical Examination --}}
                            <section class="border-bottom mb-3">

                                @empty($preoperative->physicalexaminations)
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <span class="fs-6 fw-bold me-3">Physical Examination</span>
                                            <a href="{{ route('crf.preoperative.physicalexamination.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                                class="btn btn-primary btn-sm"> Add Physical Examination </a>
                                        </div>
                                    </div>
                                @else
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <span class="fs-6 fw-bold me-3">Physical Examination</span>
                                            @can('coordinator')
                                                <a href="{{ route('crf.preoperative.physicalexamination.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'physicalexamination' => $preoperative->physicalexaminations]) }}"
                                                    class="btn btn-warning btn-sm">Edit </a>
                                            @endcan
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Height</div>
                                        <div class="col-9">{{ $preoperative->physicalexaminations->height }} <span
                                                class="text-secondary small">cms</span></div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Weight</div>
                                        <div class="col-9">{{ $preoperative->physicalexaminations->weight }} <span
                                                class="text-secondary small">kgs</span></div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Body Surface Area (BSA)</div>
                                        <div class="col-9">{{ $preoperative->physicalexaminations->bsa }} <span
                                                class="text-secondary small"> m<sup>2</sup></span></div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Heart Rate</div>
                                        <div class="col-9">{{ $preoperative->physicalexaminations->heart_rate }}
                                            <span class="text-secondary small">bpm</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-12 fw-bold">Blood Pressure</div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Systolic BP</div>
                                        <div class="col-9">{{ $preoperative->physicalexaminations->systolic_bp }}
                                            <span class="text-secondary small">mmHg</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Diastolic BP</div>
                                        <div class="col-9">
                                            {{ $preoperative->physicalexaminations->diastolic_bp }}
                                            <span class="text-secondary small">mmHg</span>
                                        </div>
                                    </div>
                                @endempty
                            </section>

                            {{-- /Physical Examination --}}

                            {{-- Preoperative Sympmtoms --}}
                            <section class="border-bottom mb-3">

                                @empty($preoperative->symptoms)
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <span class="fs-6 fw-bold me-3">Pre-Operative Symptoms</span>
                                            <a href="{{ route('crf.preoperative.symptoms.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                                class="btn btn-primary btn-sm"> Add Pre Operative Symptoms </a>
                                        </div>
                                    </div>
                                @else
                                    <div class="row mb-3">
                                        <div class="col-12">
                                            <span class="fs-6 fw-bold me-3">Pre-Operative Symptoms</span>

                                            @can('coordinator')
                                                <a href="{{ route('crf.preoperative.symptoms.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'symptom' => $preoperative->symptoms]) }}"
                                                    class="btn btn-warning btn-sm">Edit </a>
                                            @endcan
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Symptoms</div>
                                        <div class="col-9 fw-bold">{{ $preoperative->symptoms->symptoms ? 'Yes' : 'No' }}
                                        </div>
                                    </div>

                                    @if ($preoperative->symptoms->symptoms)
                                        <div class="row mb-3">
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

                                        <div class="row mb-3">
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


                                        <div class="row mb-3">
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

                                        <div class="row mb-3">
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

                                        <div class="row mb-3">
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

                                        <div class="row mb-3">
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

                                        <div class="row mb-3">
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
                                            <div class="row mb-3">
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
                                    @endif
                                @endempty
                            </section>

                            {{-- /Preoperative Sympmtoms --}}


                            {{-- Lab Investigation --}}
                            <section class="border-bottom">

                                @empty($preoperative->labinvestigations)
                                    <div class="row mb-3">
                                        <div class="col-12 d-flex justify-content-between">
                                            <span class="fs-6 fw-bold me-3">Pre-Operative Lab Investigation</span>
                                            <a href="{{ route('crf.preoperative.labinvestigation.create', ['crf' => $crf, 'preoperative' => $preoperative]) }}"
                                                class="btn btn-primary btn-sm"> Add Lab Investigation </a>
                                        </div>
                                    </div>
                                @else
                                    <div class="row mb-3">
                                        <div class="col-12 d-flex justify-content-between">
                                            <span class="fs-6 fw-bold me-3">Pre-Operative Lab Investigation</span>

                                            @can('coordinator')
                                                <a href="{{ route('crf.preoperative.labinvestigation.edit', ['crf' => $crf, 'preoperative' => $preoperative, 'labinvestigation' => $preoperative->labinvestigations]) }}"
                                                    class="btn btn-warning btn-sm">Edit </a>
                                            @endcan
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Date</div>
                                        <div class="col-9 fw-bold">{{ $preoperative->labinvestigations->li_date->format('d/m/Y') }}
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
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->hemoglobin }}</span>
                                            <span class="text-secondary small me-3">g/dl
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Hematocrit
                                        </div>
                                        <div class="col-3 ">
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->hematocrit }}</span>
                                            <span class="text-secondary small me-3">%</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Platelet Count

                                        </div>
                                        <div class="col-3 ">
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->platelet }}</span>
                                            <span class="text-secondary small me-3">cells/cu.mm
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Blood Urea

                                        </div>
                                        <div class="col-3 ">
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->blood_urea }}</span>
                                            <span class="text-secondary small me-3">mg/dl
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Serum Creatinine

                                        </div>
                                        <div class="col-3 ">
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->serum_creatinine }}</span>
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
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->total_protein }}</span>
                                            <span class="text-secondary small me-3">gm/dl
                                            </span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <div class="col-3 text-secondary">Bilirubin
                                        </div>
                                        <div class="col-3 ">
                                            <span class="fw-bold">{{ $preoperative->labinvestigations->bilirubin }}</span>
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



                                   
                                @endempty
                            </section>

                            {{-- /Lab Investigation --}}


                        </div>

                        <div class="card-footer">
                            <button class="btn btn-primary">Submit for Approval</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    @endempty

</x-app-layout>
