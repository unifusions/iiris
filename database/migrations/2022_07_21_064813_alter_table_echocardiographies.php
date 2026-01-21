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
        Schema::table('echocardiographies', function (Blueprint $table) {
            $table->float('peak_velocity')->change();
            $table->float('velocity_time_integral')->change();
            $table->float('peak_gradient')->change();
            $table->float('mean_gradient')->change();
            $table->float('heart_rate')->change();
            $table->float('stroke_volume')->change();
            $table->float('dvi')->change();
            $table->float('eoa')->change();
            $table->float('acceleration_time')->change();
            $table->float('lvot_vti')->change();
            $table->float('lv_mass')->change();
            $table->float('ivs_diastole')->change();
            $table->float('pw_diastole')->change();
            $table->float('lvidend_systole')->change();
            $table->float('lvidend_diastole')->change();
            $table->float('ejection_fraction')->change();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('echocardiographies', function (Blueprint $table) {
            $table->integer('peak_velocity')->change();
            $table->integer('velocity_time_integral')->change();
            $table->integer('peak_gradient')->change();
            $table->integer('mean_gradient')->change();
            $table->integer('heart_rate')->change();
            $table->integer('stroke_volume')->change();
            $table->integer('dvi')->change();
            $table->integer('eoa')->change();
            $table->integer('acceleration_time')->change();
            $table->integer('lvot_vti')->change();
            $table->integer('lv_mass')->change();
            $table->integer('ivs_diastole')->change();
            $table->integer('pw_diastole')->change();
            $table->integer('lvidend_systole')->change();
            $table->integer('lvidend_diastole')->change();
            $table->integer('ejection_fraction')->change();
            
        });
    }
};
