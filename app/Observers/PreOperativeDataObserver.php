<?php

namespace App\Observers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;

class PreOperativeDataObserver
{
    /**
     * Handle the PreOperativeData "created" event.
     *
     * @param  \App\Models\PreOperativeData  $preOperativeData
     * @return void
     */
    public function created(PreOperativeData $preOperativeData)
    {
    }

    /**
     * Handle the PreOperativeData "updated" event.
     *
     * @param  \App\Models\PreOperativeData  $preOperativeData
     * @return void
     */
    public function updated(PreOperativeData $preOperativeData)
    {
    }

    /**
     * Handle the PreOperativeData "deleted" event.
     *
     * @param  \App\Models\PreOperativeData  $preOperativeData
     * @return void
     */
    public function deleted(PreOperativeData $preOperativeData)
    {
        //
    }

    /**
     * Handle the PreOperativeData "restored" event.
     *
     * @param  \App\Models\PreOperativeData  $preOperativeData
     * @return void
     */
    public function restored(PreOperativeData $preOperativeData)
    {
        //
    }

    /**
     * Handle the PreOperativeData "force deleted" event.
     *
     * @param  \App\Models\PreOperativeData  $preOperativeData
     * @return void
     */
    public function forceDeleted(PreOperativeData $preOperativeData)
    {
        //
    }
}
