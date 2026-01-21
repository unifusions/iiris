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
        Schema::create('safety_parameters', function (Blueprint $table) {
            $table->id();

            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');

            $table->string('structural_value_deterioration')->nullable();
            $table->string('valve_thrombosis')->nullable();
            $table->string('all_paravalvular_leak')->nullable();
            $table->string('major_paravalvular_leak')->nullable();
            $table->string('non_structural_value_deterioration')->nullable();
            $table->string('thromboembolism')->nullable();
            $table->string('all_bleeding')->nullable();
            $table->string('major_bleeding')->nullable();
            $table->string('endocarditis')->nullable();
            $table->string('all_mortality')->nullable();
            $table->string('valve_mortality')->nullable();
            $table->string('valve_related_operation')->nullable();
            $table->string('explant')->nullable();
            $table->string('haemolysis')->nullable();
            $table->string('sudden_unexplained_death')->nullable();
            $table->string('cardiac_death')->nullable();
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
        Schema::dropIfExists('safety_parameters');
    }
};
