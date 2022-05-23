<div class="position-sticky pt-3">
    <ul class="nav flex-column">


        <li class="nav-item">

            <a href="{{-- route('dashboard') --}}" class="d-flex nav-link">
                <span class="material-icons ">
                    space_dashboard
                </span>Dashboard</a>
        </li>

        <li class="nav-item">
          
            <a href="{{ route('crf') }}" class="nav-link">
              <span class="material-icons">
                description
                </span>
              Case Report Forms</a>
        </li>

        <li  class="nav-item"><a href="{{-- route('underconstruction') --}}" class="nav-link"><span class="material-icons">
          list
          </span>Logs</a></li>
        <li  class="nav-item"><a href="{{-- route('underconstruction') --}}" class="nav-link"><span class="material-icons">
          help_outline
          </span>
          Queries</a></li>
        <li  class="nav-item"><a href="{{-- route('underconstruction') --}}" class="nav-link">
          <span class="material-icons">
            equalizer
            </span>Reports</a></li>
    </ul>
    
        

        
        <hr class='m-3'>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Super Admins</span>
         
        </h6>
        <ul class="nav flex-column">
          

            <li class="nav-item"><a href="{{-- route('facility') --}}" class="nav-link"><span class="material-icons">
              business
              </span>Facility</a></li>   
                <li class="nav-item"> <a href="{{-- route('roles') --}}" class="nav-link"><span class="material-icons">
                  key
                  </span>Roles</a></li>
                <li class="nav-item"> <a href="{{-- route('users') --}}" class="nav-link"><span class="material-icons">
                  person
                  </span>Users</a></li>

        </ul>


     


    </ul>







    </ul>
</div>
