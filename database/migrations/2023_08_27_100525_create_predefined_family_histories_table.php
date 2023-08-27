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
        Schema::create('predefined_family_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pre_operative_data_id')->nullable()->constrained('pre_operative_data')->onDelete('cascade');
            
            $table->boolean('diabetes_mellitus')->nullable();
            $table->json('diabetes_mellitus_relation')->nullable();

            $table->boolean('hypertension')->nullable();
            $table->json('hypertension_relation')->nullable();

            $table->boolean('coronary_artery_disease')->nullable();
            $table->json('coronary_artery_disease_relation')->nullable();

            $table->boolean('aortic_disease')->nullable();
            $table->json('aortic_disease_relation')->nullable();

            $table->boolean('others')->nullable();
            $table->text('others_specify')->nullable();
            $table->json('others_relation')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('predefined_family_histories');
    }
};
