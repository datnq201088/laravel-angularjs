@extends('layouts.app')

@section('content')

<div class="panel-body">
	<!-- Display Validation Errors -->
	@include('common.errors')

	<!-- New Task Form -->
	<form action="{{ url('tasks/store/'.$task->id) }}" method="POST" class="form-horizontal">

		{{ csrf_field() }}
		{{ method_field('PUT') }}

		<!-- Task Name -->
		<div class="form-group">
			<label for="task-name" class="col-sm-3 control-label">Edit task</label>

			<div class="col-sm-6">
				<input type="text" name="name" value="{{ $task->name }}" id="task-name" class="form-control">
			</div>
		</div>

		<!-- Add Task Button -->
		<div class="form-group">
			<div class="col-sm-offset-3 col-sm-6">
				<button type="submit" class="btn btn-default">
					<i class="fa fa-plus"></i> Save
				</button>
			</div>
		</div>
	</form>
</div>




@endsection
