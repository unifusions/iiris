<?php

namespace App\Exports;

use App\Models\CaseReportForm;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class CaseReportFormExport implements FromQuery, WithHeadings, WithMapping
{

    use Exportable;
    private $row = 0;
    public function query()
    {
        return CaseReportForm::query();
    }

    protected function duration($dur)
    {

        $years = $dur['years'] ?? 0;
        $months = $dur['months'] ?? 0;
        $days = $dur['days'] ?? 0;
        $monthsToDays = $months * 30;
        $yearsToDays = $years * 365;
        return $days + $monthsToDays + $yearsToDays;
    }
    public function headings(): array
    {

        return [

            '#',
            'Protocol Number',
            'Date of Consent',
            'UHID',
            'DOB',
            'Age',
            'Gender',

            'Height',
            'Weight',
            'Body Surface Area',
            'Heart Rate',
            'Systolic BP',
            'Diastolic BP',

            'Angina on Exertion', 'Angina Class', 'Angina Duration',
            'Dyspnea on Exertion', 'Class', 'Duration',
            'Syncope',  'Duration',
            'Palpitation', 'Duration',
            'Giddiness',  'Duration',
            'Fever',  'Duration',
            'Heart Failure Admission',  'Duration',
            'Others', 'Others Specify', 'Duration',

            'Smoking', 'Quantity', 'Since', 'Stopped',
            'Drinking', 'Quantity', 'Since', 'Stopped',
            'Tobacco', 'Type', 'Quantity', 'Since', 'Stopped',

            'Date of Investigation',
            'Red Blood Cell (RBC)',
            'White Blood Cell (WBC)',
            'Hemoglobin',
            'Hematocrit',
            'Platelet Count',
            'Blood Urea',
            'Serum Creatinine',
            'Alanine Transaminase (ALT)',
            'Aspartate Transaminase (AST)',
            'Alkaline Phosphatase (ALP)',
            'Albumin',
            'Total Protein',
            'Bilirubin',
            'Prothrombin Time(PT) INR',

            'Date of Investigation',
            'Rhythm',
            'Others',
            'Rate',
            'LVH',
            'LV Strain',
            'PR Interval',
            'QRS Duration',

            'Date of Investigation',
            'Peak Velocity',
            'Velocity Time Integral(Aortic Valve)',
            'Peak Gradient',
            'Mean Gradient',
            'Heart Rate',
            'Stroke Volume',
            'DVI',
            'Effective Orifice Area (EOA)',
            'Acceleration Time',
            'LVOT VTI',
            'LV Mass',
            'IVS Diastole',
            'PW Diastole',
            'LVID-End Systole',
            'LVID-End Diastole',
            'Ejection Fraction',

            'Date of Review',
            'Peak Velocity', 'Normality', 'Abnormal',
            'Velocity Time Integral(Aortic Valve)', 'Normality', 'Abnormal',
            'Peak Gradient', 'Normality', 'Abnormal',
            'Mean Gradient', 'Normality', 'Abnormal',
            'Heart Rate', 'Normality', 'Abnormal',
            'Stroke Volume', 'Normality', 'Abnormal',
            'DVI', 'Normality', 'Abnormal',
            'Effective Orifice Area (EOA)', 'Normality', 'Abnormal',
            'Acceleration Time', 'Normality', 'Abnormal',
            'LVOT VTI', 'Normality', 'Abnormal',
            'LV Mass', 'Normality', 'Abnormal',
            'IVS Diastole', 'Normality', 'Abnormal',
            'PW Diastole', 'Normality', 'Abnormal',
            'LVID-End Systole', 'Normality', 'Abnormal',
            'LVID-End Diastole', 'Normality', 'Abnormal',
            'Ejection Fraction', 'Normality', 'Abnormal',

            'Date of Procedure',
            'Arterial Cannulation',
            'Venous Cannulation',
            'Cardioplegia',
            'Aortotomy', 'Others',
            'Annular Suturing Technique', 'Others',
            'Total Cardiopulmonary Bypass Time',
            'Aortic Cross Clamp Time',
            'Concomitant Procedure',
            'All Paravalvular Leak', 'If Yes, specify',
            'Major Paravalvular Leak', 'If Yes, specify',

            'Heart Rate',
            'Systolic BP',
            'Diastolic BP',

            'Angina on Exertion', 'Class', 'Duration',
            'Dyspnea on Exertion', 'Class', 'Duration',
            'Syncope', 'Duration',
            'Palpitation', 'Duration',
            'Giddiness', 'Duration',
            'Fever', 'Duration',
            'Heart Failure Admission', 'Duration',
            'Others', 'Others Specify', 'Duration',

            'Date of Investigation',
            'Red Blood Cell (RBC)',
            'White Blood Cell (WBC)',
            'Hemoglobin',
            'Hematocrit',
            'Platelet Count',
            'Blood Urea',
            'Serum Creatinine',
            'Alanine Transaminase (ALT)',
            'Aspartate Transaminase (AST)',
            'Alkaline Phosphatase (ALP)',
            'Albumin',
            'Total Protein',
            'Bilirubin',
            'Prothrombin Time(PT) INR',

            'Date of Investigation',
            'Rhythm',
            'Others',
            'Rate',
            'LVH',
            'LV Strain',
            'PR Interval',
            'QRS Duration',

            'Date of Investigation',
            'Peak Velocity',
            'Velocity Time Integral(Aortic Valve)',
            'Peak Gradient',
            'Mean Gradient',
            'Heart Rate',
            'Stroke Volume',
            'DVI',
            'Effective Orifice Area (EOA)',
            'Acceleration Time',
            'LVOT VTI',
            'LV Mass',
            'IVS Diastole',
            'PW Diastole',
            'LVID-End Systole',
            'LVID-End Diastole',
            'Ejection Fraction',

            'Date of Review',
            'Peak Velocity', 'Normality', 'Abnormal',
            'Velocity Time Integral(Aortic Valve)', 'Normality', 'Abnormal',
            'Peak Gradient', 'Normality', 'Abnormal',
            'Mean Gradient', 'Normality', 'Abnormal',
            'Heart Rate', 'Normality', 'Abnormal',
            'Stroke Volume', 'Normality', 'Abnormal',
            'DVI', 'Normality', 'Abnormal',
            'Effective Orifice Area (EOA)', 'Normality', 'Abnormal',
            'Acceleration Time', 'Normality', 'Abnormal',
            'LVOT VTI', 'Normality', 'Abnormal',
            'LV Mass', 'Normality', 'Abnormal',
            'IVS Diastole', 'Normality', 'Abnormal',
            'PW Diastole', 'Normality', 'Abnormal',
            'LVID-End Systole', 'Normality', 'Abnormal',
            'LVID-End Diastole', 'Normality', 'Abnormal',
            'Ejection Fraction', 'Normality', 'Abnormal',

            'Structural valve deterioration', 'Date', 'Comments',
            'Valve Thrombosis', 'Date', 'Comments',
            'All Paravalvular Leak', 'Date', 'Comments',
            'Major Paravalvular Leak', 'Date', 'Comments',
            'Non-structural Valve Deterioration', 'Date', 'Comments',
            'Thromboembolism', 'Date', 'Comments',
            'All Bleeding/Hemorrhage', 'Date', 'Comments',
            'Major Bleeding/Hemorrhage', 'Date', 'Comments',
            'Endocarditis', 'Date', 'Comments',
            'All-cause Mortality', 'Date', 'Comments',
            'Valve-related Mortality', 'Date', 'Comments',
            'Valve-related reoperation', 'Date', 'Comments',
            'Explant', 'Haemolysis', 'Date', 'Comments',
            'Sudden Unexplained Death', 'Date', 'Comments',
            'Cardiac Death', 'Date', 'Comments',
        ];
    }

    public function map($crf): array
    {
        //    dd($crf->preoperatives->physicalexaminations->height);
        $preoperative = $crf->preoperatives;
        $intraoperative = $crf->intraoperatives;
        $postoperative = $crf->postoperatives;
        $scheduledvisit = $crf->scheduledvisits;
        return [
            [
                ++$this->row,
                "2021-04",
                Carbon::parse($crf->date_of_consent)->format('d/m/Y'),
                $crf->uhid,
                Carbon::parse($crf->date_of_birth)->format('d/m/Y'),
                Carbon::createFromDate($crf->date_of_birth)->diffInYears(Carbon::now()),
                $crf->gender,

                $preoperative->physicalexaminations->height ?? 'NA',
                $preoperative->physicalexaminations->weight ?? 'NA',
                $preoperative->physicalexaminations->bsa ?? 'NA',
                $preoperative->physicalexaminations->heart_rate ?? 'NA',
                $preoperative->physicalexaminations->systolic_bp ?? 'NA',
                $preoperative->physicalexaminations->diastolic_bp ?? 'NA',

                $preoperative->symptoms->angina ?? 'NA',
                $preoperative->symptoms->angina_class ?? 'NA',
                !empty($preoperative->symptoms->angina_duration) ? $this->duration($preoperative->symptoms->angina_duration) : '',

                $preoperative->symptoms->dyspnea ?? 'NA',
                $preoperative->symptoms->dyspnea_class ?? 'NA',
                !empty($preoperative->symptoms->dyspnea_duration) ? $this->duration($preoperative->symptoms->dyspnea_duration) : '',

                // $preoperative->symptoms->dyspnea_duration?? 'NA',

                $preoperative->symptoms->syncope ?? 'NA',
                $preoperative->symptoms->syncope_duration ?? 'NA',

                $preoperative->symptoms->palpitation ?? 'NA',
                $preoperative->symptoms->palpitation_duration ?? 'NA',
                $preoperative->symptoms->giddiness ?? 'NA',
                $preoperative->symptoms->giddiness_duration ?? 'NA',
                $preoperative->symptoms->fever ?? 'NA',
                $preoperative->symptoms->fever_duration ?? 'NA',
                $preoperative->symptoms->heart_failure_admission ?? 'NA',
                $preoperative->symptoms->heart_failure_admission_duration ?? 'NA',
                $preoperative->symptoms->others ?? 'NA',
                $preoperative->symptoms->others_text ?? 'NA',
                $preoperative->symptoms->others_duration ?? 'NA',


                $preoperative->personalhistories->smoking ?? 'NA',
                $preoperative->personalhistories->cigarettes ?? 'NA',
                $preoperative->personalhistories->smoking_since ?? 'NA',
                $preoperative->personalhistories->smoking_stopped ?? 'NA',
                $preoperative->personalhistories->alchohol ?? 'NA',
                $preoperative->personalhistories->quantity ?? 'NA',
                $preoperative->personalhistories->alchohol_since ?? 'NA',
                $preoperative->personalhistories->alchohol_stopped ?? 'NA',
                $preoperative->personalhistories->tobacco ?? 'NA',
                $preoperative->personalhistories->tobacco_type ?? 'NA',
                $preoperative->personalhistories->tobacco_quantity ?? 'NA',
                $preoperative->personalhistories->tobacco_since ?? 'NA',
                $preoperative->personalhistories->tobacco_stopped ?? 'NA',

                $preoperative->labinvestigations->li_date ?? 'NA',
                $preoperative->labinvestigations->rbc ?? 'NA',
                $preoperative->labinvestigations->wbc ?? 'NA',
                $preoperative->labinvestigations->hemoglobin ?? 'NA',
                $preoperative->labinvestigations->hematocrit ?? 'NA',
                $preoperative->labinvestigations->platelet ?? 'NA',
                $preoperative->labinvestigations->blood_urea ?? 'NA',
                $preoperative->labinvestigations->serum_creatinine ?? 'NA',
                $preoperative->labinvestigations->alt ?? 'NA',
                $preoperative->labinvestigations->ast ?? 'NA',
                $preoperative->labinvestigations->alp ?? 'NA',
                $preoperative->labinvestigations->albumin ?? 'NA',
                $preoperative->labinvestigations->total_protein ?? 'NA',
                $preoperative->labinvestigations->bilirubin ?? 'NA',
                $preoperative->labinvestigations->pt_inr ?? 'NA',

                $preoperative->electrocardiograms->ecg_date ?? 'NA',
                $preoperative->electrocardiograms->rhythm ?? 'NA',
                $preoperative->electrocardiograms->rhythm_others ?? 'NA',
                $preoperative->electrocardiograms->rate ?? 'NA',
                $preoperative->electrocardiograms->lvh ?? 'NA',
                $preoperative->electrocardiograms->lvs ?? 'NA',
                $preoperative->electrocardiograms->printerval ?? 'NA',
                $preoperative->electrocardiograms->qrsduration ?? 'NA',

                $preoperative->echocardiographies->echodate  ?? 'NA',
                $preoperative->echocardiographies->peak_velocity ?? 'NA',
                $preoperative->echocardiographies->velocity_time_integral ?? 'NA',
                $preoperative->echocardiographies->peak_gradient ?? 'NA',
                $preoperative->echocardiographies->mean_gradient ?? 'NA',
                $preoperative->echocardiographies->heart_rate ?? 'NA',
                $preoperative->echocardiographies->stroke_volume ?? 'NA',
                $preoperative->echocardiographies->dvi ?? 'NA',
                $preoperative->echocardiographies->eoa ?? 'NA',
                $preoperative->echocardiographies->acceleration_time ?? 'NA',
                $preoperative->echocardiographies->lvot_vti ?? 'NA',
                $preoperative->echocardiographies->lv_mass ?? 'NA',
                $preoperative->echocardiographies->ivs_diastole ?? 'NA',
                $preoperative->echocardiographies->pw_diastole ?? 'NA',
                $preoperative->echocardiographies->lvidend_systole ?? 'NA',
                $preoperative->echocardiographies->lvidend_diastole ?? 'NA',
                $preoperative->echocardiographies->ejection_fraction ?? 'NA',

                $preoperative->echocardiographies->r_echodate  ?? 'NA',

                $preoperative->echocardiographies->r_peak_velocity ?? 'NA',
                $preoperative->echocardiographies->peak_velocity_normality ?? 'NA',
                $preoperative->echocardiographies->peak_velocity_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_velocity_time_integral ?? 'NA',
                $preoperative->echocardiographies->velocity_time_integral_normality ?? 'NA',
                $preoperative->echocardiographies->velocity_time_integral_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_peak_gradient ?? 'NA',
                $preoperative->echocardiographies->peak_gradient_normality ?? 'NA',
                $preoperative->echocardiographies->peak_gradient_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_mean_gradient ?? 'NA',
                $preoperative->echocardiographies->mean_gradient_normality ?? 'NA',
                $preoperative->echocardiographies->mean_gradient_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_heart_rate ?? 'NA',
                $preoperative->echocardiographies->heart_rate_normality ?? 'NA',
                $preoperative->echocardiographies->heart_rate_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_stroke_volume ?? 'NA',
                $preoperative->echocardiographies->stroke_volume_normality ?? 'NA',
                $preoperative->echocardiographies->stroke_volume_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_dvi ?? 'NA',
                $preoperative->echocardiographies->dvi_normality ?? 'NA',
                $preoperative->echocardiographies->dvi_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_eoa ?? 'NA',
                $preoperative->echocardiographies->eoa_normality ?? 'NA',
                $preoperative->echocardiographies->eoa_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_acceleration_time ?? 'NA',
                $preoperative->echocardiographies->acceleration_time_normality ?? 'NA',
                $preoperative->echocardiographies->acceleration_time_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_lvot_vti ?? 'NA',
                $preoperative->echocardiographies->lvot_vti_normality ?? 'NA',
                $preoperative->echocardiographies->lvot_vti_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_lv_mass ?? 'NA',
                $preoperative->echocardiographies->lv_mass_normality ?? 'NA',
                $preoperative->echocardiographies->lv_mass_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_ivs_diastole ?? 'NA',
                $preoperative->echocardiographies->ivs_diastole_normality ?? 'NA',
                $preoperative->echocardiographies->ivs_diastole_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_pw_diastole ?? 'NA',
                $preoperative->echocardiographies->pw_diastole_normality ?? 'NA',
                $preoperative->echocardiographies->pw_diastole_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_lvidend_systole ?? 'NA',
                $preoperative->echocardiographies->lvidend_systole_normality ?? 'NA',
                $preoperative->echocardiographies->lvidend_systole_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_lvidend_diastole ?? 'NA',
                $preoperative->echocardiographies->lvidend_diastole_normality ?? 'NA',
                $preoperative->echocardiographies->lvidend_diastole_abnormality ?? 'NA',

                $preoperative->echocardiographies->r_ejection_fraction ?? 'NA',
                $preoperative->echocardiographies->ejection_fraction_normality ?? 'NA',
                $preoperative->echocardiographies->ejection_fraction_abnormality ?? 'NA',




                $intraoperative->date_of_procedure ?? 'NA',
                $intraoperative->arterial_cannulation ?? 'NA',
                $intraoperative->venous_cannulation ?? 'NA',
                $intraoperative->cardioplegia ?? 'NA',
                $intraoperative->aortotomy ?? 'NA',
                $intraoperative->aortotomy_others ?? 'NA',
                $intraoperative->annular_suturing_technique ?? 'NA',
                $intraoperative->annular_suturing_others ?? 'NA',
                $intraoperative->tcb_time ?? 'NA',
                $intraoperative->acc_time ?? 'NA',
                $intraoperative->concomitant_procedure ?? 'NA',
                $intraoperative->all_paravalvular_leak ?? 'NA',
                $intraoperative->all_paravalvular_leak_specify ?? 'NA',
                $intraoperative->major_paravalvular_leak ?? 'NA',
                $intraoperative->major_paravalvular_leak_specify ?? 'NA',

                $postoperative->physicalexaminations->heart_rate ?? 'NA',
                $postoperative->physicalexaminations->systolic_bp ?? 'NA',
                $postoperative->physicalexaminations->diastolic_bp ?? 'NA',

                $postoperative->symptoms->angina ?? 'NA',
                $postoperative->symptoms->angina_class ?? 'NA',
                $postoperative->symptoms->angina_duration ?? 'NA',

                $postoperative->symptoms->dyspnea ?? 'NA',
                $postoperative->symptoms->dyspnea_class ?? 'NA',
                $postoperative->symptoms->dyspnea_duration ?? 'NA',
                $postoperative->symptoms->syncope ?? 'NA',
                $postoperative->symptoms->syncope_duration ?? 'NA',
                $postoperative->symptoms->palpitation ?? 'NA',
                $postoperative->symptoms->palpitation_duration ?? 'NA',
                $postoperative->symptoms->giddiness ?? 'NA',
                $postoperative->symptoms->giddiness_duration ?? 'NA',
                $postoperative->symptoms->fever ?? 'NA',
                $postoperative->symptoms->fever_duration ?? 'NA',
                $postoperative->symptoms->heart_failure_admission ?? 'NA',
                $postoperative->symptoms->heart_failure_admission_duration ?? 'NA',
                $postoperative->symptoms->others ?? 'NA',
                $postoperative->symptoms->others_text ?? 'NA',
                $postoperative->symptoms->others_duration ?? 'NA',



                $postoperative->labinvestigations->li_date ?? 'NA',
                $postoperative->labinvestigations->rbc ?? 'NA',
                $postoperative->labinvestigations->wbc ?? 'NA',
                $postoperative->labinvestigations->hemoglobin ?? 'NA',
                $postoperative->labinvestigations->hematocrit ?? 'NA',
                $postoperative->labinvestigations->platelet ?? 'NA',
                $postoperative->labinvestigations->blood_urea ?? 'NA',
                $postoperative->labinvestigations->serum_creatinine ?? 'NA',
                $postoperative->labinvestigations->alt ?? 'NA',
                $postoperative->labinvestigations->ast ?? 'NA',
                $postoperative->labinvestigations->alp ?? 'NA',
                $postoperative->labinvestigations->albumin ?? 'NA',
                $postoperative->labinvestigations->total_protein ?? 'NA',
                $postoperative->labinvestigations->bilirubin ?? 'NA',
                $postoperative->labinvestigations->pt_inr ?? 'NA',

                $postoperative->electrocardiograms->ecg_date ?? 'NA',
                $postoperative->electrocardiograms->rhythm ?? 'NA',
                $postoperative->electrocardiograms->rhythm_others ?? 'NA',
                $postoperative->electrocardiograms->rate ?? 'NA',
                $postoperative->electrocardiograms->lvh ?? 'NA',
                $postoperative->electrocardiograms->lvs ?? 'NA',
                $postoperative->electrocardiograms->printerval ?? 'NA',
                $postoperative->electrocardiograms->qrsduration ?? 'NA',

                $postoperative->echocardiographies->echodate ?? 'NA',
                $postoperative->echocardiographies->peak_velocity ?? 'NA',
                $postoperative->echocardiographies->velocity_time_integral ?? 'NA',
                $postoperative->echocardiographies->peak_gradient ?? 'NA',
                $postoperative->echocardiographies->mean_gradient ?? 'NA',
                $postoperative->echocardiographies->heart_rate ?? 'NA',
                $postoperative->echocardiographies->stroke_volume ?? 'NA',
                $postoperative->echocardiographies->dvi ?? 'NA',
                $postoperative->echocardiographies->eoa ?? 'NA',
                $postoperative->echocardiographies->acceleration_time ?? 'NA',
                $postoperative->echocardiographies->lvot_vti ?? 'NA',
                $postoperative->echocardiographies->lv_mass ?? 'NA',
                $postoperative->echocardiographies->ivs_diastole ?? 'NA',
                $postoperative->echocardiographies->pw_diastole ?? 'NA',
                $postoperative->echocardiographies->lvidend_systole ?? 'NA',
                $postoperative->echocardiographies->lvidend_diastole ?? 'NA',
                $postoperative->echocardiographies->ejection_fraction ?? 'NA',

                $postoperative->echocardiographies->r_echodate ?? 'NA',
                $postoperative->echocardiographies->r_peak_velocity ?? 'NA',
                $postoperative->echocardiographies->peak_velocity_normality ?? 'NA',
                $postoperative->echocardiographies->peak_velocity_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_velocity_time_integral ?? 'NA',
                $postoperative->echocardiographies->velocity_time_integral_normality ?? 'NA',
                $postoperative->echocardiographies->velocity_time_integral_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_peak_gradient ?? 'NA',
                $postoperative->echocardiographies->peak_gradient_normality ?? 'NA',
                $postoperative->echocardiographies->peak_gradient_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_mean_gradient ?? 'NA',
                $postoperative->echocardiographies->mean_gradient_normality ?? 'NA',
                $postoperative->echocardiographies->mean_gradient_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_heart_rate ?? 'NA',
                $postoperative->echocardiographies->heart_rate_normality ?? 'NA',
                $postoperative->echocardiographies->heart_rate_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_stroke_volume ?? 'NA',
                $postoperative->echocardiographies->stroke_volume_normality ?? 'NA',
                $postoperative->echocardiographies->stroke_volume_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_dvi ?? 'NA',
                $postoperative->echocardiographies->dvi_normality ?? 'NA',
                $postoperative->echocardiographies->dvi_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_eoa ?? 'NA',
                $postoperative->echocardiographies->eoa_normality ?? 'NA',
                $postoperative->echocardiographies->eoa_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_acceleration_time ?? 'NA',
                $postoperative->echocardiographies->acceleration_time_normality ?? 'NA',
                $postoperative->echocardiographies->acceleration_time_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_lvot_vti ?? 'NA',
                $postoperative->echocardiographies->lvot_vti_normality ?? 'NA',
                $postoperative->echocardiographies->lvot_vti_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_lv_mass ?? 'NA',
                $postoperative->echocardiographies->lv_mass_normality ?? 'NA',
                $postoperative->echocardiographies->lv_mass_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_ivs_diastole ?? 'NA',
                $postoperative->echocardiographies->ivs_diastole_normality ?? 'NA',
                $postoperative->echocardiographies->ivs_diastole_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_pw_diastole ?? 'NA',
                $postoperative->echocardiographies->pw_diastole_normality ?? 'NA',
                $postoperative->echocardiographies->pw_diastole_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_lvidend_systole ?? 'NA',
                $postoperative->echocardiographies->lvidend_systole_normality ?? 'NA',
                $postoperative->echocardiographies->lvidend_systole_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_lvidend_diastole ?? 'NA',
                $postoperative->echocardiographies->lvidend_diastole_normality ?? 'NA',
                $postoperative->echocardiographies->lvidend_diastole_abnormality ?? 'NA',

                $postoperative->echocardiographies->r_ejection_fraction ?? 'NA',
                $postoperative->echocardiographies->ejection_fraction_normality ?? 'NA',
                $postoperative->echocardiographies->ejection_fraction_abnormality ?? 'NA',

                $postoperative->safetyparameters->has_structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->date_structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->has_valve_thrombosis ?? 'NA',
                $postoperative->safetyparameters->date_valve_thrombosis ?? 'NA',
                $postoperative->safetyparameters->valve_thrombosis ?? 'NA',
                $postoperative->safetyparameters->has_all_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->date_all_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->all_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->has_major_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->date_major_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->major_paravalvular_leak ?? 'NA',
                $postoperative->safetyparameters->has_non_structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->date_non_structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->non_structural_value_deterioration ?? 'NA',
                $postoperative->safetyparameters->has_thromboembolism ?? 'NA',
                $postoperative->safetyparameters->date_thromboembolism ?? 'NA',
                $postoperative->safetyparameters->thromboembolism ?? 'NA',
                $postoperative->safetyparameters->has_all_bleeding ?? 'NA',
                $postoperative->safetyparameters->date_all_bleeding ?? 'NA',
                $postoperative->safetyparameters->all_bleeding ?? 'NA',
                $postoperative->safetyparameters->has_major_bleeding ?? 'NA',
                $postoperative->safetyparameters->date_major_bleeding ?? 'NA',
                $postoperative->safetyparameters->major_bleeding ?? 'NA',
                $postoperative->safetyparameters->has_endocarditis ?? 'NA',
                $postoperative->safetyparameters->date_endocarditis ?? 'NA',
                $postoperative->safetyparameters->endocarditis ?? 'NA',
                $postoperative->safetyparameters->has_all_mortality ?? 'NA',
                $postoperative->safetyparameters->date_all_mortality ?? 'NA',
                $postoperative->safetyparameters->all_mortality ?? 'NA',
                $postoperative->safetyparameters->has_valve_mortality ?? 'NA',
                $postoperative->safetyparameters->date_valve_mortality ?? 'NA',
                $postoperative->safetyparameters->valve_mortality ?? 'NA',
                $postoperative->safetyparameters->has_valve_related_operation ?? 'NA',
                $postoperative->safetyparameters->date_valve_related_operation ?? 'NA',
                $postoperative->safetyparameters->valve_related_operation ?? 'NA',
                $postoperative->safetyparameters->has_explant ?? 'NA',
                $postoperative->safetyparameters->date_explant ?? 'NA',
                $postoperative->safetyparameters->explant ?? 'NA',
                $postoperative->safetyparameters->has_haemolysis ?? 'NA',
                $postoperative->safetyparameters->date_haemolysis ?? 'NA',
                $postoperative->safetyparameters->haemolysis ?? 'NA',
                $postoperative->safetyparameters->has_sudden_unexplained_death ?? 'NA',
                $postoperative->safetyparameters->date_sudden_unexplained_death ?? 'NA',
                $postoperative->safetyparameters->sudden_unexplained_death ?? 'NA',
                $postoperative->safetyparameters->has_cardiac_death ?? 'NA',
                $postoperative->safetyparameters->date_cardiac_death ?? 'NA',
                $postoperative->safetyparameters->cardiac_death ?? 'NA',


            ],

        ];
    }
}
