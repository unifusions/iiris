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
        Schema::create('scheduled_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('case_report_form_id')->constrained('case_report_forms')->onDelete('cascade');
            $table->integer('visit_no');
            $table->boolean('form_status')->default(false);
            $table->boolean('visit_status')->default(false);
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
        Schema::dropIfExists('scheduled_visits');
    }
};
