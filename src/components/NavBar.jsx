import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    window.location.href = import.meta.env.VITE_API_URL + "/api/user/logout";
  };

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <nav className="mb-5 flex  justify-between items-center p-4 bg-gray-800 text-white rounded-lg max-w-md w-full ">
      {/* Logo */}
      <div className="text-xl font-bold">🛜</div>

      {/* Middle Links */}
      <ul className="hidden md:flex gap-6">
        <li
          className="hover:text-gray-400 cursor-pointer w-full"
          onClick={() => navigate("/form")}
        >
          create Url
        </li>
        <li
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => navigate("/analytics")}
        >
          Analytics
        </li>

        <li
          className="hover:text-gray-400 cursor-pointer"
          onClick={() => navigate("/myurls")}
        >
          MyUrls
        </li>
      </ul>

      {/* Login Status */}
      <div className="hidden md:block">
        {isLoggedIn ? (
          <button
            onClick={() => handleLogOut()}
            className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          ""
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-gray-800 text-white flex flex-col items-start md:hidden shadow-lg rounded-lg">
          <ul className="flex flex-col gap-3 p-4 w-full">
            <li className="hover:text-gray-400 cursor-pointer w-full">
              create Url
            </li>
            <li className="hover:text-gray-400 cursor-pointer w-full">
              Analytics
            </li>
            <li className="hover:text-gray-400 cursor-pointer w-full">
              My URLs
            </li>
            {isLoggedIn ? (
              <li className="w-full">
                <button
                  onClick={() => handleLogOut(false)}
                  className="px-4 py-2 bg-red-500 rounded hover:bg-red-600 w-full text-left"
                >
                  Logout
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
