
<div class="row">
    
    <div class="col-sm-6">
        <div class="card rounded shadow-sm">
            <div class="card-body">

               

                <form action="{{-- route('crf.store') --}}" method="POST">
                @csrf
                


                <div class="row g-3">
                    <div class="col-sm-6">
                        <span class="text-secondary">Protocol Number</span>
                        <h6>2021-04</h6>
                    </div>

                    <div class="col-sm-6">
                        <span class="text-secondary">Name of the Facility</span>
                        <h6>{{-- $facility->facilityName --}}</h6>
                        
                    </div>

                    <hr>

                    <div class="col-sm-6">
                        <label for="consentDate" class="form-label">Date of Consent</label>
                        <input id="dateOfConsent" name="dateOfConsent" type="text" class="form-control calendar" placeholder="mm/dd/yyyy" />
                    </div>

                    <div class="col-sm-6">
                        <label for="UHID" class="form-label">UHID</label>
                        <input type="text" name="uhid" class="form-control" placeholder="uhid" />
                    </div>

                    <div class="col-sm-6">
                        <label for="Gender" class="form-label d-flex">Gender</label>

                        <div class="form-check form-check-inline">
                            <input id="genderMale" name="gender" value="Male" type="radio" class="form-check-input">
                            <label class="form-check-label" for="genderMale">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input id="genderFemale" name="gender" value="Female" type="radio" class="form-check-input">
                            <label class="form-check-label" for="genderFemale">Female</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input id="genderTransgender" name="gender" value="Transgender" type="radio" class="form-check-input">
                            <label class="form-check-label" for="genderTransgender">Transgender</label>
                        </div>


                    </div>

                    <div class="col-sm-6">
                        <label for="subjectDob" class="form-label">Date of Birth</label>
                        <input id="subjectDob" name="subjectDob" type="text" class="form-control calendar" placeholder="dd/mm/yyyy" />
                    </div>

                </div>
                <hr>
                <div class="mb-3 d-flex justify-content-end">
                    <button type="button" class="btn btn-secondary me-2">Cancel</button>
                    {{-- <button type="submit" class="btn btn-primary">Proceed</a> --}}

                        <a href="{{ route('crf.visit') }}" class="btn btn-primary">Proceed</a>

                </div>
            </form>
            </div>
        </div>
    </div>
    <div class="col-sm-3"></div>
</div>

