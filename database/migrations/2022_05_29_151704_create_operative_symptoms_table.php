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
        Schema::create('operative_symptoms', function (Blueprint $table) {
            $table->id();

            $table->foreignId('case_report_form_id')->constrained('case_report_forms')->onDelete('cascade');
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            
            $table->boolean('symptoms')->default(false);

            $table->boolean('angina')->default(false);
            $table->string('angina_class')->nullable();
            $table->json('angina_duration')->nullable();

            $table->boolean('dyspnea')->default(false);
            $table->string('dyspnea_class')->nullable();
            $table->json('dyspnea_duration')->nullable();

            $table->boolean('syncope')->default(false);
            $table->json('syncope_duration')->nullable();

            $table->boolean('palpitation')->default(false);
            $table->json('palpitation_duration')->nullable();

            $table->boolean('giddiness')->default(false);
            $table->json('giddiness_duration')->nullable();

            $table->boolean('fever')->default(false);
            $table->json('fever_duration')->nullable();

            $table->boolean('heart_failure_admission')->default(false);
            $table->json('heart_failure_admission_duration')->nullable();

            $table->boolean('others')->default(false);
            $table->string('others_text')->nullable();
            $table->json('others_duration')->nullable();

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
        Schema::dropIfExists('operative_symptoms');
    }
};
