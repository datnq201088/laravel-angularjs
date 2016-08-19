<?php

namespace App\Http\Controllers;

use App;
use Auth;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public $errors = [];
    public $status = false;
    public $userId = 0;

    public function __construct(Request $request)
    {
        if (Auth::check()) {
            $this->userId = Auth::user()->id;
        }
    }

    public function jsonResponse($errorCode = 0, $data = [])
    {
        if (!$errorCode) {
            $this->status = true;
        }

        $res            = new \stdClass;
        $res->status    = $this->status;
        $res->errorCode = $errorCode;
        $res->message   = trans("messages." . $errorCode);
        $res->errors    = $this->errors;

        $res->data = $data;

        return response()->json($res);
    }
}
