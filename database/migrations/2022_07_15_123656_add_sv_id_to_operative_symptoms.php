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
        Schema::table('operative_symptoms', function (Blueprint $table) {
            $table->foreignId('scheduled_visit_id')->nullable()->constrained()->onDelete('cascade')->after('post_operative_data_id');
            $table->foreignId('unscheduled_visit_id')->nullable()->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('operative_symptoms', function (Blueprint $table) {
            $table->dropForeign('operative_symptomsscheduled_visit_id');
            $table->dropColumn('scheduled_visit_id');
        });
    }
};
