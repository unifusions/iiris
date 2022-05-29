<?php

namespace App\Providers;

use App\Models\CaseReportForm;
use App\Models\CaseReportFormVisit;
use App\Models\Roles;
use App\Observers\CaseReportFormObserver;
use App\Observers\CaseReportFormVisitObserver;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        $this->registerRolePolicy();
        
        Paginator::useBootstrapFive();

        CaseReportForm::observe(CaseReportFormObserver::class);
       
    }

    public function registerRolePolicy()
    {
        $allRoles = Roles::all();
        foreach ($allRoles as $role) {

            Gate::define($role->slug, function ($user) use ($role) {
                return $user->role_id == $role->id;

            });
        }
    }
}
