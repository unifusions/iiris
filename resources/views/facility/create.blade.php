<x-app-layout>
     <x-slot name="header">
          <nav aria-label="breadcrumb d-flex align-items-center">
              <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                      <a href="{{ route('dashboard') }}">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item">
                       <a href="{{ route('facility.index') }}">Facilities</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page"> <span>
                          {{ 'New Facility' }}</span>
                  </li>
              </ol>
          </nav>
      </x-slot>

      <div class="container">
          <form action="{{ route('facility.store') }}" method="POST">
               @csrf
                <div class="card shadow">
                    
                          <div class="card-header">
                               <h4>Add New Facility/Institution</h4>
                          </div>
                          <div class="card-body">
                               <div class="row mb-3">
                                    <div class="col-sm-2 col-form-label">Facility/Institution Name</div>
                                    <div class="col-sm-6">
                                        <div class="input-group">
                                             <input type="text" class="form-control" name="facilityName">
                                        </div>
                                    </div>
                               </div>

                               <div class="row">
                                   <div class="col-sm-2 col-form-label">Address</div>
                                   <div class="col-sm-6">
                                        <div class="d-flex flex-column">
                                             <div class="input-group mb-2">
                                                  <input type="text" class="form-control" name="address_line_1" placeholder="Address Line 1">
                                             </div>

                                             <div class="input-group mb-2">
                                                  <input type="text" class="form-control" name="address_line_2" placeholder="Address Line 2">
                                             </div>

                                             <div class="input-group mb-2">
                                                  <input type="text" class="form-control" name="city" placeholder="City">
                                             </div>

                                             <div class="input-group mb-2">
                                                  <input type="text" class="form-control" name="state" placeholder="State">
                                             </div>

                                             <div class="input-group mb-2">
                                                  <input type="text" class="form-control" name="pin_code" placeholder="Pin Code">
                                             </div>

                                        </div>
                                     
                                   </div>
                              </div>

                          </div>
                          <div class="card-footer">
                               <button class="btn btn-primary">Add Facility</button>
                          </div>
                     
                </div>
               </form>
      </div>
     

      
</x-app-layout>