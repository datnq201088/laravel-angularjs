<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
 */

Route::get('/', 'AngularController@serveApp');
Route::get('/unsupported-browser', 'AngularController@unsupported');

Route::group(['prefix' => 'api/v1', 'middleware' => 'api.auth'], function () {
    Route::get('/users', 'UserController@index');
    Route::post('users', 'UserController@add');
    Route::get('/users/{id}/tasks', 'UserController@getTasks');
    Route::put('/users/{id}', 'UserController@update');
    Route::delete('/users/{id}', 'UserController@delete');

    Route::get('/tasks', 'TaskController@index');
    Route::post('/tasks', 'TaskController@add');
    Route::get('/tasks/{id}', 'TaskController@show');
    Route::put('/tasks/{id}', 'TaskController@update');
    Route::delete('/tasks/{id}', 'TaskController@delete');

    Route::post('/logout', 'Auth\AuthController@logout');

});

Route::post('/api/v1/login', 'Auth\AuthController@login');

Route::get('/test', ['middleware' => 'test:admin,a', 'uses' => 'TestController@index']);

// tasks

Route::get('/home', 'HomeController@index');

Route::get('/_debugbar/assets/stylesheets', [
    'as'   => 'debugbar-css',
    'uses' => '\Barryvdh\Debugbar\Controllers\AssetController@css',
]);

Route::get('/_debugbar/assets/javascript', [
    'as'   => 'debugbar-js',
    'uses' => '\Barryvdh\Debugbar\Controllers\AssetController@js',
]);

Route::any('{path?}', function () {
    return view("index");
})->where("path", ".+");
