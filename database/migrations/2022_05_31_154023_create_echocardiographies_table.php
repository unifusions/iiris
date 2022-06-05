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
        Schema::create('echocardiographies', function (Blueprint $table) {
            $table->id();

            // $table->foreignId('case_report_form_id')->constrained('case_report_forms')->onDelete('cascade');
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');

            $table->date('echodate');
            $table->integer('peak_velocity')->nullable();
            $table->integer('velocity_time_integral')->nullable();
            $table->integer('peak_gradient')->nullable();
            $table->integer('mean_gradient')->nullable();
            $table->integer('heart_rate')->nullable();
            $table->integer('stroke_volume')->nullable();
            $table->float('dvi')->nullable();
            $table->float('eoa')->nullable();
            $table->integer('acceleration_time')->nullable();
            $table->integer('lvot_vti')->nullable();
            $table->integer('lv_mass')->nullable();
            $table->integer('ivs_diastole')->nullable();
            $table->integer('pw_diastole')->nullable();
            $table->integer('lvidend_systole')->nullable();
            $table->integer('lvidend_diastole')->nullable();
            $table->float('ejection_fraction')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('echocardiographies');
    }
};
