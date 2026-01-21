<?php

namespace App\Observers;

use App\Models\CaseReportForm;
use App\Models\Log;
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
    public function updating(PreOperativeData $preOperativeData)
    {
        $original_data = $preOperativeData->getOriginal();
        $formType = '';
        if ($original_data['pre_operative_data_id'] !== null)
            $formType = 'Pre Operative';
        elseif ($original_data->post_operative_data_id !== null)
            $formType = 'Post Operative';
        elseif ($original_data->scheduled_visits_id !== null)
            $formType = 'Scheduled Visit';
        elseif ($original_data->unscheduled_visits_id !== null)
            $formType = 'Unscheduled Visit';

        $log_data = array();
        $log_data['data'] = array(
            'subject' => request()->input('subject'),
            'form' => $formType,
            'sub_form' => 'Physical Examination'
        );

        $log_data['type'] = 'Edit/Update';
        foreach (request()->input() as $key => $value) {
            if (array_key_exists($key, $original_data)) {
                if ($original_data[$key] !== $value) {
                    $log_data['fields'][] = array(
                        'field_name' => $key,
                        'new_value' => $value,
                        'old_value' => $original_data[$key]
                    );
                }
            }
        }
        Log::Create(['logdata' => $log_data]);
    }
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
