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

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __(' Lab Investigation') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    <div class="container">
     <form action="{{ route($storeUri, $storeParameters) }}" method="POST">
          @csrf
        <div class="card shadow">
            <div class="card-header">
                <h4> Lab Investigation</h4>
            </div>
            <div class="card-body">

                <div class="row mb-3  align-items-center">
                    <div class="col-sm-3 col-form-label">
                        <label class="form-check-label" for="symptoms">
                            {{ __('Date') }}
                        </label>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="text" class="form-control calendar" name="li_date">
                        </div>
                    </div>
                </div>

                <div class="row mb-3  align-items-center">
                    <div class="col-sm-3 col-form-label"><label class="form-label">Red Blood Cell (RBC)</label>
                    </div>
                    <div class="col-sm-6 col-form-label">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" name= "rbc">
                            <span class="input-group-text text-secondary input-units">cells/cu.mm</span>
                        </div>
                    </div>
                </div>

                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"> <label class="form-label">White Blood Cell
                            (WBC)</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="wbc">
                            <span class="input-group-text text-secondary input-units">cells/cu.mm</span>
                        </div>
                    </div>
                </div>

                <div class="row mb-3  align-items-center">
                    <div class="col-sm-3"><label class="form-label">Hemoglobin</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="hemoglobin">
                            <span class="input-group-text text-secondary input-units">g/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3  align-items-center">
                    <div class="col-sm-3">
                        <label class="form-label">Hematocrit</label>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="hematocrit" >
                            <span class="input-group-text text-secondary input-units">%</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3  align-items-center">
                    <div class="col-sm-3"> <label class="form-label">Platelet Count</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="platelet" >
                            <span class="input-group-text text-secondary input-units">cells/cu.mm</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Blood Urea</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="blood_urea" >
                            <span class="input-group-text text-secondary input-units">mg/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Serum Creatinine</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="serum_creatinine" >
                            <span class="input-group-text text-secondary input-units">mg/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3">
                        <label class="form-label">Alanine Transaminase (ALT)</label>
                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="alt" >
                            <span class="input-group-text text-secondary input-units">u/l</span>
                        </div>
                    </div>
                </div>
                <div class="row  mb-3 align-items-center">
                    <div class="col-sm-3">
                        <label class="form-label">Aspartate Transaminase (AST)</label>

                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units " placeholder="" value="" name = "ast" >
                            <span class="input-group-text text-secondary input-units">u/l</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3">
                        <label class="form-label">Alkaline Phosphatase (ALP)</label>

                    </div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="alp" >
                            <span class="input-group-text text-secondary input-units">u/l</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Albumin</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name= "albumin">
                            <span class="input-group-text text-secondary input-units">gm/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Total Protein</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="total_protein" >
                            <span class="input-group-text text-secondary input-units">gm/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Bilirubin</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="bilirubin" >
                            <span class="input-group-text text-secondary input-units">mg/dl</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-sm-3"><label class="form-label">Prothrombin Time(PT) INR</label></div>
                    <div class="col-sm-6">
                        <div class="input-group">
                            <input type="number" class="form-control with-units" placeholder="" value="" name="pt_inr" >
                            <span class="input-group-text text-secondary input-units">seconds</span>
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
