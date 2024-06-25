import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/tasks" className="flex-shrink-0 flex items-center">
              <h1 className="font-bold text-xl">Task Manager</h1>
            </Link>
            <div className="ml-6 flex items-center">
              <div className="flex space-x-4">
                {isAuthenticated && (
                  <>
                    <span className="bg-gray-700 text- px-3 py-2 rounded-md text-m font-bold">
                      Welcome {user.username}
                    </span>
                    <Link
                      to="/createTask"
                      className="bg-blue-500 hover:bg-green-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Add Tasks
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <ul className="flex gap-x-2">
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

