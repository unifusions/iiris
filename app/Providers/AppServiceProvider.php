<?php

namespace App\Providers;

use App\Models\CaseReportForm;
use App\Models\LabInvestigation;
use App\Models\PhysicalExamination;
use App\Models\Roles;
use App\Observers\CaseReportFormObserver;
use App\Observers\LabInvestigationObserver;
use App\Observers\PhysicalExaminationObserver;
use Carbon\CarbonImmutable;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
    //   $this->registerRolePolicy();

     
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureDefaults();
           Paginator::useBootstrapFive();

        CaseReportForm::observe(CaseReportFormObserver::class);
        // PreOperativeData::observe(PreOperativeDataObserver::class);
        PhysicalExamination::observe(PhysicalExaminationObserver::class);
        //    OperativeSymptoms::observe(SymptomsObserver::class);
        LabInvestigation::observe(LabInvestigationObserver::class);

    }

    protected function configureDefaults(): void
    {
        Date::use(CarbonImmutable::class);

        DB::prohibitDestructiveCommands(
            app()->isProduction(),
        );

        Password::defaults(fn (): ?Password => app()->isProduction()
            ? Password::min(12)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()
            : null
        );
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
