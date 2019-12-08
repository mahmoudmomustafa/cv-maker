<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->group(function () {
Route::get('/init', 'AuthController@init');
});
// Route::middleware('api')->group(function () {
    // Route::get('/api/cvs', 'CvController@index');
// });
