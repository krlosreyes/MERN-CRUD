import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";


function RegisterPage() {
  // Hook useForm de react-hook-form para manejar el estado del formulario
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors = [] } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);
  //console.log(isAuthenticated);

  // Función que se ejecuta al enviar el formulario
  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async (value) => {
    try {
      await signup(value);
      console.log(value);
    } catch (error) {
      console.error("Error during signup:", error);
      // Maneja el error de registro aquí, por ejemplo, actualizando el estado de error
    }
  });

  // Retorna el JSX que representa el formulario de registro
  return (
    <div className="mx-auto w-1/2 flex items-center h-[calc(100vh-100px)] flex-col justify-center max-w-md p-10 rounded-md relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-5 tracking-tight text-white-900">
          Register form
        </h2>
      </div>
      <div className="bg-zinc-800 mt-10 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          {/* Inputs del formulario */}
          <input
            type="text"
            {...register("userName", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Username"
          />
          {errors.userName && (
            <p className=" text-red-500 text-center">!Username is required¡</p>
          )}
          <input
            type="text"
            {...register("nombre", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Nombre"
          />
          {errors.nombre && (
            <p className=" text-red-500 text-center">!Name is required¡</p>
          )}
          <input
            type="text"
            {...register("apellido", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Apellido"
          />
          {errors.apellido && (
            <p className=" text-red-500 text-center">!Apellido is required¡</p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <p className=" text-red-500 text-center">!Email is required¡</p>
          )}
          {registerErrors.map((error, i) => (
            <div
              className="w-full bg-red-500 p-1 text-white py-1 m-1 text-center"
              key={i}
            >
              {error}
            </div>
          ))}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Password"
          />
          {errors.password && (
            <p className=" text-red-500 text-center">!Password is required¡</p>
          )}
          {/* Botón de envío del formulario */}
          <button
            className="w-full bg-white text-black px-4 py-2 m-2 rounded hover:bg-blue-700 hover:text-gray-200"
            type="submit"
          >
            Register
          </button>
          {/* Mostrar errores si existen */}
        </form>
        <p className="w-full px-4 py-2 m-2 flex gap-x-2 justify-between"> 
          Already have an account? <Link to="/login" className="text-sky-500">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage; // Exporta el componente RegisterPage
