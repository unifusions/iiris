<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href={{ route('crf.index') }} class="">
                        {{ __('Case Report Form  ') }}</a> </li>
                <li class="breadcrumb-item"><a href={{ route('crf.show', ['crf' => $crf]) }} class="">
                        {{ $crf->subject_id }}</a> </li>
                <li class="breadcrumb-item active" aria-current="page"> <span> {{ __('Intra Operative Data') }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>


    @empty($intraoperative)
    @else
        <div class="container">
            <div class="d-flex justify-content-between mb-3">
                <span class="fs-3"> Preoperative Data </span>
                @can('investigator')
                    <form action="">
                        @csrf
                        <button type="submit" class="btn btn-success">Approve</button>
                    </form>
                @endcan
            </div>
            <div class="card shadow rounded-5">
                <form action="{{ route('crf.intraoperative.store', ['crf' => 'crf'])  }}" method="POST">
                    <div class="card-body">

                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">Date of Procedure</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control calendar rounded-3" placeholder="" value="">

                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row mb-2">
                            <div class="col-sm-12 fw-bold">Surgical Strategy</div>

                        </div>
                        <div class="row mb-3">

                            <div class="col-sm-2 col-form-label">
                                <label class="form-label">Arterial Cannulation</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-3" placeholder="" value="">
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">Venous Cannulation</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-3" placeholder="" value="">

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">Cardioplegia</label></div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control rounded-3" placeholder="" value="">

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label">
                                <label class="form-label">Aortotomy</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected=""></option>
                                        <option value="Vertical">Vertical</option>
                                        <option value="Oblique">Oblique</option>
                                        <option value="Transverse">Transverse</option>
                                        <option value="Others">Others</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">Annular Suturing
                                    Technique</label></div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <select class="form-select rounded-3" aria-label="Default select example">
                                        <option selected=""></option>
                                        <option value="Simple">Simple</option>
                                        <option value="Interrupted Pledgeted">Interrupted Pledgeted</option>
                                        <option value="Interrupted non-Pledgeted">Interrupted non-Pledgeted</option>
                                        <option value="Continuous">Continuous</option>
                                        <option value="Others">Others</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">

                            <div class="col-sm-2 col-form-label">
                                <label class="form-label">Total Cardiopulmonary Bypass Time</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control with-units " placeholder="" value="">
                                    <span class="input-group-text text-secondary input-units">mins</span>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label">
                                <label class="form-label">Aortic Cross Clamp Time</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control with-units" placeholder="" value="">
                                    <span class="input-group-text text-secondary input-units">mins</span>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label">
                                <label class="form-label">Concomitant Procedure</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="" value="">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="row mb-2">
                            <div class="col-sm-12 fw-bold">Intraoperative TEE</div>

                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">All paravalvular
                                    leak</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="" value="">

                                </div>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-2 col-form-label"> <label class="form-label">Major paravalvular
                                    leak</label>
                            </div>
                            <div class="col-sm-6">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="" value="">

                                </div>
                            </div>
                        </div>


                    </div>

                    <div class="card-footer">
                        <button type="submit" class="btn btn-primary rounded-5">Save</button>

                    </div>
                </form>
            </div>
        </div>
    @endempty
</x-app-layout>
