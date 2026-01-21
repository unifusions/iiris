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
        Schema::create('electrocardiograms', function (Blueprint $table) {
            $table->id();

            $table->foreignId('case_report_form_id')->constrained('case_report_forms')->onDelete('cascade');
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');

            $table->date('ecg_date')->nullable();
            $table->string('rhythm')->nullable();
            $table->string('rhythm_others')->nullable();
            $table->integer('rate')->nullable();
            $table->boolean('lvh')->nullable();
            $table->boolean('lvs')->nullable();
            $table->integer('printerval')->nullable();
            $table->integer('qrsduration')->nullable();

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
        Schema::dropIfExists('electrocardiograms');
    }
};
