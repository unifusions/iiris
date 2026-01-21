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
        Schema::create('unscheduled_visit_dicom_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('unscheduled_visits_id')->constrained('unscheduled_visits');
            $table->uuid('uuid')->nullable();
            $table->string('file_name')->nullable();
            $table->string('file_path')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('unscheduled_visit_dicom_files');
    }
};
