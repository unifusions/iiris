<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::table('echocardiographies', function (Blueprint $table) {

            $table->boolean('peak_velocity_normality')->nullable();
            $table->boolean('velocity_time_integral_normality')->nullable();
            $table->boolean('peak_gradient_normality')->nullable();
            $table->boolean('mean_gradient_normality')->nullable();
            $table->boolean('heart_rate_normality')->nullable();
            $table->boolean('stroke_volume_normality')->nullable();
            $table->boolean('dvi_normality')->nullable();
            $table->boolean('eoa_normality')->nullable();
            $table->boolean('acceleration_time_normality')->nullable();
            $table->boolean('lvot_vti_normality')->nullable();
            $table->boolean('lv_mass_normality')->nullable();
            $table->boolean('ivs_diastole_normality')->nullable();
            $table->boolean('pw_diastole_normality')->nullable();
            $table->boolean('lvidend_systole_normality')->nullable();
            $table->boolean('lvidend_diastole_normality')->nullable();
            $table->boolean('ejection_fraction_normality')->nullable();

            $table->string('peak_velocity_abnormality')->nullable();
            $table->string('velocity_time_integral_abnormality')->nullable();
            $table->string('peak_gradient_abnormality')->nullable();
            $table->string('mean_gradient_abnormality')->nullable();
            $table->string('heart_rate_abnormality')->nullable();
            $table->string('stroke_volume_abnormality')->nullable();
            $table->string('dvi_abnormality')->nullable();
            $table->string('eoa_abnormality')->nullable();
            $table->string('acceleration_time_abnormality')->nullable();
            $table->string('lvot_vti_abnormality')->nullable();
            $table->string('lv_mass_abnormality')->nullable();
            $table->string('ivs_diastole_abnormality')->nullable();
            $table->string('pw_diastole_abnormality')->nullable();
            $table->string('lvidend_systole_abnormality')->nullable();
            $table->string('lvidend_diastole_abnormality')->nullable();
            $table->string('ejection_fraction_abnormality')->nullable();

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
            $table->dropColumn('peak_velocity_normality');
            $table->dropColumn('velocity_time_integral_normality');
            $table->dropColumn('peak_gradient_normality');
            $table->dropColumn('mean_gradient_normality');
            $table->dropColumn('heart_rate_normality');
            $table->dropColumn('stroke_volume_normality');
            $table->dropColumn('dvi_normality');
            $table->dropColumn('eoa_normality');
            $table->dropColumn('acceleration_time_normality');
            $table->dropColumn('lvot_vti_normality');
            $table->dropColumn('lv_mass_normality');
            $table->dropColumn('ivs_diastole_normality');
            $table->dropColumn('pw_diastole_normality');
            $table->dropColumn('lvidend_systole_normality');
            $table->dropColumn('lvidend_diastole_normality');
            $table->dropColumn('ejection_fraction_normality');

            $table->dropColumn('peak_velocity_abnormality');
            $table->dropColumn('velocity_time_integral_abnormality');
            $table->dropColumn('peak_gradient_abnormality');
            $table->dropColumn('mean_gradient_abnormality');
            $table->dropColumn('heart_rate_abnormality');
            $table->dropColumn('stroke_volume_abnormality');
            $table->dropColumn('dvi_abnormality');
            $table->dropColumn('eoa_abnormality');
            $table->dropColumn('acceleration_time_abnormality');
            $table->dropColumn('lvot_vti_abnormality');
            $table->dropColumn('lv_mass_abnormality');
            $table->dropColumn('ivs_diastole_abnormality');
            $table->dropColumn('pw_diastole_abnormality');
            $table->dropColumn('lvidend_systole_abnormality');
            $table->dropColumn('lvidend_diastole_abnormality');
            $table->dropColumn('ejection_fraction_abnormality');
        });
    }
};
