import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  

  const onSubmit = handleSubmit((data) => {
    createTask(data);
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
            <option value="" disabled selected>
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
