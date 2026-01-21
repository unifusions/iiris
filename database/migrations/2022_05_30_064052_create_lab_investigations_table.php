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
        Schema::create('lab_investigations', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('case_report_form_id')->constrained('case_report_forms')->onDelete('cascade');
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');
            
            $table->date('li_date')->nullable();
            
            $table->integer('rbc')->nullable();
            $table->integer('wbc')->nullable();
            $table->integer('hemoglobin')->nullable();
            $table->integer('hematocrit')->nullable();
            $table->integer('platelet')->nullable();
            $table->integer('blood_urea')->nullable();
            $table->integer('serum_creatinine')->nullable();
            $table->integer('alt')->nullable();
            $table->integer('ast')->nullable();
            $table->integer('alp')->nullable();
            $table->integer('albumin')->nullable();
            $table->integer('total_protein')->nullable();
            $table->integer('bilirubin')->nullable();
            $table->integer('pt_inr')->nullable();

            
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
        Schema::dropIfExists('lab_investigations');
    }
};
