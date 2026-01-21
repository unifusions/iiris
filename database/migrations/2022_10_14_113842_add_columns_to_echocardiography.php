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
            $table->date('r_echodate')->nullable();
            $table->float('r_peak_velocity')->nullable();
            $table->float('r_velocity_time_integral')->nullable();
            $table->float('r_peak_gradient')->nullable();
            $table->float('r_mean_gradient')->nullable();
            $table->float('r_heart_rate')->nullable();
            $table->float('r_stroke_volume')->nullable();
            $table->float('r_dvi')->nullable();
            $table->float('r_eoa')->nullable();
            $table->float('r_acceleration_time')->nullable();
            $table->float('r_lvot_vti')->nullable();
            $table->float('r_lv_mass')->nullable();
            $table->float('r_ivs_diastole')->nullable();
            $table->float('r_pw_diastole')->nullable();
            $table->float('r_lvidend_systole')->nullable();
            $table->float('r_lvidend_diastole')->nullable();
            $table->float('r_ejection_fraction')->nullable();
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
            $table->dropColumn('r_echodate');
            $table->dropColumn('r_peak_velocity');
            $table->dropColumn('r_velocity_time_integral');
            $table->dropColumn('r_peak_gradient');
            $table->dropColumn('r_mean_gradient');
            $table->dropColumn('r_heart_rate');
            $table->dropColumn('r_stroke_volume');
            $table->dropColumn('r_dvi');
            $table->dropColumn('r_eoa');
            $table->dropColumn('r_acceleration_time');
            $table->dropColumn('r_lvot_vti');
            $table->dropColumn('r_lv_mass');
            $table->dropColumn('r_ivs_diastole');
            $table->dropColumn('r_pw_diastole');
            $table->dropColumn('r_lvidend_systole');
            $table->dropColumn('r_lvidend_diastole');
            $table->dropColumn('r_ejection_fraction');
        });
    }
};
