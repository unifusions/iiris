<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('intra_operative_data', function (Blueprint $table) {
            
            


            $table->string('major_paravalvular_leak')->after('case_report_form_id')->nullable();
            $table->string('all_paravalvular_leak')->after('case_report_form_id')->nullable();
            $table->string('concomitant_procedure')->after('case_report_form_id')->nullable();
            $table->string('acc_time')->after('case_report_form_id')->nullable();
            $table->string('tcb_time')->after('case_report_form_id')->nullable();
            $table->string('annular_suturing_others')->after('case_report_form_id')->nullable();
            $table->string('annular_suturing_technique')->after('case_report_form_id')->nullable();
            $table->string('aortotomy_others')->after('case_report_form_id')->nullable();
            $table->string('aortotomy')->after('case_report_form_id')->nullable();
            $table->string('cardioplegia')->after('case_report_form_id')->nullable();
            $table->string('venous_cannulation')->after('case_report_form_id')->nullable();
            $table->string('arterial_cannulation')->after('case_report_form_id')->nullable();
            $table->date('date_of_procedure')->after('case_report_form_id')->nullable();

            $table->boolean('is_submitted')->after('visit_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('intra_operative_data', function (Blueprint $table) {
            //
        });
    }
};
