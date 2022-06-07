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
        Schema::table('post_operative_data', function (Blueprint $table) {
            $table->boolean('hasMedications')->after('case_report_form_id')->nullable();
            $table->boolean('is_submitted')->after('form_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('post_operative_data', function (Blueprint $table) {
            $table->dropColumn('hasMedications');
            $table->dropColumn('is_submitted');

        });
    }
};
