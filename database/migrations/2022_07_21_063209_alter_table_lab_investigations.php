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
        Schema::table('lab_investigations', function (Blueprint $table) {
            $table->float('rbc')->change();
            $table->float('wbc')->change();
            $table->float('hemoglobin')->change();
            $table->float('hematocrit')->change();
            $table->float('platelet')->change();
            $table->float('blood_urea')->change();
            $table->float('serum_creatinine')->change();
            $table->float('alt')->change();
            $table->float('ast')->change();
            $table->float('alp')->change();
            $table->float('albumin')->change();
            $table->float('total_protein')->change();
            $table->float('bilirubin')->change();
            $table->float('pt_inr')->change();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lab_investigations', function (Blueprint $table) {
            $table->integer('rbc')->change();
            $table->integer('wbc')->change();
            $table->integer('hemoglobin')->change();
            $table->integer('hematocrit')->change();
            $table->integer('platelet')->change();
            $table->integer('blood_urea')->change();
            $table->integer('serum_creatinine')->change();
            $table->integer('alt')->change();
            $table->integer('ast')->change();
            $table->integer('alp')->change();
            $table->integer('albumin')->change();
            $table->integer('total_protein')->change();
            $table->integer('bilirubin')->change();
            $table->integer('pt_inr')->change();
          
        });
    }
};
