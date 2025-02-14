import { useState, useEffect } from "react";
import server from "../apiClient";
import { AuthContext } from "./AuthContext";
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shortUrls, setShortUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [error, setError] = useState(null);

  const showToast = (message, type = "error") => {
    setToastMessage({ message, type });
    console.log("", toastMessage);
    // Hide toast after 3 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  useEffect(() => {
    server
      .get("/api/user/status")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        shortUrls,
        setShortUrls,
        isLoading,
        setIsLoading,
        showToast,
        error,
        setError,
      }}
    >
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
        </div>
      )}

      {toastMessage && (
        <div
          className={`fixed top-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white z-50 ${
            toastMessage.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {toastMessage.message}
        </div>
      )}

      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
