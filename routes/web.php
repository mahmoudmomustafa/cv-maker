<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/init', 'AuthController@init');
Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::post('/logout', 'AuthController@logout');
