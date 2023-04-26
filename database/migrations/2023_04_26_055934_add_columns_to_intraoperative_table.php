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
        Schema::table('intra_operative_data', function (Blueprint $table) {
            $table->string('r_major_paravalvular_leak')->nullable();
            $table->string('r_all_paravalvular_leak')->nullable();
            $table->string('r_comments')->nullable();
            $table->date('date_of_review')->after('case_report_form_id')->nullable();
            $table->boolean('is_reviewed')->after('visit_status')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('intra_operative_data', function (Blueprint $table) {
            $table->dropColumn('date_of_review');
            $table->dropColumn('r_all_paravalvular_leak');
            $table->dropColumn('r_major_paravalvular_leak');
            $table->dropColumn('r_comments');
            $table->dropColumn('is_reviewed');
        });
    }
};
