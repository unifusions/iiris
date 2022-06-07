<x-app-layout>
    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>

                <li class="breadcrumb-item"><a href={{ route('crf.show', $storeParameters['crf']) }}
                        class=""> {{ $crf->subject_id }}
                    </a> </li>

                <li class="breadcrumb-item"><a
                        href=" {{ route($breadcrumb['link'], ['crf' => $storeParameters['crf']]) }}"
                        class="">
                        {{ $breadcrumb['name'] }} </a> </li>


                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Safety Parameter') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>

    <div class="container">
        <div class="card shadow-sm mb-3 rounded-5">
          <div class="card-header ">
               <h4>Physical Examination</h4>
           </div>
            <form action="{{ route($storeUri, $storeParameters) }}" method="POST">
                @csrf
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Structural Value Deterioration</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" 
                                name="structural_value_deterioration">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Valve Thrombosis</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="valve_thrombosis">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">All Paravalvular Leak </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="all_paravalvular_leak">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Major Paravalvular Leak </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="major_paravalvular_leak">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Non-structural Valve Deterioration </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="non_structural_value_deterioration">
                            </div>
                        </div>
                    </div>

                    <hr>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <span class="fs-6 fw-bold">Clinical Safety Parameters</span>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label"><label class="form-label">Thromboembolism</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="thromboembolism">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">All Bleeding/Hemorrhage </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="all_bleeding">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Major Bleeding/Hemorrhage </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="major_bleeding">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Endocarditis </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="endocarditis">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">All-cause Mortality </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="all_mortality">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Valve-related Mortality </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value=""
                                name="valve_mortality">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label">
                            <label class="form-label">Valve-related reoperation </label>

                        </div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="valve_related_operation">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">

                        <div class="col-sm-2 col-form-label"><label class="form-label">Explant </label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="explant">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">

                        <div class="col-sm-2 col-form-label"> <label class="form-label">Haemolysis </label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="haemolysis">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">

                        <div class="col-sm-2 col-form-label"> <label for="" class="form-label">Sudden Unexplained
                                Death</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="sudden_unexplained_death">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 col-form-label"> <label for="" class="form-label">Cardiac
                                Death</label></div>
                        <div class="col-sm-6">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="" value="" name="cardiac_death">
                            </div>
                        </div>
                    </div>


                </div>
                <div class="card-footer">
                    <button class="btn btn-primary rounded-5" type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</x-app-layout>
