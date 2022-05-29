<x-app-layout>

    <x-slot name="header">
        <div class="d-flex justify-content-between align-items-center">
            <a href="{{ url()->previous() }}" class="btn btn-light btn-sm me-3 d-flex align-items-center"><span
                    class="material-icons  small">arrow_back</span> </a>
            <span class="fw-bold">{{ __('New Case Report Form') }}</span>
        </div>
    </x-slot>


    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h4 class="fw-light">
                    {{ __('New Case Report Form') }}
                </h4>

            </div>
            <div class="col-sm-12">
                <div class="card rounded shadow-sm">
                    <form action="{{ route('crf.store') }}" method="POST">
                        @csrf

                        <div class="card-body">

                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <span class="text-secondary">Protocol Number</span>
                                </div>

                                <div class="col-sm-8">
                                    <span class="fw-bold">2021-04</span>
                                </div>
                            </div>

                            <div class="row mt-2 g-3">

                                <div class="col-sm-4">
                                    <span class="text-secondary">Name of the Facility</span>
                                </div>

                                <div class="col-sm-8">
                                    <span class="fw-bold">{{auth()->user()->facility->name }}</span>
                                </div>

                            </div>

                            <hr>
                            <div class="row mt-2 g-3 align-items-center">
                                <div class="col-sm-4">
                                    <label for="consentDate" class="form-label text-secondary">Date of Consent</label>

                                </div>

                                <div class="col-sm-6">

                                    <input id="dateOfConsent" name="dateOfConsent" type="text"
                                        class="form-control calendar" placeholder="mm/dd/yyyy" />

                                </div>

                            </div>

                            <div class="row mt-2 g-3">
                                <div class="col-sm-4">
                                    <label for="UHID" class="form-label text-secondary">UHID</label>

                                </div>
                                <div class="col-sm-6">
                                    <input type="text" name="uhid" class="form-control" placeholder="uhid" />

                                </div>
                            </div>

                            <div class="row mt-2 g-3">
                                <div class="col-sm-4">
                                    <label for="Gender" class="form-label text-secondary">Gender</label>
                                </div>
                                <div class="col-sm-6">

                                    <div class="form-check form-check-inline">
                                        <input id="genderMale" name="gender" value="Male" type="radio"
                                            class="form-check-input">
                                        <label class="form-check-label" for="genderMale">Male</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input id="genderFemale" name="gender" value="Female" type="radio"
                                            class="form-check-input">
                                        <label class="form-check-label" for="genderFemale">Female</label>
                                    </div>

                                    <div class="form-check form-check-inline">
                                        <input id="genderTransgender" name="gender" value="Transgender" type="radio"
                                            class="form-check-input">
                                        <label class="form-check-label" for="genderTransgender">Transgender</label>
                                    </div>
                                </div>

                            </div>


                            <div class="row mt-2 g-3">

                                <div class="col-sm-4">
                                    <label for="subjectDob" class="form-label text-secondary">Date of Birth</label>

                                </div>

                                <div class="col-sm-6">
                                    <input id="subjectDob" name="subjectDob" type="text" class="form-control calendar"
                                        placeholder="dd/mm/yyyy" />
                                </div>


                            </div>





                        </div>

                        <div class="card-footer">
                            <div class="row g-3">
                                <div class="col-sm-12">
                                    <a href="{{ url()->previous() }}" class="btn btn-secondary me-2">Cancel</a>
                                    <button type="submit" class="btn btn-primary">Proceed</a>
                                </div>


                                {{-- <a href="{{ route('crf.visit') }}" class="btn btn-primary">Proceed</a> --}}

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>



    </div>




</x-app-layout>
