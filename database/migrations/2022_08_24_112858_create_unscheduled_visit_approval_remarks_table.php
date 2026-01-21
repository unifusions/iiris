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
        Schema::create('unscheduled_visit_approval_remarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('unscheduled_visits_id')->nullable()->constrained('unscheduled_visits')->onDelete('cascade');
            $table->foreignId('user_id');
            $table->string('action');
            $table->string('remarks')->nullable();
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
        Schema::dropIfExists('unscheduled_visit_approval_remarks');
    }
};
