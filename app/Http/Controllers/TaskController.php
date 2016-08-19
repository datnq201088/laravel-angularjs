<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Validator;

class TaskController extends ApiController
{

    public function index(Request $request)
    {

        $tasks = Task::where('user_id', $this->userId)
            ->orderBy('created_at', 'desc')
            ->get();
        return $this->jsonResponse(0, $tasks);
    }

    public function add(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|max:20',
            ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->errors[] = $error;
            }
            return $this->jsonResponse(2);
        }

        $task          = new Task;
        $task->name    = $request->name;
        $task->user_id = $this->userId;
        $task->save();

        return $this->jsonResponse(0, $task);
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required|max:20',
            ]);

        if ($validator->fails()) {
            foreach ($validator->errors()->all() as $error) {
                $this->errors[] = $error;
            }
            return $this->jsonResponse(2);
        }

        $task = Task::find($id);
        if (!$task) {
            $this->errors[] = 'Task not found';
            return $this->jsonResponse(3);
        }

        $task->name = $request->name;
        $task->save();

        return $this->jsonResponse(0, $task);

    }

    public function show($id)
    {

        $task = Task::find($id);
        if (!$task) {
            $this->errors[] = 'Task not found';
            return $this->jsonResponse(3);
        }

        return $this->jsonResponse(0, $task);
    }

    public function delete($id)
    {
        Task::find($id)->delete();
        return $this->jsonResponse(0, ['id' => $id]);
    }
}
