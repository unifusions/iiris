<?php

namespace Database\Seeders;

use App\Models\PreOperativeData;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FieldsetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('pre_operative_data')->update(['id' => '1'],
        ['fieldsets' => ['physicalexamination', 'medicalhistory' ]]);
    }
}
p