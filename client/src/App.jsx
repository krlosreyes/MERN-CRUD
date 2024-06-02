// Importamos los componentes necesarios desde la biblioteca "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";

// Definimos y exportamos el componente principal 'App'
export const App = () => {
  return (
    // Utilizamos 'BrowserRouter' para habilitar la funcionalidad de enrutamiento en la aplicación
    <AuthProvider>
      <BrowserRouter>
        {/* 'Routes' se utiliza para definir un conjunto de rutas */}
        <Routes>
          {/* Definimos varias rutas utilizando el componente 'Route' */}
          {/* Cada 'Route' especifica un 'path' y el componente o elemento que se renderizará cuando la URL coincida con ese 'path' */}

          {/* Ruta para la página principal */}
          <Route path="/" element={<HomePage />} />

          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<LoginPage />} />

          {/* Ruta para la página de registro */}
          <Route path="/register" element={<RegisterPage />} />

          {/*******************************************************************************/}
          {/*******************************************************************************/}
          <Route element={<ProtectedRoute />}>
            {/* Ruta para la página de administrar tareas */}
            <Route path="/tasks" element={<TaskPage />} />

            {/* Ruta para la página de agregar tarea */}
            <Route path="/createtask" element={<TaskFormPage />} />

            {/* Ruta para una página específica de tarea con un parámetro dinámico 'id' */}
            <Route path="/task/:id" element={<TaskFormPage />} />

            {/* Ruta para la página de perfil */}
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

// Exportamos el componente 'App' como el componente predeterminado del módulo
export default App;
