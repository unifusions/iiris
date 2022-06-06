<div class="toast-container  position-fixed top-0 end-0 px-3" style="z-index: 3000;padding-top:4rem">

    <div id="alertToast" class="toast rounded-5 shadow-sm" data-bs-autohide="true" data-bs-delay=10000 role="alert"
        aria-live="assertive" aria-atomic="true">
        <div class="toast-header border-0">
            <span class="material-icons text-success me-2">task_alt</span>
            <span class="me-auto text-dark">Completed Successfully</span>
            {{-- <small>11 mins ago</small> --}}
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
            {{ $slot }}
           
        </div>
    </div>
</div>


<script>
    var toast = new bootstrap.Toast(document.getElementById('alertToast'))
    toast.show()
</script>
</div>
