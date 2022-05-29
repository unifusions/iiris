<div class="toast-container  position-fixed top-0 end-0 py-5 px-3" style="z-index: 3000">

    <div id="liveToast" class="toast bg-{{ $type }} text-white" data-bs-autohide="true" data-bs-delay=2000
        role="alert" aria-live="assertive" aria-atomic="true">

        <div class="toast-body text-end">
            {{ $slot }}
        </div>
    </div>

    <script>
        var toast = new bootstrap.Toast(document.getElementById('liveToast'))

        toast.show()
    </script>
</div>
