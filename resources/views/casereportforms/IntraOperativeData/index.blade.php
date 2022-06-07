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
   empty
    @else
        @if(!$intraoperative->is_submitted)
        <div class="container">
            @canany(['admin', 'sudo', 'investigator'])
                <div class="d-flex justify-content-between mb-3">
                    <span class="fs-3"> Intra Operative Data </span>
                    @can('investigator')
                        <form action="">
                            @csrf
                            <button type="submit" class="btn btn-success">Approve</button>
                        </form>
                    @endcan
                </div>
            @endcanany

            @can('coordinator')
                <div class="d-flex justify-content-between mb-3">
                    <span class="fs-3"> Intra Operative Data </span>
                </div>

                

                <div class="card shadow rounded-5 mb-3">
                    <form action="{{ route('crf.intraoperative.update', ['crf' => $crf, 'intraoperative' => $crf->intraoperatives]) }}" method="POST">
                        @method('PUT')
                        @csrf
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label"> <label class="form-label">Date of Procedure</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control calendar rounded-3" placeholder="" value="{{ $intraoperative->date_of_procedure }}" name="date_of_procedure">
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
                                        <input type="text" class="form-control rounded-3" placeholder="" value="{{ $intraoperative->arterial_cannulation }}" name="arterial_cannulation">
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label"> <label class="form-label">Venous Cannulation</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control rounded-3" placeholder="" value="{{ $intraoperative->venous_cannulation }}" name="venous_cannulation">

                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label"> <label class="form-label">Cardioplegia</label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control rounded-3" placeholder="" value="{{ $intraoperative->cardioplegia }}" name="cardioplegia">

                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label">
                                    <label class="form-label">Aortotomy</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <select class="form-select"  name="aortotomy">
                                            <option selected=""></option>
                                            <option value="Vertical" {{ $intraoperative->aortotomy=== 'Vertical' ? 'selected': '' }}>Vertical</option>
                                            <option value="Oblique" {{ $intraoperative->aortotomy=== 'Oblique' ? 'selected': '' }}>Oblique</option>
                                            <option value="Transverse" {{ $intraoperative->aortotomy=== 'Transverse' ? 'selected': '' }}>Transverse</option>
                                            <option value="Others" {{ $intraoperative->aortotomy=== 'Others' ? 'selected': '' }}>Others</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label"> <label class="form-label">Annular Suturing
                                        Technique</label></div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <select class="form-select rounded-3" name="annular_suturing_technique">
                                            <option selected=""></option>
                                            <option value="Simple" {{ $intraoperative->annular_suturing_technique=== 'Simple' ? 'selected': '' }}>Simple</option>
                                            <option value="Interrupted Pledgeted" {{ $intraoperative->annular_suturing_technique=== 'Interrupted Pledgeted' ? 'selected': '' }}>Interrupted Pledgeted</option>
                                            <option value="Interrupted non-Pledgeted" {{ $intraoperative->annular_suturing_technique=== 'Interrupted non-Pledgeted' ? 'selected': '' }}>Interrupted non-Pledgeted</option>
                                            <option value="Continuous" {{ $intraoperative->annular_suturing_technique=== 'Continuous' ? 'selected': '' }}>Continuous</option>
                                            <option value="Others" {{ $intraoperative->annular_suturing_technique=== 'Others' ? 'selected': '' }}>Others</option>
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
                                        <input type="number" class="form-control with-units " placeholder="" value="{{ $intraoperative->tcb_time }}" name="tcb_time">
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
                                        <input type="number" class="form-control with-units" placeholder="" value="{{ $intraoperative->acc_time }}" name="acc_time">
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
                                        <input type="text" class="form-control" placeholder="" value="{{ $intraoperative->concomitant_procedure }}" name="concomitant_procedure">
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
                                        <input type="text" class="form-control" placeholder="" value="{{ $intraoperative->all_paravalvular_leak }}" name="all_paravalvular_leak">

                                    </div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="col-sm-2 col-form-label"> <label class="form-label">Major paravalvular
                                        leak</label>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="" value="{{ $intraoperative->major_paravalvular_leak }}" name="major_paravalvular_leak">

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary rounded-5">Submit for Approval</button>

                        </div>
                    </form>
                </div>
            @endcan

        </div>
        @else
       
            <div class="container">
                <div class="card shadow-sm mb-3 rounded-5">
                    <div class="card-header">
                        <span class="fs-3"> Intra Operative Data </span>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        @endif
        @endempty
</x-app-layout>
