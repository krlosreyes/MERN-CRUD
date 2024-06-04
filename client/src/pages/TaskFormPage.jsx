import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("type", task.type);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  return (
    <div className="mx-auto w-1/2 flex items-center h-[calc(100vh-100px)] flex-col justify-center max-w-md p-10 rounded-md relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-5 tracking-tight text-white-900 my-4">
          Create a new Task
        </h2>
      </div>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
            {...register("title")}
            autoFocus
          />
          <textarea
            rows="3"
            placeholder="Description"
            className="w-full bg-zinc-700 text-white px-3 py-2 rounded-md my-2"
            {...register("description")}
          ></textarea>
          <select
            {...register("type", { required: true })}
            className="w-full bg-zinc-700 text-white px-3 py-1.5 rounded-md my-2"
          >
            <option value="" disabled>
              Select a Type
            </option>
            <option value="Daily task">Daily task</option>
            <option value="Weekly task">Weekly task</option>
            <option value="Monthly task">Monthly task</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white px-4 py-2 rounded my-3 hover:bg-green-700 hover:text-gray-200"
          >
            Save task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
