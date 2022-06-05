<!--Main Navigation-->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


{{-- @livewireStyles --}}

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel=" stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">




<!-- Styles -->
<link rel="stylesheet" href="{{ asset('css/app.css') }}">


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>



<script src="{{ asset('js/app.js') }}" defer></script>
<!-- Scripts -->


<style>

</style>

<header>
    <!-- Sidebar -->
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
            @include('layouts.vertical-menu')
        </div>
    </nav>
    <!-- Sidebar -->

    <!-- Navbar -->
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <div class="navbarHeader">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="material-icons">menu_open</span>
            </button>

            <!-- Brand -->
            <a class="navbar-brand" href="{{ route('home') }}">
                <img src="{{ asset('images/iiris-logo.png') }}" height="34" alt="" loading="lazy" />
            </a>
            </div>
            
            <!-- Search form -->
            <div class="">

                {{ $header }}


            </div>
            <!-- Right links -->
            <ul class="navbar-nav ms-auto d-flex flex-row">

                <!-- Avatar -->

                <li class="nav-item dropdown">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {{-- <span class="user-dropdown bg-success text-white p-2 m-2">{{Auth::user()->name ? (Str::ucfirst(substr(Auth::user()->name, 0, 1))) : ''  }}</span> --}}
                        <span class="fw-bold"> {{ Auth::user()->name ?? '' }}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end text-small" aria-labelledby="dropdownUser1" style="">
                        <li><span class="dropdown-item text-gray">{{ Auth::user()->email ?? '' }}</span></li>
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
                </li>
            </ul>
        </div>
        <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</header>
<!--Main Navigation-->

@if (session('message'))
    <x-toast-notification>
        <x-slot name="type"> {{ session('type') }}</x-slot>{{ session('message') }}

    </x-toast-notification>
@endif
<!--Main layout-->
<main>


    {{ $slot }}


</main>


<!--Main layout-->
