<?php

Route::middleware('auth:api')->group(function () {
Route::get('/init', 'AuthController@init');
Route::get('/cvs', 'CvController@index');

Route::post('/cvs/create', 'CvController@create');
Route::put('/cvs/{cv}', 'CvController@update');
Route::get('/cvs/{cv}/edit', 'CvController@edit');
});
