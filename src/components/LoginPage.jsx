import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NavBar from "./NavBar";
const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/form");
    }
  }, [user, navigate]);

  const handleLogin = () => {
    window.location.href =
      import.meta.env.VITE_API_URL + "/api/user/authenticate";
  };

  return (
    <div className="mt-5 flex flex-col items-center h-screen">
      <NavBar />
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        <img
          src="https://www.loginradius.com/blog/static/a9dad0fc4bf1af95243aa5e2d017bc22/a8669/google_cover.jpg"
          alt="Google"
          className="w-6 h-6 inline-block mr-2 border-rounded-lg"
        />
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
