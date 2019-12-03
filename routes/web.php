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
Route::put('/cvs/{cv}/edit', 'CvController@edit');
Route::get('/cvs/{cv}', 'CvController@edit');
Route::delete('/cvs/{cv}', 'CvController@destroy');