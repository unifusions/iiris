<x-guest-layout>
    <x-auth-card>
      

    </x-auth-card>

    
        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf


           
            {{-- <img class="mb-4" src="" alt="" width="72" height="57"> --}}
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            

            <div class="form-floating mb-3">
              <input id="email" type="email" name="email" class="form-control" placeholder="name@example.com"  required autofocus>
              <label for="floatingInput">Email address</label>
            </div>

            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" name="password" placeholder="Password" required>
              <label for="floatingPassword">Password</label>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                @if (Route::has('password.request'))
                    <a class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('password.request') }}">
                        {{ __('Forgot your password?') }}
                    </a>
                @endif

              
            </div>


            <x-button class="w-100 btn btn-lg btn-primary">
                {{ __('Log in') }}
            </x-button>

            
            

        </form>
</x-guest-layout>
