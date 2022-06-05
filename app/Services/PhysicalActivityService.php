<?php

namespace App\Services;

use App\Models\PhysicalActivity;
use Illuminate\Http\Request;

class PhysicalActivityService
{
     public function createPreoperativePhysicalActivity(Request $request): PhysicalActivity
     {
          $physicalactivity = PhysicalActivity::Create([

               'pre_operative_data_id' => $request->preoperative->id,
               'activity_type' => $request->activity_type,
               'duration' => $request->duration,

          ]);

          return $physicalactivity;
     }

     public function updatePreoperativeLabInvestigation(Request $request, PhysicalActivity $physicalactivity): PhysicalActivity
     {
          $physicalactivity->activity_type = $request->activity_type;
          $physicalactivity->duration = $request->duration;

          $physicalactivity->save();

          return $physicalactivity;
     }
}
