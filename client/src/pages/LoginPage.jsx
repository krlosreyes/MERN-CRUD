import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);
  
  return (
    <div className="mx-auto w-1/2 flex items-center h-[calc(100vh-100px)] flex-col justify-center max-w-md p-10 rounded-md relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-5 tracking-tight text-white-900">
          Sign in to your account
        </h2>
      </div>
      <div className="bg-zinc-800 mt-10 max-w-md w-full p-10 rounded-md">
        {signinErrors.map((error, i) => (
          <div
            className="w-full bg-red-400 p-1 font-medium text-black py-1 m-1 text-center"
            key={i}
          >
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          {/* Inputs del formulario */}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 m-2 rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <p className=" text-red-500 text-center">!Email is required¡</p>
          )}
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
            className="w-full bg-white font-semibold text-black px-4 py-2 m-2 rounded hover:bg-blue-700 hover:text-gray-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="w-full px-4 py-2 m-2 flex gap-x-2 justify-between">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
