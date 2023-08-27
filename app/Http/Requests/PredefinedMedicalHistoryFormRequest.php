<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PredefinedMedicalHistoryFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'pre_operative_data_id' => 'required',
            'hasMedHis' => 'boolean|nullable',
            'diabetes_mellitus' => 'boolean|nullable',
            'diabetes_mellitus_duration' => 'string|nullable',
            'diabetes_mellitus_treatment' => 'boolean|nullable',
            'hypertension' => 'boolean|nullable',
            'hypertension_duration'=> 'string|nullable',
            'hypertension_treatment' => 'boolean|nullable',
            'copd' => 'boolean|nullable',
            'copd_duration'=> 'string|nullable',
            'copd_treatment' => 'boolean|nullable',
            'respiratory_failure' => 'boolean|nullable',
            'respiratory_failure_duration'=> 'string|nullable',
            'respiratory_failure_treatment' => 'boolean|nullable',
            'stroke' => 'boolean|nullable',
            'stroke_duration'=> 'string|nullable',
            'stroke_treatment' => 'boolean|nullable',
            'peripheral_vascular_disease' => 'boolean|nullable',
            'peripheral_vascular_disease_duration'=> 'string|nullable',
            'peripheral_vascular_disease_treatment' => 'boolean|nullable',
            'others' => 'boolean|nullable',
            'others_specify'=> 'string|nullable',
            'others_duration'=> 'string|nullable',
            'others_treatment' => 'boolean|nullable',
        ];
    }
}
