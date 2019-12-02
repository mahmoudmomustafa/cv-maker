<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    // protect inputs
    protected $fillable = ['title','company','desc', 'start_date', 'end_date', 'updated_at', 'created_at'];
    //connect to user
    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }
}
