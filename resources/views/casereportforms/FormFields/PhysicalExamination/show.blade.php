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
                        {{ __('Physical Examination : View') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    <div class="container">
        <div class="card shadow">
            <div class="card-header">Physical Examination</div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-3 text-secondary">Height</div>
                    <div class="col-9">{{ $physicalexamination->height }} <span
                            class="text-secondary small">cms</span></div>
                </div>
                <div class="row mb-3">
                    <div class="col-3 text-secondary">Weight</div>
                    <div class="col-9">{{ $physicalexamination->weight }} <span
                            class="text-secondary small">kgs</span></div>
                </div>

                <div class="row mb-3">
                    <div class="col-3 text-secondary">Body Surface Area (BSA)</div>
                    <div class="col-9">{{ $physicalexamination->bsa }} <span
                            class="text-secondary small"> m<sup>2</sup></span></div>
                </div>

                <div class="row mb-3">
                    <div class="col-3 text-secondary">Heart Rate</div>
                    <div class="col-9">{{ $physicalexamination->heart_rate }} <span
                            class="text-secondary small">bpm</span></div>
                </div>

                <div class="row mb-3">
                    <div class="col-12 fw-bold">Blood Pressure</div>
                </div>

                <div class="row mb-3">
                    <div class="col-3 text-secondary">Systolic BP</div>
                    <div class="col-9">{{ $physicalexamination->systolic_bp }} <span
                            class="text-secondary small">mmHg</span></div>
                </div>

                <div class="row mb-3">
                    <div class="col-3 text-secondary">Diastolic BP</div>
                    <div class="col-9">
                        {{ $physicalexamination->diastolic_bp }}
                        <span class="text-secondary small">mmHg</span>
                    </div>
                </div>
            </div>
            <div class="card-footer">
               <a
               href="{{ route('crf.preoperative.physicalexamination.edit', ['crf' => $crf, 'preoperative' => $crf->preoperatives, 'physicalexamination' => $physicalexamination]) }}"
               class="btn btn-warning btn-sm">Edit </a>
            </div>
        </div>

    </div>


</x-app-layout>
