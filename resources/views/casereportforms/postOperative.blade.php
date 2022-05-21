<div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3">

        <div class="row mt-3">
            <div class="col-md-3 px-0 ">

                <ul id="visit-menu" class="nav sub-sidebar bg-white px-4  flex-column rounded" id="pills-tab-visitforms"
                    role="tablist">




                    <li class="nav-item mt-3">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-physical-examination">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Physical Examination
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-angina-classification">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Angina Classification
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>

                  

                   



               

                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-lab-investigation">

                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Lab Investigation
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>

                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-electrocardiogram">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Electrocardiogram
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>

                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-echocardiography">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Echocardiography
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span> </a>
                    </li>

                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-safety">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span>Safety Parameters
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>



                    <li class="nav-item ">
                        <a class="nav-link py-1" data-bs-toggle="pill" data-bs-target="#postop-medications">
                            <span class="d-flex">
                                <span class="material-icons">
                                    navigate_next
                                </span> Medications
                            </span>

                            <span class="material-icons text-warning">

                                do_not_disturb_on
                            </span>
                        </a>
                    </li>

                    <li class="nav-item my-3">
                        <button class="py-1 btn btn-primary" aria-current="page" data-bs-toggle="pill"
                            data-bs-target="#postop-form-preview" role="tab">Preview & Submit
                        </button>
                    </li>


                </ul>

            </div>






            <div class="col-md-9">

                <div data-bs-target="#visit-menu" class="tab-content" id="pills-tabContent-visitforms">






                    <section id="postop-form-preview" class="tab-pane fade" role="tabpanel">
                        {{-- <div class="card">

                            <div class="card-body">
                                <div class="row mb-3">

                                    <div class="col-sm-8">
                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Protocol Number</span>
                                            </div>
                                            <div class="col-sm-6">
                                                <span>2021-04</span>
                                            </div>
                                        </div>
                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Facility/Institution Name</span>
                                            </div>
                                            <div class="col-sm-6">
                                                <span>{{ $casert->facility->facilityName }}</span>
                                            </div>
                                        </div>
                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Subject ID</span>
                                            </div>
                                            <div class="col-sm-6">
                                                <span>{{ $casert->subjectId }}</span>
                                            </div>
                                        </div>

                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Date of Consent</span>
                                            </div>
                                            <div class="col-sm-6">
                                                <span>{{ $casert->dateOfConsent }}</span>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="col-sm-4">
                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">UHID</span><br>

                                            </div>
                                            <div class="col-sm-6 ">
                                                <span>{{ $casert->uhid }}</span>

                                            </div>
                                        </div>

                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Gender</span><br>

                                            </div>
                                            <div class="col-sm-6">

                                                <span>{{ $casert->gender }}</span>

                                            </div>

                                        </div>
                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Date of Birth</span><br>
                                            </div>
                                            <div class="col-sm-6">
                                                <span>{{ $casert->subjectDob }}</span>
                                            </div>
                                        </div>

                                        <div class="row mt-1">
                                            <div class="col-sm-6">
                                                <span class="text-secondary">Age</span><br>

                                            </div>
                                            <div class="col-sm-6">
                                                <span>{{ $casert->age }} years</span>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <hr class="mt-3">

                                <div class="row">



                                    @if ($visit->physicalexaminationform)
                                        <div class="col-sm-12">
                                            <h6>Physical Examination</h6>
                                        </div>
                                        <div class="col-sm-4">

                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary">Height</span>
                                                </div>
                                                <div class="col-sm-6">
                                                    <span>{{ $visit->physicalexaminationform->height }} cms</span>
                                                </div>

                                            </div>

                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary mt-3">Weight</span>
                                                </div>
                                                <div class="col-sm-6">
                                                    <span>{{ $visit->physicalexaminationform->weight }} Kgs</span>
                                                </div>
                                            </div>

                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary mt-3">Body Surface Area</span>
                                                </div>
                                                <div class="col-sm-6">
                                                    <span>{{ $visit->physicalexaminationform->bsa }}
                                                        m<sup>2</sup></span>

                                                </div>
                                            </div>


                                        </div>

                                        <div class="col-sm-4">
                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary mt-3">Heart Rate</span>

                                                </div>
                                                <div class="col-sm-6">
                                                    {{ $visit->physicalexaminationform->heart_rate }} bpm</div>
                                            </div>

                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary mt-3">Pulse Rate</span>

                                                </div>
                                                <div class="col-sm-6">
                                                    {{ $visit->physicalexaminationform->pulse_rate }} bpm</div>
                                            </div>

                                        </div>


                                        <div class="col-sm-4">
                                            <div class="row mt-1">
                                                <div class="col-sm-6">
                                                    <span class="text-secondary ">Systolic BP</span>
                                                </div>
                                                <div class="col-sm-6">
                                                    {{ $visit->physicalexaminationform->systolic_bp }} mm/Hg</div>
                                            </div>

                                            <div class="row mt-1">
                                                <div class="col-sm-6"> <span class="text-secondary">Diastolic BP
                                                    </span>
                                                </div>
                                                <div class="col-sm-6">
                                                    {{ $visit->physicalexaminationform->diastolic_bp }} mm/Hg</div>
                                            </div>
                                        </div>
                                    @endif

                                </div>

                            </div>

                            <div class="card-footer">

                            </div>
                        </div> --}}

                    </section>


                    <section id="postop-physical-examination" class="tab-pane fade" role="tabpanel">

                        
                        <div wire:ignore.self id="physicalExamination">
    
                            <form wire:submit.prevent="store">
    
                                <div class="d-flex align-items-center p-3 mb-3 text-white bg-teal rounded shadow-sm">
    
                                    <div class="lh-1">
                                        <h1 class="h5 mb-0 text-white lh-1">Physical Examination</h1>
    
    
    
                                    </div>
                                </div>
    
                                {{-- Physical Examination --}}
    
                                <div class="card rounded shadow-sm mb-3">
                                    <div class="card-body">
    
    
                                        <div class="row g-3">
    
                                            <div class="col-sm-3">
                                                <label class="form-label">Date of Discharge</label>
                                                <div class="input-group has-validation">
                                                    <input type="number" wire:model="Height" aria-describedby="Hheight"
                                                        class="form-control with-units 
                                                            @if ($errors->has('Height')) is-invalid @endif"
                                                        placeholder="" value="">
                                                    <span class="input-group-text input-units text-secondary">cms</span>
                                                    @error('Height')
                                                        <div class=" invalid-feedback">
                                                            {{ $message }}
                                                        </div>
                                                    @enderror
                                                </div>
                                            </div>
    
    
                                            <div class="col-sm-12"></div>
    
    
    
    
                                            <div class="col-sm-3">
                                                <label class="form-label">Heart Rate</label>
                                                <div class="input-group">
                                                    <input type="number" wire:model="heartrate"
                                                        class="form-control
                                                        @if ($errors->has('heartrate')) is-invalid @endif with-units"
                                                        placeholder="" value="">
                                                    <span class="input-group-text input-units text-secondary">bpm</span>
                                                </div>
                                                @error('heartrate')
                                                    <div class=" invalid-feedback">
                                                        {{ $message }}
                                                    </div>
                                                @enderror
                                            </div>
    
    
                                            <div class="col-sm-12">
                                                <h5>Blood Pressure</h5>
                                            </div>
    
                                            <div class="col-sm-3">
                                                <label class="form-label">Systolic BP</label>
                                                <div class="input-group">
                                                    <input type="number" wire:model="systolicBp"
                                                        class="
                                                        form-control with-units 
                                                        @if ($errors->has('systolicBp')) is-invalid @endif"
                                                        placeholder="" value="">
                                                    <span class="input-group-text input-units text-secondary">mmHg</span>
                                                </div>
                                                @error('systolicBp')
                                                    <div class=" invalid-feedback">
                                                        {{ $message }}
                                                    </div>
                                                @enderror
                                            </div>
    
                                            <div class="col-sm-3">
                                                <label class="form-label">Diastolic BP</label>
                                                <div class="input-group">
                                                    <input type="number" wire:model="diastolicBp"
                                                        class="
                                                        form-control with-units
                                                        @if ($errors->has('systolicBp')) is-invalid @endif
                                                        "
                                                        placeholder="" value="">
                                                    <span class="input-group-text input-units text-secondary">mmHg</span>
                                                </div>
                                                @error('diastolicBp')
                                                    <div class=" invalid-feedback">
                                                        {{ $message }}
                                                    </div>
                                                @enderror
                                            </div>
    
                                            <div class="col-sm-12">
    
                                                <button type="submit" class="btn btn-primary">Save</button>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {{-- <livewire:crf.visits.physical-examination  :crfid = "{{ $casert->id }}" :visitid = "{{ $visit->id }}" /> --}}
                        {{-- @livewire('crf.visits.physical-examination', ['crfid' => $casert->id, 'visitid' => $visit->id], key($visit->id)) --}}
                    </section>

                    <section id="postop-medical-history" class="tab-pane fade" role="tabpanel">

                    {{-- @livewire('crf.visits.medical-history', ['crfid' => $casert->id, 'visitid' => $visit->id]) --}}

                    </section>
                    {{-- Surgical History --}}
                    <section id="postop-surgical-history" class="tab-pane fade" role="tabpanel">

                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Surgical History</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>#</th>
                                                    <th>Disease</th>
                                                    <th>Date of Procedure</th>
                                                    <th>Treatment</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-row-reverse bd-highlight">

                                    <button class="btn btn-primary mb-3" data-bs-toggle="modal"
                                        data-bs-target="#modalSurgicalHistory">+ Add
                                        Surgical History</button>
                                </div>
                            </div>
                        </div>

                    </section>


                    {{-- Other History --}}
                    <section id="postop-others" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Others</h1>
                            </div>
                        </div>


                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>#</th>
                                                    <th>Indication</th>
                                                    <th>Procedure/Treatment</th>
                                                    <th>Treatment</th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-row-reverse bd-highlight">

                                    <button class="btn btn-primary mb-3" data-bs-toggle="modal"
                                        data-bs-target="#modalOthers">+
                                        Add
                                        Others</button>
                                </div>
                            </div>
                        </div>
                    </section>


                    {{-- Family History --}}
                    <section id="postop-family-history" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Family History</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>#</th>
                                                    <th>Illness</th>
                                                    <th>Relation</th>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-row-reverse bd-highlight">

                                    <button class="btn btn-primary mb-3" data-bs-toggle="modal"
                                        data-bs-target="#modalFamilyHistory">+ Add
                                        Family History</button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {{-- Personal History --}}

                    <section id="postop-personal-history" class="tab-pane fade" role="tabpanel">

                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Personal History</h1>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-sm-4">
                                <div class="card rounded shadow-sm">
                                    <div class="card-body">
                                        <h6 class="border-bottom pb-2 mb-3">Smoking</h6>

                                        <div class="row g-3">
                                            <div class="col-sm-12">
                                                <label class="form-label">No. of Cigarettes/day</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <label class="form-label">Smoking Since:</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <label class="form-label">Stopped Since: (If Stopped)</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="card rounded shadow-sm">
                                    <div class="card-body">
                                        <h6 class="border-bottom pb-2 mb-3">Alcohol Consumption</h6>

                                        <div class="row g-3">
                                            <div class="col-sm-12">
                                                <label class="form-label">Quantity ml/day</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <label class="form-label">Consuming Since:</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <label class="form-label">Stopped Since: (If Stopped)</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h6 class="border-bottom pb-2 mb-3">Tobacco Consumption</h6>

                                        <div class="row g-3">
                                            <div class="col-sm-6">
                                                <label class="form-label">Type</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <label class="form-label">Quantity/day</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>


                                            <div class="col-sm-12">
                                                <label class="form-label">Consuming Since:</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                            <div class="col-sm-12">
                                                <label class="form-label">Stopped Since: (If Stopped)</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="" value="">
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {{-- Modal Surgical History --}}
                    <div class="modal fade" id="modalSurgicalHistory" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Surgical History</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-sm-12">
                                            <label class="form-label">Disease/Indication</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Date of Procedure</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Procedure</label>
                                            <div class="input-group">
                                                <textarea id="" cols="30" rows="3" class="form-control" placeholder="" value=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- Modal Other History --}}
                    <div class="modal fade" id="modalOthers" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Others</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-sm-12">
                                            <label class="form-label">Indication</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Procedure/Treatment</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Procedure</label>
                                            <div class="input-group">
                                                <textarea id="" cols="30" rows="3" class="form-control" placeholder="" value=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {{-- Modal Family History --}}
                    <div class="modal fade" id="modalFamilyHistory" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Others</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-sm-12">
                                            <label class="form-label">Illness</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Relation</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    {{-- Physical Activity --}}
                    <section id="postop-physical-activity" class="tab-pane fade" role="tabpanel">


                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Physical Activity</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>#</th>
                                                    <th>Type of Activity</th>
                                                    <th>Duration (in minutes)</th>

                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-row-reverse bd-highlight">

                                    <button class="btn btn-primary mb-3" data-bs-toggle="modal"
                                        data-bs-target="#modalPhysicalActivity">+ Add
                                        Physical Activity</button>
                                </div>
                            </div>
                        </div>

                    </section>

                    {{-- Modal Physical Activity --}}
                    <div class="modal fade" id="modalPhysicalActivity" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Physical Activity</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-sm-12">
                                            <label class="form-label">Type of Activity</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <label class="form-label">Duration in Minutes</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>





                    {{-- Laboratory Investigation --}}
                    <section id="postop-lab-investigation" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center p-3 mb-3 text-white bg-teal rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Laboratory Investigation</h1>
                            </div>
                        </div>

                   
                        <div class="card rounded shadow-sm mb-3">
                            <div class="card-body">
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4">
                                        <label class="form-label">Date</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                            
                                        </div>
                                    </div>
    
                                    <div class="col-sm-12"></div>
    
                                    <div class="col-sm-4"><label class="form-label">Red Blood Cell (RBC)</label>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cells/cu.mm</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 mb-3  align-items-center">
                                    <div class="col-sm-4"> <label class="form-label">White Blood Cell
                                            (WBC)</label></div>
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cells/cu.mm</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 mb-3  align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Hemoglobin</label></div>
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">g/dl</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 mb-3  align-items-center">
                                    <div class="col-sm-4"><div class="col-sm-4"><label class="form-label">Hematocrit</label></div></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">%</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3  align-items-center">
                                    <div class="col-sm-4"> <label class="form-label">Platelet Count</label></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span
                                            class="input-group-text text-secondary input-units">cells/cu.mm</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Blood Urea</label></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">mg/dl</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Serum Creatinine</label></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">mg/dl</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4">
                                        <label class="form-label">Alanine Transaminase (ALT)</label>
                                    </div>
                                    <div class="col-sm-8">  <div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">u/l</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4">
                                        <label class="form-label">Aspartate Transaminase (AST)</label>
    
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units " placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">u/l</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4">
                                        <label class="form-label">Alkaline Phosphatase (ALP)</label>
    
                                    </div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">u/l</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Albumin</label></div>
                                    <div class="col-sm-8">
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">gm/dl</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Total Protein</label></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">gm/dl</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Bilirubin</label></div>
                                    <div class="col-sm-8">  <div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">mg/dl</span>
                                    </div></div>
                                </div>
                                <div class="row g-3 mb-3 align-items-center">
                                    <div class="col-sm-4"><label class="form-label">Prothrombin Time(PT) INR</label></div>
                                    <div class="col-sm-8"><div class="input-group">
                                        <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">seconds</span>
                                    </div></div>
                                </div>
    
    
    
    
    
                            </div>
                        </div>
                    </section>


                    {{-- Electrocardiogram --}}
                    <section id="postop-electrocardiogram" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Electrocardiogram</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">

                                <div class="row g-3">
                                    <div class="col-sm-3">
                                        <label class="form-label">Rhythm</label>
                                        <div class="input-group">

                                            <select class="form-select" aria-label="Default select example">
                                                <option selected></option>
                                                <option value="Sinus">Sinus</option>
                                                <option value="Atrial Fibrilation">Atrial Fibrilation</option>
                                                <option value="Atrial Flutter">Atrial Flutter</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-sm-3">
                                        <label class="form-label">Rate</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                        <span class="input-group-text text-secondary input-units">bpm</span>


                                        </div>
                                    </div>

                                    <div class="col-sm-2">
                                        <label class="form-label">LVH</label>
                                        <div class="input-group">
                                             <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                                                  <label class="form-check-label" for="inlineRadio1">Yes</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                                  <label class="form-check-label" for="inlineRadio2">No</label>
                                                </div>

                                        </div>
                                    </div>

                                    <div class="col-sm-2">
                                        <label class="form-label">LV Strain</label>
                                        <div class="input-group">
                                             <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option1">
                                                  <label class="form-check-label" for="inlineRadio3">Yes</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option2">
                                                  <label class="form-check-label" for="inlineRadio4">No</label>
                                                </div>

                                        </div>
                                    </div>

                                    <div class="col-sm-2">
                                        <label class="form-label">PR Interval</label>
                                        <div class="input-group">
                                             <input type="text" class="form-control with-units" placeholder="" value="">
                                             <span class="input-group-text text-secondary input-units">ms</span>
                                         </div>

                                         
                                    </div>

                                    <div class="col-sm-2">
                                         <label for="" class="form-label">QRS Duration</label>
                                         <div class="input-group">
                                             <input type="text" class="form-control with-units" placeholder="" value="">
                                             <span class="input-group-text text-secondary input-units">ms</span>
                                         </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                    {{-- Echo Cardiography --}}
                    <section id="postop-echocardiography" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Echocardiography</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">

                                    <div class="col-sm-4">
                                        <label class="form-label">Peak Velocity</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">m/s</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Velocity Time Integral (Aortic Valve)</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>

                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Peak Gradient</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">mmHg</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Mean Gradient</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">mmHg</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Heart Rate</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">bpm</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Stroke Volume</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">ml</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">DVI</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Effective Orifice Area (EOA)</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                            <span
                                                class="input-group-text text-secondary input-units">cm<sup>2</sup>/m<sup>2</sup></span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Acceleration Time</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">millisec</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">LVOT VTI</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>

                                        </div>
                                    </div>

                                    <div class="col-sm-12"></div>

                                    <div class="col-sm-6">
                                        <label class="form-label">LV Mass</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">g</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-12"></div>



                                    <div class="col-sm-4">
                                      

                                        <label class="form-label mt-3">IVS Diastole</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>

                                        </div>

                                    </div>

                                 

                                    <div class="col-sm-4">
                                      

                                        <label class="form-label mt-3">PW Diastole</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>
                                        </div>

                                    </div>

                               

                                    <div class="col-sm-4">
                                        <label class="form-label">LVID-End Systole</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>
                                        </div>

                                        <label class="form-label mt-3">LVID-End Diastole</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">cm</span>
                                        </div>

                                    </div>

                                    

                                    <div class="col-sm-4">
                                        <label class="form-label">Ejection Fraction</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control with-units" placeholder="" value="">
                                            <span class="input-group-text text-secondary input-units">%  </span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {{-- Safety --}}

                    <section id="postop-safety" class="tab-pane fade" role="tabpanel">
                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Safety</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">

                                <div class="row g-3">

                                    <div class="col-sm-4">
                                        <label class="form-label">Structural Value Deterioration</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Valve Thrombosis</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">All Paravalvular Leak </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Major Paravalvular Leak </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Non-structural Valve Deterioration </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>



                                    <div class="col-sm-4">
                                        <label class="form-label">Thromboembolism</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                             

                                    <div class="col-sm-4">
                                        <label class="form-label">All Bleeding/Hemorrhage </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Major Bleeding/Hemorrhage </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    
                                    <div class="col-sm-4">
                                        <label class="form-label">Endocarditis </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">All-cause Mortality </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Valve-related Mortality </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Valve-related reoperation </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Explant </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label class="form-label">Haemolysis </label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label for="" class="form-label">Sudden Unexplained Death</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <label for="" class="form-label">Cardiac Death</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" placeholder="" value="">
                                        </div>
                                    </div>

                                    

                                </div>

                            </div>
                        </div>
                    </section>

                  
                    {{-- Angina Classification --}}
                    <section id="postop-angina-classification" class="tab-pane fade" role="tabpanel">

                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Angina Classification</h1>
                            </div>
                        </div>

                        <div class="card mb-3  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">

                                    <div class="col-sm-12 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label" for="anginaOnExertion">Angina on
                                                        Exertion</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="anginaOnExertion">
                                                </div>

                                            </div>

                                            <div class="col-sm-4">
                                                <label class="form-label" for="anginaOnExertionClass">Class
                                                </label>
                                                <div class="input-group">
                                                    <select class="form-select" id="anginaOnExertionClass">
                                                        <option selected></option>
                                                        <option value="Class I">Class I</option>
                                                        <option value="Class II">Class II</option>
                                                        <option value="Class III">Class III</option>
                                                        <option value="Class IV">Class IV</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </div>



                                    <div class="col-sm-12 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label" for="dyspneaOnExertion">Dyspnea on
                                                        Exertion</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="dyspneaOnExertion">
                                                </div>

                                            </div>

                                            <div class="col-sm-4">
                                                <label class="form-label" for="anginaOnExertionClass">Class
                                                </label>
                                                <div class="input-group">
                                                    <select class="form-select" id="anginaOnExertionClass">
                                                        <option selected></option>
                                                        <option value="Class I">Class I</option>
                                                        <option value="Class II">Class II</option>
                                                        <option value="Class III">Class III</option>
                                                        <option value="Class IV">Class IV</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-sm-8">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-sm-6 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label" for="Syncope">Syncope</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="Syncope">
                                                </div>

                                            </div>

                                            <div class="col-sm-12">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-sm-6 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label"
                                                        for="Palpitation">Palpitation</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="Palpitation">
                                                </div>

                                            </div>

                                            <div class="col-sm-12">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </div>


                                    <div class="col-sm-6 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label" for="Giddiness">Giddiness</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="Giddiness">
                                                </div>

                                            </div>

                                            <div class="col-sm-12">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>
                                    </div>

                                    

                                    <div class="col-sm-6 mt-5">

                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label"
                                                        for="anginaOnExertion">Fever</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="fever">
                                                </div>

                                            </div>

                                            <div class="col-sm-12">
                                                <label for="anginaOnExertionDuration"
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mt-5">
                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label"
                                                        for="anginaOnExertion">Heart Failure Admission</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="heartFailureAdmission">
                                                </div>

                                            </div>

                                            <div class="col-sm-12">
                                                <label for=""
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mt-5">
                                        <div class="row align-items-center">
                                            <div class="col-sm-12">
                                                <div class="form-check form-switch ">
                                                    <label class="form-check-label"
                                                        for="anginaOnExertion">Others</label>
                                                    <input class="form-check-input" type="checkbox" role="switch"
                                                        id="heartFailureAdmission">
                                                </div>

                                            </div>

                                            <div class="col-sm-4">
                                                 <label for=""></label>
                                                 <input type="text" placeholder="" value="" /> 
                                            </div>

                                            <div class="col-sm-8">
                                                <label for=""
                                                    class="form-label">Duration</label>
                                                <div class="row">
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">days</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">months</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-4">
                                                        <div class="input-group">
                                                            <input type="number" class="form-control with-units"
                                                                placeholder="" value="">
                                                            <span
                                                                class="input-group-text text-secondary input-units">years</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>








                                </div>
                            </div>
                        </div>
                    </section>

                    {{-- Medications --}}

                    <section id="postop-medications" class="tab-pane fade" role="tabpanel">

                        <div class="d-flex align-items-center text-white bg-teal  p-3 mb-3  rounded shadow-sm">

                            <div class="lh-1">
                                <h5 class="h6 mb-0 text-white lh-1">Medications</h1>
                            </div>
                        </div>

                        <div class="card mb-5  rounded shadow-sm">
                            <div class="card-body">
                                <div class="row g-3">
                                    <div class="col-sm-12">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <th>#</th>
                                                    <th>Medication</th>
                                                    <th>Indication</th>
                                                    <th>Start Date</th>
                                                    <th>Status</th>
                                                    <th>Stop Date</th>
                                                    <th>Dosage</th>
                                                    <th>Reason for Discontinuation</th>
                                                </thead>
                                                <tbody>

                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-row-reverse bd-highlight">
                                    <button class="btn btn-primary mb-3" data-bs-toggle="modal"
                                        data-bs-target="#modalMedications">+ Add
                                        Medication</button>
                                </div>
                            </div>
                        </div>

                    </section>


                    {{-- Modal Medications --}}
                    <div class="modal fade" id="modalMedications" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Medication</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="row g-3">
                                        <div class="col-sm-6">
                                            <label class="form-label">Medication</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-6">
                                            <label class="form-label">Indication</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <label class="form-label">Start Date</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <label class="form-label">Status</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <label class="form-label">Stop Date</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <label class="form-label">Dosage</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="" value="">
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <label class="form-label">Reason for
                                                discontinuation </label>
                                            <div class="input-group">
                                                <textarea id="" cols="30" rows="3" class="form-control" placeholder="" value=""></textarea>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>


                    {{-- Modal Medications --}}
                    <div class="modal fade" id="modalMedications" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content rounded">
                                <div class="modal-header bg-teal text-white ">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>