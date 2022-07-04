<?php

namespace App\Http\Controllers;

use App\Models\EchoDicomFile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EchoDicomFilesController extends Controller
{
    public function uploaded(Request $request, EchoDicomFile $echoDicomFile){
        dd( $request->dicomFile);
        $echoDicomFile->echoDcmFile = $request->dicomFile;
        $echoDicomFile->echocardiography_id = '8';
        $echoDicomFile->save();
    }
    public function viewer(EchoDicomFile $echodicomfile){
        // dd($echodicomfile);
        $pathToFile = storage_path('app/public/'. $echodicomfile->file_path . '/' . $echodicomfile->file_name);
      
        // dd(asset($echodicomfile->file_path));
        // $pathToFile = storage_path('app/public/uploads/001-001/preoperative/0020.dcm');
        $dicomfile = 'wadouri:' .asset( 'storage/' .$echodicomfile->file_path);
        
        return Inertia::render('EchoDicomFiles/EchoDicomViewer', ['imageFile' => $dicomfile]);
    }
    public function download(EchoDicomFile $echodicomfile){

        $pathToFile = storage_path('app/public/'. $echodicomfile->file_path);
        return view('casereportforms.EchoDicom.index',compact('pathToFile'));
    }
}
