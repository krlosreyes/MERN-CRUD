import {useForm} from 'react-hook-form';

function TaskFormPage() {
    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data)){
        console.log(data);
    }
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit= {onSubmit}>
        <input type="text" 
        placeholder="Title" 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        { ...register('title')}
        autofocus/>
        <textarea rows="3" 
        placeholder="Description"
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-mdmy-2"
        { ...register(description)}></textarea>
        <input type="text" placeholder="Type" />
        <button type="submit" className="w-full bg-white text-black px-4 py-2 m-2 rounded hover:bg-blue-700 hover:text-gray-200">
            Save task
        </button>
        
      </form>
    </div>
  )
}

export default TaskFormPage
