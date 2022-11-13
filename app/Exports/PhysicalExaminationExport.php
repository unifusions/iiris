<?php

namespace App\Exports;

use App\Models\PhysicalExamination;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

use function PHPUnit\Framework\isEmpty;
use function PHPUnit\Framework\isNull;

class PhysicalExaminationExport implements FromQuery, WithHeadings, WithMapping
{
    use Exportable;
    private $row = 0;
    public function query()
    {
        return PhysicalExamination::query();
    }

    public function headings(): array
    {

        return [



            '#',
            'Subject ID',
            'Visit',
           
            'Height',
            'Weight',
            'Body Surface Area',
            'Heart Rate',
            'Systolic BP',
            'Diastolic BP',




        ];
    }

    public function map($physicalexamination): array
    {   
        // dd($physicalexamination->post_operative_data_id);
        // $visit = !isNull($physicalexamination->pre_operative_data_id) ?: 'Preoperative';
        // $visit = !isNull($physicalexamination->post_operative_data_id) ?: 'Postoperative';

        if($physicalexamination->pre_operative_data_id  !== null){
            $visit  = 'Preoperative';
            $subject_id = $physicalexamination->preoperative->casereportform->subject_id;
        }
        
        if($physicalexamination->post_operative_data_id  !== null){
            $visit  = 'Postoperative';
            $subject_id = $physicalexamination->postoperative->casereportform->subject_id;
        }
        
        return [
            
                ++$this->row,
                $subject_id,
                $visit,
                $physicalexamination->height,
                $physicalexamination->weight,
                $physicalexamination->bsa,
                $physicalexamination->heart_rate,
                $physicalexamination->systolic_bp,
                
            

        ];
    }
}
