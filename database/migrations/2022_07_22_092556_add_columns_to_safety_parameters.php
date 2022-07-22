<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::table('safety_parameters', function (Blueprint $table) {
            $table->boolean('has_structural_value_deterioration')->after('unscheduled_visits_id')->nullable();
            $table->boolean('has_valve_thrombosis')->after('structural_value_deterioration')->nullable();
            $table->boolean('has_all_paravalvular_leak')->after('valve_thrombosis')->nullable();
            $table->boolean('has_major_paravalvular_leak')->after('all_paravalvular_leak')->nullable();
            $table->boolean('has_non_structural_value_deterioration')->after('major_paravalvular_leak')->nullable();
            $table->boolean('has_thromboembolism')->after('non_structural_value_deterioration')->nullable();
            $table->boolean('has_all_bleeding')->after('thromboembolism')->nullable();
            $table->boolean('has_major_bleeding')->after('all_bleeding')->nullable();
            $table->boolean('has_endocarditis')->after('major_bleeding')->nullable();
            $table->boolean('has_all_mortality')->after('endocarditis')->nullable();
            $table->boolean('has_valve_mortality')->after('all_mortality')->nullable();
            $table->boolean('has_valve_related_operation')->after('valve_mortality')->nullable();
            $table->boolean('has_explant')->after('valve_related_operation')->nullable();
            $table->boolean('has_haemolysis')->after('explant')->nullable();
            $table->boolean('has_sudden_unexplained_death')->after('haemolysis')->nullable();
            $table->boolean('has_cardiac_death')->after('sudden_unexplained_death')->nullable();
        

        });
    }

  
    public function down()
    {
        Schema::table('safety_parameters', function (Blueprint $table) {
          $table->dropColumn('has_structural_value_deterioration');
          $table->dropColumn('has_valve_thrombosis');
          $table->dropColumn('has_all_paravalvular_leak');
          $table->dropColumn('has_major_paravalvular_leak');
          $table->dropColumn('has_non_structural_value_deterioration');
          $table->dropColumn('has_thromboembolism');
          $table->dropColumn('has_all_bleeding');
          $table->dropColumn('has_major_bleeding');
          $table->dropColumn('has_endocarditis');
          $table->dropColumn('has_valve_mortality');
          $table->dropColumn('has_valve_related_operation');
          $table->dropColumn('has_explant');
          $table->dropColumn('has_haemolysis');
          $table->dropColumn('has_sudden_unexplained_death');
          $table->dropColumn('has_cardiac_death');
        });
    }
};
