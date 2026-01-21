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
        Schema::create('personal_histories', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');

            $table->string('smoking')->nullable();
            $table->integer('cigarettes')->nullable();
            $table->date('smoking_since')->nullable();
            $table->date('smoking_stopped')->nullable();

            $table->string('alchohol')->nullable();
            $table->integer('quantity')->nullable();
            $table->date('alchohol_since')->nullable();
            $table->date('alchohol_stopped')->nullable();

            $table->string('tobacco')->nullable();
            $table->string('tobacco_type')->nullable();
            $table->integer('tobacco_quantity')->nullable();
            $table->date('tobacco_since')->nullable();
            $table->date('tobacco_stopped')->nullable();


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
        Schema::dropIfExists('personal_histories');
    }
};
