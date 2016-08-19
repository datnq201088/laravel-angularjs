<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

    // protected $table = 'my_tasks';
    //
    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
