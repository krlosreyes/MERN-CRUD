import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
// Componente funcional para la página de registro
function RegisterPage() {
  // Hook useForm de react-hook-form para manejar el estado del formulario
  const { register, handleSubmit } = useForm();
  const { signup, user } = useAuth();

  console.log(user);

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  });

  // Retorna el JSX que representa el formulario de registro
  return (
    <div className="mx-auto w-1/2 flex items-center  h-screen bg-zinc-800 max-w-md p-10 rounded-md relative">
      <form onSubmit={onSubmit}>
        {/* Inputs del formulario */}
        <input
          type="text"
          {...register("useName", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
          placeholder="Username"
        />
        <input
          type="text"
          {...register("nombre", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
          placeholder="Nombre"
        />
        <input
          type="text"
          {...register("apellido", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
          placeholder="Apellido"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
          placeholder="Email"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
          placeholder="Password"
        />
        {/* Botón de envío del formulario */}
        <button
          className="w-full bg-white text-black px-4 py-2 m-2 rounded hover:bg-blue-700 hover:text-gray-200"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage; // Exporta el componente RegisterPage
