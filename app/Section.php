<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    // protect inputs
    protected $fillable = ['secHeading','secDesc','updated_at', 'created_at'];
    //connect to user
    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }
}
