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
        Schema::create('postoperative_approval_remarks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('post_operative_data_id')->nullable()->constrained('post_operative_data')->onDelete('cascade');
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
        Schema::dropIfExists('postoperative_approval_remarks');
    }
};
