<?php

namespace App\Http\Controllers;

use App\User;
use Hash;
use Illuminate\Http\Request;
use Validator;

class UserController extends ApiController
{

    public function index()
    {
        $users = User::all();
        return $this->jsonResponse(0, $users);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'name'     => 'required|min:4',
            'password' => 'required|min:4',
        ]);

        if ($validator->fails()) {
            $messages = $validator->errors();
            foreach ($messages->all() as $msg) {
                $this->errors[] = $msg;
            }
            return response()->json($errors);
        }

        $user           = new User;
        $user->email    = $request->email;
        $user->name     = $request->name;
        $user->password = Hash::make($request->password);
        $user->save();

        return $this->jsonResponse(0, $user);
    }

    public function update(Request $request, $id)
    {
        return response()->json($request->all());
    }

    public function delete($id)
    {
        User::destroy($id);
        return $this->jsonResponse(0, ['id' => $id]);
    }

    public function getTasks($id)
    {

        $inputs = ['userId' => $id, 'foo' => 2];
        $rules  = ['userId' => 'required|integer', 'foo' => 'foo'];

        $validator = Validator::make(
            $inputs, $rules
        );

        if ($validator->fails()) {
            $this->errors = $validator->errors()->all();
            return $this->jsonResponse(2);
        }

        $tasks = User::find($id)->tasks;

        return $this->jsonResponse(0, $tasks);
    }
}
