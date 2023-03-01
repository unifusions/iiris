<?php

namespace App\Http\Controllers;

use App\Models\CaseReportForm;
use App\Models\PreOperativeData;
use Illuminate\Http\File;
use Illuminate\Http\JsonResponse;


use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class PreoperativeNewFileUploadController extends Controller
{
    public function upload(Request $request,CaseReportForm $crf, PreOperativeData $preoperative)
    {
        
        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $fileName = $file->getClientOriginalName();
            $folder = uniqid();
            $uploadpath = 'uploads/tmp/' . $folder;
            $file->storeAs($uploadpath, $fileName, 'public');
            return true;
        }
        return '';

    }


    protected function saveFileToS3($file)
    {
        $fileName = $this->createFilename($file);

        $disk = Storage::disk('s3');
        // It's better to use streaming Streaming (laravel 5.4+)
        $disk->putFileAs('photos', $file, $fileName);

        // for older laravel
        // $disk->put($fileName, file_get_contents($file), 'public');
        $mime = str_replace('/', '-', $file->getMimeType());

        // We need to delete the file when uploaded to s3
        unlink($file->getPathname());

        return response()->json([
            'path' => $disk->url($fileName),
            'name' => $fileName,
            'mime_type' => $mime
        ]);
    }

    protected function saveFile(UploadedFile $file)
    {
        $fileName = $this->createFilename($file);
        // Group files by mime type
        $mime = str_replace('/', '-', $file->getMimeType());
        // Group files by the date (week
        $dateFolder = date("Y-m-W");

        // Build the file path
        $filePath = "upload/{$mime}/{$dateFolder}/";
        $finalPath = storage_path("app/" . $filePath);

        // move the file name
        $file->move($finalPath, $fileName);

        return response()->json([
            'path' => $filePath,
            'name' => $fileName,
            'mime_type' => $mime
        ]);
    }


    protected function createFilename(UploadedFile $file)
    {
        $extension = $file->getClientOriginalExtension();
        $filename = str_replace("." . $extension, "", $file->getClientOriginalName()); // Filename without extension


        $filename .= "_" . md5(time()) . "." . $extension;

        return $filename;
    }
}
