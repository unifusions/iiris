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
        Schema::table('safety_parameters', function (Blueprint $table) {

            $table->date('date_structural_value_deterioration')->after('has_structural_value_deterioration')->nullable();
            $table->date('date_valve_thrombosis')->after('has_valve_thrombosis')->nullable();
            $table->date('date_all_paravalvular_leak')->after('has_all_paravalvular_leak')->nullable();
            $table->date('date_major_paravalvular_leak')->after('has_major_paravalvular_leak')->nullable();
            $table->date('date_non_structural_value_deterioration')->after('has_non_structural_value_deterioration')->nullable();
            $table->date('date_thromboembolism')->after('has_thromboembolism')->nullable();
            $table->date('date_all_bleeding')->after('has_all_bleeding')->nullable();
            $table->date('date_major_bleeding')->after('has_major_bleeding')->nullable();
            $table->date('date_endocarditis')->after('has_endocarditis')->nullable();
            $table->date('date_all_mortality')->after('has_all_mortality')->nullable();
            $table->date('date_valve_mortality')->after('has_valve_mortality')->nullable();
            $table->date('date_valve_related_operation')->after('has_valve_related_operation')->nullable();
            $table->date('date_explant')->after('has_explant')->nullable();
            $table->date('date_haemolysis')->after('has_haemolysis')->nullable();
            $table->date('date_sudden_unexplained_death')->after('has_sudden_unexplained_death')->nullable();
            $table->date('date_cardiac_death')->after('has_cardiac_death')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('safety_parameters', function (Blueprint $table) {
            $table->dropColumn('date_structural_value_deterioration');
            $table->dropColumn('date_valve_thrombosis');
            $table->dropColumn('date_all_paravalvular_leak');
            $table->dropColumn('date_major_paravalvular_leak');
            $table->dropColumn('date_non_structural_value_deterioration');
            $table->dropColumn('date_thromboembolism');
            $table->dropColumn('date_all_bleeding');
            $table->dropColumn('date_major_bleeding');
            $table->dropColumn('date_endocarditis');
            $table->dropColumn('date_all_mortality');
            $table->dropColumn('date_valve_mortality');
            $table->dropColumn('date_valve_related_operation');
            $table->dropColumn('date_explant');
            $table->dropColumn('date_haemolysis');
            $table->dropColumn('date_sudden_unexplained_death');
            $table->dropColumn('date_cardiac_death');
        });
    }
};
