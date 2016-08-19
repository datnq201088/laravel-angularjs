<?php

namespace App\Http\Controllers;

class TestController extends ApiController
{
    public function index()
    {
        return $this->jsonResponse(0, ['success']);
    }
}
