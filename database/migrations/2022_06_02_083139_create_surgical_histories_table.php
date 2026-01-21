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
        Schema::create('surgical_histories', function (Blueprint $table) {
            $table->id();

            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');

            $table->string('diagnosis')->nullable();
            $table->date('sh_date')->nullable();
            $table->string('treatment')->nullable();

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
        Schema::dropIfExists('surgical_histories');
    }
};
