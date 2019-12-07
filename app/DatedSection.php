<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DatedSection extends Model
{
    public $table = "datedsections";
    // protect inputs
    protected $fillable = ['datedHeading', 'updated_at', 'created_at'];
    //connect to user
    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }
    // 
    public function data(){
      return $this->hasMany(DatedData::class);
    }
}
