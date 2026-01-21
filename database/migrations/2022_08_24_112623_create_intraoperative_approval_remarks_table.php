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
        Schema::create('intraoperative_approval_remarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('intra_operative_data_id')->nullable()->constrained('intra_operative_data')->onDelete('cascade');
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
        Schema::dropIfExists('intraoperative_approval_remarks');
    }
};
