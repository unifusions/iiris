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
            $table->boolean('cabg')->after('acc_time')->nullable();
            $table->boolean('mitral_valve_repair')->after('cabg')->nullable();
            $table->boolean('mitral_valve_replacement')->after('mitral_valve_repair')->nullable();
            $table->boolean('aortic_root')->after('mitral_valve_replacement')->nullable();
            $table->boolean('ascending_aorta')->after('aortic_root')->nullable();
            $table->boolean('aortic_arch')->after('ascending_aorta')->nullable();
            $table->boolean('concomitant_procedure_others')->after('aortic_arch')->nullable();
            $table->string('concomitant_procedure_others_specify')->after('concomitant_procedure_others')->nullable();
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
            $table->dropColumn('cabg');
            $table->dropColumn('mitral_valve_repair');
            $table->dropColumn('mitral_valve_replacement');
            $table->dropColumn('aortic_root');
            $table->dropColumn('ascending_aorta');
            $table->dropColumn('aortic_arch');
            $table->dropColumn('concomitant_procedure_others');
            $table->dropColumn('concomitant_procedure_others_specify');
        });
    }
};
