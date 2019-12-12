<?php

Route::get('/', function () {
    return view('welcome');
});

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout');

Route::get('/api/cvs', 'CvController@index');
Route::post('/cvs/create', 'CvController@create');
Route::put('/cvs/{cv}/edit', 'CvController@update');
Route::get('/cvs/{cv}/edit', 'CvController@edit');
Route::delete('/cvs/{cv}', 'CvController@destroy');

Route::delete('/cvs/{cv}/edu/{education}', 'CvController@deleteEducation');
Route::delete('/cvs/{cv}/exp/{experience}', 'CvController@deleteEXp');
Route::delete('/cvs/{cv}/sec/{section}', 'CvController@deleteSection');
Route::delete('/cvs/{cv}/datedsec/{datedSection}', 'CvController@deleteDateSec');
Route::delete('/datedsec/{datedSection}/datedData/{datedData}', 'CvController@deleteDateData');

Route::get('/cvs/{cv}/pdf', 'CvController@preview');
