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
        Schema::create('scheduled_visit_approval_remarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('scheduled_visits_id')->nullable()->constrained('scheduled_visits')->onDelete('cascade');
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
        Schema::dropIfExists('scheduled_visit_approval_remarks');
    }
};
