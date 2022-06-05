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
        Schema::create('physical_activities', function (Blueprint $table) {

            $table->id();
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');

            $table->string('activity_type')->nullable();
            $table->integer('duration')->nullable();
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
        Schema::dropIfExists('physical_activities');
    }
};
