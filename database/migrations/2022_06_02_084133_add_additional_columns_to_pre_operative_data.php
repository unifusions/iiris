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
        Schema::table('pre_operative_data', function (Blueprint $table) {
            //
            $table->boolean('medications')->after('visit_no')->nullable();
            $table->boolean('physical_activity')->after('visit_no')->nullable();
            $table->boolean('personal_history')->after('visit_no')->nullable();
            $table->boolean('family_history')->after('visit_no')->nullable();
            $table->boolean('surgical_history')->after('visit_no')->nullable();
            $table->boolean('medical_history')->after('visit_no')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pre_operative_data', function (Blueprint $table) {
        $table->dropColumn('medical_history');
        $table->dropColumn('surgical_history');
        $table->dropColumn('family_history');
        $table->dropColumn('personal_history');
        $table->dropColumn('physical_activity');
        $table->dropColumn('medications');
        });
    }
};
