<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">

                <li class="breadcrumb-item active d-flex justify-content-between align-items-center" aria-current="page">
                    <span class="material-icons me-3">dashboard</span> <span> {{ 'Dashboard' }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>



    <div class="container my-3">

        @canany(['sudo', 'admin'])
            <div class="row  mt-3 d-flex">
                <div class="col-sm-4 flex-fill">
                    <div class="card shadow-sm rounded-5">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <span class="fw-normal fs-1 text-primary"> {{ $allcrfcount }}</span>
                                    <span class="fw-light fs-5">Case Report Forms</span>
                                    <span class="fs-6 text-muted">Overall Enrollments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="col-sm-4 flex-fill">
                    <div class="card  shadow-sm rounded-5">
                        <div class="card-body">
                            <div class="d-flex flex-column">
                                <div class="d-flex flex-column">
                                    <span class="fw-normal fs-1 text-primary ">{{ $scheduledVisitCount }}</span>
                                    <span class="fw-light fs-5 text-secondary">Scheduled Visits</span>

                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="fw-light text-dark me-3 ">Completed</span>
                                        <span class="fw-normal text-success">0</span>
                                    </div>

                                    <div>
                                        <span class="fw-light text-dark me-3">Drafts</span>
                                        <span class="fw-normal text-warning">0</span>
                                    </div>

                                    <div>
                                        <span class="fw-light text-dark me-3">Pending</span>
                                        <span class="fw-normal text-danger">0</span>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4 flex-fill">
                    <div class="card  shadow-sm rounded-5">
                        <div class="card-body">
                            <div class="d-flex flex-column">
                                <div class="d-flex flex-column">
                                    <span class="fw-normal fs-1 text-primary">{{ $unscheduledVisitCount }}</span>
                                    <span class="fw-light fs-5 text-secondary">Unscheduled Visits</span>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="fw-light text-dark">Completed</span>
                                        <span class="fw-normal text-success">0</span>
                                    </div>

                                    <div>
                                        <span class="fw-light text-dark">Drafts</span>
                                        <span class="fw-normal text-warning">0</span>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        @endcanany

        @canany(['investigator', 'coordinator'])
            <div class="container mt-3">
                <div class="row d-flex">
                    <div class="col-sm-3 flex-fill">
                        <div class="card  shadow-sm rounded-5">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-column">
                                        <span class="fw-normal fs-1 text-primary"> {{ $allcrfcount ?? '' }}</span>
                                        <span class="fw-light fs-5 text-secondary">Case Report Forms</span>
                                        <span class="fs-6 text-muted">Overall Enrollments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 flex-fill">
                        <div class="card  shadow-sm rounded-5">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex flex-column">
                                        <span class="fw-normal fs-1 text-info"> {{ $crfcount ?? '' }}</span>
                                        <span class="fw-light fs-5 text-secondary">Case Report Forms</span>
                                        <span class="fs-6 text-muted">from {{ auth()->user()->facility->name }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 flex-fill">
                        <div class="card  shadow-sm rounded-5">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <div class="d-flex flex-column">
                                        <span class="fw-normal fs-1 text-primary ">{{ $scheduledVisitCount ?? '' }}</span>
                                        <span class="fw-light fs-5 text-secondary">Scheduled Visits</span>

                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="fw-light text-dark">Completed</span>
                                            <span class="fw-normal text-success">0</span>
                                        </div>

                                        <div>
                                            <span class="fw-light text-dark">Drafts</span>
                                            <span class="fw-normal text-warning">0</span>
                                        </div>

                                        <div>
                                            <span class="fw-light text-dark">Pending</span>
                                            <span class="fw-normal text-danger">0</span>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 flex-fill">
                        <div class="card  shadow-sm rounded-5">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <div class="d-flex flex-column">
                                        <span class="fw-normal fs-1 text-primary">{{ $unscheduledVisitCount ?? '' }}</span>
                                        <span class="fw-light fs-5 text-secondary">Unscheduled Visits</span>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div>
                                            <span class="fw-light text-dark">Completed</span>
                                            <span class="fw-normal text-success">0</span>
                                        </div>

                                        <div>
                                            <span class="fw-light text-dark">Drafts</span>
                                            <span class="fw-normal text-warning">0</span>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        @endcanany



    </div>


</x-app-layout>
