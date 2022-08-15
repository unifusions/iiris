<?php

namespace App\Observers;

use App\Models\Log;
use App\Models\OperativeSymptoms;

class SymptomsObserver
{
    private function getFormType($data)
    {

        if (array_key_exists('pre_operative_data_id', $data)) {
            if ($data['pre_operative_data_id'] !== null)
                return  'Pre Operative';
        } elseif (array_key_exists('post_operative_data_id', $data)) {
            if ($data['post_operative_data_id'] !== null)
                return 'Post Operative';
        } elseif (array_key_exists('scheduled_visits_id', $data)) {
            if ($data['scheduled_visits_id'] !== null)
                return 'Scheduled Visit';
        } elseif (array_key_exists('unscheduled_visits_id', $data)) {
            if ($data['unscheduled_visits_id'] !== null)
                return 'Unscheduled Visit';
        } else {
            return 'default';
        }
    }
    public function updating(OperativeSymptoms $operativeSymptoms)
    {
       
        $original_data = $operativeSymptoms->getOriginal();
        $log_data = array();
        $log_data['data'] = array(
            'subject' => request()->input('subject'),
            'form' => $this->getFormType($original_data),
            'sub_form' => 'Symptoms'
        );
dd(request()->input());
        $log_data['type'] = 'Edit/Update';
        foreach (request()->input() as $key => $value) {
            if (array_key_exists($key, $original_data)) {


                if (strval($value) !== strval($original_data[$key])) {
               
                   
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
