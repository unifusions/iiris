<header class="p-3 row mb-3">
    <nav class="navbar navbar-light fixed-top">
        <div class="container ">
            <div class="d-flex align-items-center">
                <a href="{{ route('dashboard') }}" class="navbar-brand">
                    <span style="font-weight: 900;font-size:2rem;color:#000">
                        IIRIS
                    </span>

                </a>



                <ul class="nav  mb-2 justify-content-start mb-md-0">
                    <li><a href="{{ route('dashboard') }}" class="nav-link ">Dashboard</a></li>
                    <li></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            eCRF
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="{{ route('crf.index') }}" class="dropdown-item ">View All eCRF</a></li>
                            <li><a class="dropdown-item" href="{{ route('crf.create') }}">Add New CRF</a></li>

                        </ul>
                    </li>

                    @canany(['admin', 'sudo'])
                        <li><a href="{{ route('facility') }}" class="nav-link">Facility</a></li>

                    @endcan


                    {{-- <li><a href="{{ route('facility') }}" class="nav-link">Facility</a></li> --}}
                    <li><a href="{{ route('underconstruction') }}" class="nav-link">Logs</a></li>
                    <li><a href="{{ route('underconstruction') }}" class="nav-link">Queries</a></li>
                    <li><a href="{{ route('underconstruction') }}" class="nav-link">Reports</a></li>

                    @can('sudo')
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="sudoDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Super User
                            </a>

                            <ul class="dropdown-menu" aria-labelledby="sudoDropdown">
                                <li> <a href="{{ route('roles') }}" class="dropdown-item">Roles</a></li>
                                <li> <a href="{{ route('users') }}" class="dropdown-item">Users</a></li>

                            </ul>


                        </li>
                    @endcan

                </ul>
            </div>
            <div class="d-flex">
                <div class="dropdown ">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"
                            class="rounded-circle me-2">
                        {{ Auth::user()->name }}
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
                        <li><span class="dropdown-item text-gray">{{ Auth::user()->email }}</span></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>

                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <a class="dropdown-item" href="#" onclick="event.preventDefault();
                                    this.closest('form').submit();">{{ __('Sign Out') }}</a>
                            </form>

                        </li>
                    </ul>
                </div>
            </div>


        </div>
    </nav>
</header>
