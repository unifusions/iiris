<?php

namespace App\Exports;

use App\Models\CaseReportForm;
use Maatwebsite\Excel\Concerns\Exportable;

use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class UsersExport implements FromQuery, WithMapping, WithHeadings
{

    use Exportable;
    private $row = 0;
    public function query()
    {
        return CaseReportForm::query();
    }

    public function headings(): array
    {
        return [
            '#',
            'Protocol Number',
            'SUBJECT ID',
            'Physical Examination'
        ];
    }

    public function map($user): array
    {
       
        return [
            ++$this->row,
            "2021-04", 
            $user->subject_id,
        //    $user->scheduledvisits->visit_no
            // $user->scheduledvisits->map(function ($sv) {
            //     return [$sv->visit_no];
            // }),
        ];
    }
   
}
