<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'IIRIS') }}</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    @livewireStyles

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap"" rel=" stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">




    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Scripts -->



    @livewireScripts
</head>

{{-- <body class="d-flex flex-column h-100"> --}}

<body>
    {{-- @include('layouts.navigation') --}}
    <header class="navbar sticky-top bg-white flex-md-nowrap p-0 align-items-baseline">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 bg-dark" href="{{ route('dashboard') }} "> <img
                src="{{ asset('images/iiris-logo.png') }}" height=35px /></a>



        <div class="d-flex flex-grow-1 ">
            <div class="d-flex ms-4">
                {{ $header ?? '' }}
            </div>


        </div>


        <div class="navbar ">

            <div class="d-flex px-4">
                <div class="dropdown ">
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
                </div>
            </div>


        </div>
    </header>



    <div class="container-fluid">
        <div class="row g-3">
            <div class="col-md-2 d-md-block bg-dark sidebar shadow">
                @include('layouts.vertical-menu')
            </div>


            <main class="col-md-10  ms-sm-auto px-0 d-flex flex-column ">

                <section class="container-fluid mt-3 mb-5">


                    {{ $slot }}

                </section>

                
                    @include('layouts.footer')
                
               

            </main>


        </div>
    </div>







</body>

</html>


</html>
