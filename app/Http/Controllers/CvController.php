<?php

namespace App\Http\Controllers;

use App\Cv;
use App\Experience;
use App\Education;
use App\Section;
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
        $data = $request->all();
        // creating cv
        $cv = $request->user()->cvs()->create($data['info']);
        // create exp
        foreach ($data['experiences'] as $experience) {
            $exp = new Experience;
            foreach ($experience as $key => $value) {
                $exp->$key = $value;
            }
            $exp->cv_id = $cv->id;
            $exp->save();
        }
        // create educations
        foreach ($data['educations'] as $education) {
            $edu = new Education;
            foreach ($education as $key => $value) {
                $edu->$key = $value;
            }
            $edu->cv_id = $cv->id;
            $edu->save();
        }
        // create sections
        foreach ($data['sections'] as $section) {
            $sec = new Section;
            foreach ($section as $key => $value) {
                $sec->$key = $value;
            }
            $sec->cv_id = $cv->id;
            $sec->save();
        }
        // create dated sections
        return response()->json("Cv is created");
    }
    // edit cv
    public function edit(Cv $cv)
    {
        $educations = $cv->educations()->get();
        $sections = $cv->sections()->get();
        $experiences = $cv->experiences()->get();
        return response()->json(['info' => $cv, 'experiences' => $experiences, 'sections' => $sections, 'educations' => $educations]);
    }
    // update cv
    public function update(Request $request)
    {
        $data = $request->all();
        // update cv
        $cv = $request->user()->cvs()->update($data['info']);
        // create exp
        foreach ($data['experiences'] as $experience) {
            $exp = new Experience;
            foreach ($experience as $key => $value) {
                $exp->$key = $value;
            }
            $exp->cv_id = $cv->id;
            $exp->save();
        }
        // create educations
        foreach ($data['educations'] as $education) {
            $edu = new Education;
            foreach ($education as $key => $value) {
                $edu->$key = $value;
            }
            $edu->cv_id = $cv->id;
            $edu->save();
        }
        // create sections
        foreach ($data['sections'] as $section) {
            $sec = new Section;
            foreach ($section as $key => $value) {
                $sec->$key = $value;
            }
            $sec->cv_id = $cv->id;
            $sec->save();
        }
        // create dated sections
        return response()->json("Cv is Updated");
    }
    // deleteEducation
    public function deleteEducation(Cv $cv , Education $education){
        $education->delete();
        return response()->json('delete');
    }
    // deleteEducation
    public function deleteExp(Cv $cv , Experience $experience){
        $experience->delete();
        return response()->json('delete');
    }
    // delete section
    public function deleteSection(Cv $cv , Section $section){
        $section->delete();
        return response()->json('delete');
    }
    //delete cv
    public function destroy(Cv $cv)
    {
        $cv->delete();
        return response()->json('delete');
    }
}
