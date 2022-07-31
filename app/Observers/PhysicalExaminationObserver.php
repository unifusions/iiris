<?php

namespace App\Observers;

use App\Models\CaseReportForm;
use App\Models\Log;
use App\Models\PhysicalExamination;

class PhysicalExaminationObserver
{
    public function updating(PhysicalExamination $physicalexamination)
    {
        $formType = '';
        $original_data = $physicalexamination->getOriginal();
        $log_data = array();
        
        if ($original_data['pre_operative_data_id'] !== null)
            $formType = 'Pre Operative';
        elseif ($original_data->post_operative_data_id !== null)
            $formType = 'Post Operative';
        elseif ($original_data->scheduled_visits_id !== null)
            $formType = 'Scheduled Visit';
        elseif ($original_data->unscheduled_visits_id !== null)
            $formType = 'Unscheduled Visit';

       
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
}
