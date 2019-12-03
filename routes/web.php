<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/init', 'AuthController@init');
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout');

Route::get('/cvs', 'CvController@index');
Route::post('/cvs/create', 'CvController@create');
// Route::post('/cvs/{cv}', 'CvController@preview');
Route::get('/cvs/{cv}', 'CvController@update');
Route::put('/cvs/{cv}/edit', 'CvController@edit');
Route::delete('/cvs/{cv}', 'CvController@destroy');

Route::delete('/cvs/{cv}/edu/{edu}', 'CvController@deleteEducation');
Route::delete('/cvs/{cv}/exp/{edu}', 'CvController@deleteEXp');
Route::delete('/cvs/{cv}/sec/{sec}', 'CvController@deleteSection');