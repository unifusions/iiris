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
        Schema::create('predefined_medical_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->boolean('hasMedHis')->nullable();
            $table->boolean('diabetes_mellitus')->nullable();
            $table->string('diabetes_mellitus_duration')->nullable();
            $table->boolean('diabetes_mellitus_treatment')->nullable();

            $table->boolean('hypertension')->nullable();
            $table->string('hypertension_duration')->nullable();
            $table->boolean('hypertension_treatment')->nullable();

            $table->boolean('copd')->nullable();
            $table->string('copd_duration')->nullable();
            $table->boolean('copd_treatment')->nullable();

            $table->boolean('respiratory_failure')->nullable();
            $table->string('respiratory_failure_duration')->nullable();
            $table->boolean('respiratory_failure_treatment')->nullable();

            $table->boolean('stroke')->nullable();
            $table->string('stroke_duration')->nullable();
            $table->boolean('stroke_treatment')->nullable();

            $table->boolean('peripheral_vascular_disease')->nullable();
            $table->string('peripheral_vascular_disease_duration')->nullable();
            $table->boolean('peripheral_vascular_disease_treatment')->nullable();

            $table->boolean('others')->nullable();
            $table->string('others_specify')->nullable();
            $table->string('others_duration')->nullable();
            $table->boolean('others_treatment')->nullable();

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
        Schema::dropIfExists('predefined_medical_histories');
    }
};
