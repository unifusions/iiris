<x-app-layout>

    <x-slot name="header">
        <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
               
                <li class="breadcrumb-item active d-flex justify-content-between align-items-center" aria-current="page"><span class="material-icons me-3">dashboard</span> <span> {{ 'Dashboard' }}</span>
                </li>
            </ol>
        </nav>
    </x-slot>



    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">

                    @can('sudo')
                        sudo
                    @elsecan('investigator')
                        investigator
                    @elsecan('coordinator')
                        coordinator
                    @elsecan('admin')
                        admin
                    @endcan

                </div>
            </div>
        </div>
    </div>
</x-app-layout>
