<?php

namespace App\Http\Controllers;

use App\Cv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CvController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    // show all cvs
    public function index()
    {
        $cvs = Auth::user()->cvs()->orderBy('created_at', 'desc')->get();
        return response()->json($cvs);
    }
    // create cv
    public function create(Request $request)
    {
        $data = request(['cv'=>['info']]);
        $request->user()->cvs()->create($data);
        return response()->json("Done");
    }
    // edit cv
    public function edit(Cv $cv)
    {
        // $eductaions = $cv->educations()->get();
        $experiences = $cv->experiences()->get();
        return response()->json(['info' => $cv, 'experiences' => $experiences]);
    }
}
