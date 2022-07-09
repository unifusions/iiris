<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::table('physical_examinations', function (Blueprint $table) {
            $table->float('height')->change();
            $table->float('weight')->change();
        });
    }

   
    public function down()
    {
        Schema::table('physical_examinations', function (Blueprint $table) {
            $table->integer('height')->change();
            $table->integer('weight')->change();
        });
    }
};
