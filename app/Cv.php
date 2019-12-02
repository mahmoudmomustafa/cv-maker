<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cv extends Model
{
    // protect inputs
    protected $fillable = ['name', 'email', 'number', 'location', 'title', 'website', 'website2', 'summary', 'updated_at', 'created_at'];
    //cv belong to one user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    // cv has many educations
    public function educations()
    {
        return $this->hasMany(Education::class);
    }
    // cv has many experiences
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }
}
