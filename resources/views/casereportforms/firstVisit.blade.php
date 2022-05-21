

<ul class="nav nav-tabs">
    <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#tab1" role="tab" data-bs-toggle="tab" aria-controls="tab1"
            aria-selected="true">Pre-Operative Data</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="#tab2" role="tab" data-bs-toggle="tab" aria-controls="tab2">Intra-Operative
            Data</a>
    </li>
    <li class="nav-item">
        <a class="nav-link " href="#tab3" role="tab" data-bs-toggle="tab" aria-controls="tab3">Post-Operative Data</a>
    </li>

</ul>


<div class="tab-content">

    @include('casereportforms.preOperative')

    @include('casereportforms.intraOperative')

    @include('casereportforms.postOperative')
</div>
