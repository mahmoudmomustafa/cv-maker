<?php

namespace App\Http\Controllers;

use App\Cv;
use App\Experience;
use App\Education;
use App\Section;
use App\DatedSection;
use App\DatedData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;
use App\Http\Requests\CvReq;
class CvController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
        $this->authorizeResource(Cv::class, 'cv');
    }
    // show all cvs
    public function index()
    {
        $cvs = Auth::user()->cvs()->orderBy('updated_at', 'desc')->get();
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
        // create datedSections
        foreach ($data['datedSections'] as $datedSection) {
            $datesec = new DatedSection;
            $datesec->datedHeading = $datedSection['datedHeading'];
            $datesec->cv_id = $cv->id;
            $datesec->save();
            foreach ($datedSection['data'] as $data) {
                $dated = new DatedData;
                foreach ($data as $key => $value) {
                    $dated->$key = $value;
                }
                $dated->datedsection_id = $datesec->id;
                $dated->save();
            }
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
        $datedSectionssss = $cv->datedSections()->get();
        $datedSections = [];
        foreach ($datedSectionssss as $section) {
            array_push($datedSections, ['id' => $section->id, 'datedHeading' => $section->datedHeading, 'data' => DatedData::where('datedsection_id', $section->id)->get()]);
        }
        return response()->json(['info' => $cv, 'experiences' => $experiences, 'sections' => $sections, 'educations' => $educations, 'datedSections' => $datedSections]);
    }
    // update cv
    public function update(CV $cv)
    {
        $data = request()->all();
        // update cv
        $cv->update($data['info']);
        // create or update exp
        foreach ($data['experiences'] as $experience) {
            if (isset($experience['id'])) {
                Experience::where('id', $experience['id'])->update($experience);
            } else {
                $cv->experiences()->create($experience);
            }
        }
        // create or update educations
        foreach ($data['educations'] as $education) {
            if (isset($education['id'])) {
                Education::where('id', $education['id'])->update($education);
            } else {
                $cv->educations()->create($education);
            }
        }
        // create or update sections
        foreach ($data['sections'] as $section) {
            if (isset($section['id'])) {
                Section::where('id', $section['id'])->update($section);
            } else {
                $cv->sections()->create($section);
            }
        }
        //create or update dated sections
        foreach ($data['datedSections'] as $dateSection) {
            if (isset($dateSection['id'])) {
                foreach ($dateSection['data'] as $data) {
                    if (!isset($data["id"])) {
                        $dated = new DatedData;
                        foreach ($data as $key => $value) {
                            $dated->$key = $value;
                        }
                        $dated->datedsection_id = $dateSection["id"];
                        $dated->save();
                    }
                }
            } else {
                $cv->datedSections()->create($dateSection);
                foreach ($dateSection['data'] as $data) {
                    $dated = new DatedData;
                    foreach ($data as $key => $value) {
                        $dated->$key = $value;
                    }
                    $dated->datedsection_id = $dateSection->id;
                    $dated->save();
                }
            }
        }
        // create dated sections
        return response()->json("Cv is Updated");
    }
    // deleteEducation
    public function deleteEducation(Cv $cv, Education $education)
    {
        $education->delete();
        return response()->json('delete');
    }
    // deleteEducation
    public function deleteExp(Cv $cv, Experience $experience)
    {
        $experience->delete();
        return response()->json('delete');
    }
    // delete section
    public function deleteSection(Cv $cv, Section $section)
    {
        $section->delete();
        return response()->json('delete');
    }
    //delete dated section
    public function deleteDateSec(Cv $cv, DatedSection $datedSection)
    {
        $datedSection->delete();
        return response()->json('delete');
    }
    //delete dated section
    public function deleteDateData(DatedSection $datedSection, DatedData $datedData)
    {
        $datedData->delete();
        return response()->json('delete');
    }
    //delete cv
    public function destroy(Cv $cv)
    {
        $cv->delete();
        return response()->json('delete');
    }
    //
    public function preview(Cv $cv)
    {
        $educations = $cv->educations()->get();
        $sections = $cv->sections()->get();
        $experiences = $cv->experiences()->get();
        $datedSections = $cv->datedSections()->get();
        $pdf = PDF::loadView('pdf', ['cv' => $cv, 'experiences' => $experiences, 'sections' => $sections, 'educations' => $educations,'datedSections'=>$datedSections])->setPaper('a4');
        return $pdf->stream('CV.pdf');
        // return view('pdf', compact('cv', 'educations', 'sections', 'experiences'));
    }
}
