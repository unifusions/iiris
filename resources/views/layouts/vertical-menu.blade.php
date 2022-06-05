<ul class="nav flex-column mt-3">



    <li class="nav-item px-3 py-1 rounded-5">

        <a href="{{ route('dashboard') }}"
            class="d-flex nav-link  {{ request()->routeIs('dashboard') ? 'active' : '' }}">
       

              <svg xmlns="http://www.w3.org/2000/svg" class="me-3" height =24 width=24 fill="none" viewBox="0 0 24 24" stroke="grey" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>

              Dashboard</a>
    </li>

    <li class="nav-item px-3 py-1 rounded-5">

        <a href="{{ route('crf.index') }}" class="nav-link = {{ request()->routeIs('crf.index') ? 'active' : '' }}">
            <svg xmlns="http://www.w3.org/2000/svg"  class="me-3" height =24 width=24 fill="none" viewBox="0 0 24 24" stroke="grey" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            Case Report Forms</a>
    </li>

    <li class="nav-item px-3 py-1 rounded-5"><a href="{{-- route('underconstruction') --}}" class="nav-link ">
        <svg xmlns="http://www.w3.org/2000/svg"  class="me-3" height =24 width=24 fill="none" viewBox="0 0 24 24" stroke="grey" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>Logs</a></li>
    <li class="nav-item px-3 py-1 rounded-5"><a href="{{-- route('underconstruction') --}}" class="nav-link ">
        <svg xmlns="http://www.w3.org/2000/svg" class="me-3" height =24 width=24 fill="none" viewBox="0 0 24 24" stroke="grey" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>

            Queries</a></li>
    <li class="nav-item px-3 py-1 rounded-5"><a href="{{-- route('underconstruction') --}}" class="nav-link ">
        <svg xmlns="http://www.w3.org/2000/svg" class="me-3" height =24 width=24 fill="none" viewBox="0 0 24 24" stroke="grey" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Reports</a></li>
</ul>


@canany(['admin', 'sudo'])
    <hr class='m-3'>
    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Admins</span>

    </h6>
    <ul class="nav flex-column">


        <li class="nav-item px-3 py-1 rounded-5"><a href="{{ route('facility.index') }}" class="nav-link "><span
                    class="material-icons">
                    business
                </span>Facility</a></li>

        <li class="nav-item px-3 py-1 rounded-5"> <a href="{{-- route('users') --}}" class="nav-link "><span
                    class="material-icons">
                    person
                </span>Users</a></li>

    </ul>
@endcanany
@can('sudo')
    <hr class='m-3'>
    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
        <span>Super Admins</span>

    </h6>
    <ul class="nav flex-column">


        <li class="nav-item px-3 py-1 rounded-5"><a href="{{-- route('facility') --}}" class="nav-link "><span
                    class="material-icons">
                    business
                </span>Facility</a></li>


    </ul>
@endcan
