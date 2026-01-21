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
        Schema::create('medications', function (Blueprint $table) {
            $table->id();
            
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');
            
            $table->string('medication')->nullable();
            $table->string('indication')->nullable();
            $table->string('status')->nullable();
            $table->date('start_date')->nullable();
            $table->date('stop_date')->nullable();
            $table->string('dosage')->nullable();
            $table->string('reason')->nullable();

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
        Schema::dropIfExists('medications');
    }
};
