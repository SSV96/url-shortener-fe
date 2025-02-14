import NavBar from "./NavBar";
import UrlList from "./UrlList";
import { useAuth } from "../context/AuthContext";
import server from "../apiClient";
import { useEffect } from "react";
const MyUrls = () => {
  function handleClear() {
    try {
      const clearUrls = async () => {
        await server.delete(import.meta.env.VITE_API_URL + "/api/shorten", {
          withCredentials: true,
        });
        setShortUrls([]);
      };
      clearUrls();
    } catch (error) {
      console.error(error);
    }
  }
  const { shortUrls, setShortUrls } = useAuth();
  useEffect(() => {
    const fetchShortUrls = async () => {
      try {
        const response = await server.get(
          import.meta.env.VITE_API_URL + "/api/shorten",
          {
            withCredentials: true,
          }
        );
        setShortUrls(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchShortUrls();
  }, []);
  return (
    <div className="p-8 flex flex-col items-center">
      <NavBar />
      <button
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleClear}
      >
        Clear
      </button>
      <UrlList urls={shortUrls} />
    </div>
  );
};

export default MyUrls;
