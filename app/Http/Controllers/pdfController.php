<?php

namespace App\Http\Controllers;

use App\Cv;
use PDF;
use Illuminate\Support\Facades\Auth;
class pdfController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
        // $this->authorizeResource(Cv::class, 'cv');
    }
    public function preview(Cv $cv)
    {
        // if(auth()->user()->id == $cv->user_id){
            $educations = $cv->educations()->get();
            $sections = $cv->sections()->get();
            $experiences = $cv->experiences()->get();
            $datedSections = $cv->datedSections()->get();
            $pdf = PDF::loadView('pdf', ['cv' => $cv, 'experiences' => $experiences, 'sections' => $sections, 'educations' => $educations,'datedSections'=>$datedSections]);
            return $pdf->stream('CV.pdf');
        // }else{
        //     return abort(403);
        // }
    }
}
