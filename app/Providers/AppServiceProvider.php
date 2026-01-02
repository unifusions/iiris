<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use App\Models\CaseReportForm;
use App\Models\CaseReportFormVisit;
use App\Models\LabInvestigation;
use App\Models\OperativeSymptoms;
use App\Models\PhysicalExamination;
use App\Models\PreOperativeData;
use App\Models\Roles;
use App\Observers\CaseReportFormObserver;
use App\Observers\CaseReportFormVisitObserver;
use App\Observers\LabInvestigationObserver;
use App\Observers\PhysicalExaminationObserver;
use App\Observers\PreOperativeDataObserver;
use App\Observers\SymptomsObserver;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Gate;
 
use Inertia\Inertia;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        $this->registerRolePolicy();

        Paginator::useBootstrapFive();

        CaseReportForm::observe(CaseReportFormObserver::class);
        // PreOperativeData::observe(PreOperativeDataObserver::class);
        PhysicalExamination::observe(PhysicalExaminationObserver::class);
        //    OperativeSymptoms::observe(SymptomsObserver::class);
        LabInvestigation::observe(LabInvestigationObserver::class);

    }

    public function registerRolePolicy()
    {
        $allRoles = Roles::all();
        foreach ($allRoles as $role) {

            Gate::define($role->slug, function ($user) use ($role) {
                return $user->role_id == $role->id;
            });
        }

        Inertia::share([
            'roles' => function () {
                $user = auth()->user();
                return $user ?
                    [
                        'admin' => $user->can('admin'),
                        'investigator' => $user->can('investigator'),
                        'coordinator' => $user->can('coordinator'),
                        'sudo' => $user->can('sudo'),
                        'reviewer' => $user->can('reviewer')
                    ]

                    : null;
            }
        ]);
    }
}
