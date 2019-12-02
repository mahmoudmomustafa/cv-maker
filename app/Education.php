<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    // protect inputs
    protected $fillable = ['degree_name','school_name','edu_des', 'edu_start', 'edu_end', 'updated_at', 'created_at'];
    //connect to user
    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }
}
