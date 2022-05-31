<x-guest-layout>
    <x-auth-card>




        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="card shadow">
              <div class="card-body">
  {{-- <img class="mb-4" src="" alt="" width="72" height="57"> --}}
                
  <img src="{{ asset('images/iiris-logo.png') }}" height = "100px" alt="" class="img p-4">


  <div class="form-floating mb-3">
      <input id="email" type="email" name="email" class="form-control" placeholder="name@example.com"
          required autofocus>
      <label for="floatingInput">Email address</label>
  </div>

  <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" name="password"
          placeholder="Password" required>
      <label for="floatingPassword">Password</label>
  </div>

  {{-- <div class="checkbox mb-3">
      <label>
          <input type="checkbox" value="remember-me"> Remember me
      </label>
  </div>

  <div class="flex items-center justify-end mt-4">
      @if (Route::has('password.request'))
          <a class="underline text-sm text-gray-600 hover:text-gray-900"
              href="{{ route('password.request') }}">
              {{ __('Forgot your password?') }}
          </a>
      @endif


  </div> --}}


  <x-button class="w-50 btn btn-lg btn-primary">
      {{ __('Log in') }}
  </x-button>



              </div>
            </div>


          

        </form>
    </x-auth-card>

</x-guest-layout>
