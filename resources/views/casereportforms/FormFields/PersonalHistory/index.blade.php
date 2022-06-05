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

                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Family History') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>


    <div class="container">
        <form
            action="{{ route($storeUri, ['crf' => $storeParameters['crf'], 'preoperative' => $storeParameters['preoperative']]) }}"
            method="POST">

            @csrf
            <div class="fs-3 mb-3 fw-normal ">Personal History</div>
            <div class="card shadow-sm rounded-5">
                <div class="card-body">
                    <div class="row mb-3 d-flex align-items-center">

                        <div class="col-sm-2 col-form-label">
                            <label for="" class="form-label">Smoking</label>

                        </div>
                        <div class="col-sm-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="smoking" id="smokingNever"
                                    value="Never">
                                <label class="form-check-label" for="smokingNever">
                                    Never
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="smoking" id="smokingUsedTo"
                                    value="Used To">
                                <label class="form-check-label" for="smokingUsedTo">
                                    Used to consume in the past
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="smoking" id="smokingOccasional"
                                    value="Occasional">
                                <label class="form-check-label" for="smokingOccasional">
                                    Occasional
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="smoking" id="smokingDaily"
                                    value="Daily">
                                <label class="form-check-label" for="smokingDaily">
                                    Daily
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3" id="smoking_wrapper" style="display: none">
                        <div class="col-sm-12">

                            <div class="row">
                                <div class="col-sm-2 col-form-label"><label class="form-label">No. of
                                        Cigarettes/day</label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" name="cigarettes" placeholder=""
                                            value="">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Smoking Since</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" name="smokingSince"
                                            value="" id="smokingSince">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Stopped Since: (If Stopped)</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value=""
                                            name="smokingStoppedSince" id="smokingStoppedSince">
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                    <hr>
                    {{-- Alcohol --}}
                    <div class="row mb-3 d-flex align-items-center">

                        <div class="col-sm-2 col-form-label">
                            <label for="" class="form-label">Alcohol</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="alcohol" id="alcoholNever"
                                    value="Never">
                                <label class="form-check-label" for="alcoholNever">
                                    Never
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="alcohol" id="alcoholUsedTo"
                                    value="Used To">
                                <label class="form-check-label" for="alcoholUsedTo">
                                    Used to consume in the past
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="alcohol" id="alcoholOccasional"
                                    value="Occasional">
                                <label class="form-check-label" for="alcoholOccasional">
                                    Occasional
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="alcohol" id="alcoholDaily"
                                    value="Daily">
                                <label class="form-check-label" for="alcoholDaily">
                                    Daily
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row" id="alcohol_wrapper" style="display: none">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-2 col-form-label"><label class="form-label">Quantity ml/day
                                    </label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" name="alcoholQuantity" placeholder=""
                                            value="">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Consuming Since</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value=""
                                            name="alcoholSince" id="alcoholSince">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Stopped Since: (If Stopped)</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value=""
                                            name="alcoholStoppedSince" id="alcoholStoppedSince">
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                    <hr>

                    {{-- Tobacco --}}
                    <div class="row mb-3 d-flex align-items-center">

                        <div class="col-sm-2 col-form-label">
                            <label for="" class="form-label">Tobacco</label>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="tobacco" id="tobaccoNever"
                                    value="Never">
                                <label class="form-check-label" for="tobaccoNever">
                                    Never
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="tobacco" id="tobaccoUsedTo"
                                    value="Used To">
                                <label class="form-check-label" for="tobaccoUsedTo">
                                    Used to consume in the past
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="tobacco" id="tobaccoOccasional"
                                    value="Occasional">
                                <label class="form-check-label" for="tobaccoOccasional">
                                    Occasional
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="tobacco" id="tobaccoDaily"
                                    value="Daily">
                                <label class="form-check-label" for="tobaccoDaily">
                                    Daily
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row" id="tobacco_wrapper" style="display: none">
                        <div class="col-sm-12">

                            <div class="row">
                                <div class="col-sm-2 col-form-label"><label class="form-label">Type
                                    </label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" name="tobacco_type" placeholder="" value="">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label"><label class="form-label">Quantity/day
                                    </label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" name="tobacco_quantity" placeholder="" value="">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Consuming Since</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value=""
                                           name="tobaccoSince" id="tobaccoSince">
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Stopped Since: (If Stopped)</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value=""
                                          name="tobaccoStoppedSince"  id="tobaccoStoppedSince">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary rounded-5" type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>
</x-app-layout>
