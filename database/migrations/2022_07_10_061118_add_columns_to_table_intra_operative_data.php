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
            $table->string('all_paravalvular_leak_specify')->after('all_paravalvular_leak');
            $table->string('major_paravalvular_leak_specify')->after('major_paravalvular_leak');
            $table->boolean('all_paravalvular_leak')->change();
            $table->boolean('major_paravalvular_leak')->change();

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
            $table->dropColumn('all_paravalvular_leak_specify');
            $table->dropColumn('major_paravalvular_leak_specify');
            $table->string('all_paravalvular_leak')->change();
            $table->string('major_paravalvular_leak')->change();
        });
    }
};
