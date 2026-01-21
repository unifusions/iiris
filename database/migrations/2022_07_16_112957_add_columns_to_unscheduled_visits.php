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
        Schema::table('unscheduled_visits', function (Blueprint $table) {
            $table->date('pod')->nullable()->after('case_report_form_id');
            $table->boolean('physical_activity')->nullable()->after('pod');
            $table->boolean('hasMedications')->nullable()->after('physical_activity');
            $table->boolean('is_submitted')->nullable()->after('form_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('unscheduled_visits', function (Blueprint $table) {
            $table->dropColumn('pod');
            $table->dropColumn('physical_activity');
            $table->dropColumn('hasMedications');
            $table->dropColumn('is_submitted');
        });
    }
};
