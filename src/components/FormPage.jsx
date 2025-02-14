import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import server from "../apiClient";
import NavBar from "./NavBar";
import UrlList from "./UrlList";
const FormPage = () => {
  const { user, shortUrls, setShortUrls, setIsLoading, showToast } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    longUrl: "",
    customAlias: "",
    topic: "",
  });

  const [responseData, setResponseData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await server.post(
        import.meta.env.VITE_API_URL + "/api/shorten",
        formData
      );
      setIsLoading(false);
      showToast("URL shortened successfully!", "success");
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
      showToast(error.message);
    }
  };

  return (
    <>
      <div className="p-8 flex flex-col items-center">
        <NavBar />
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create Short URL
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-md w-full"
        >
          <input
            type="text"
            placeholder="Long URL"
            value={formData.longUrl}
            onChange={(e) =>
              setFormData({ ...formData, longUrl: e.target.value })
            }
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Custom Alias (optional)"
            value={formData.customAlias}
            onChange={(e) =>
              setFormData({ ...formData, customAlias: e.target.value })
            }
            className="p-2 border rounded-lg"
          />
          <input
            type="text"
            placeholder="Topic"
            value={formData.topic}
            onChange={(e) =>
              setFormData({ ...formData, topic: e.target.value })
            }
            className="p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit
          </button>
        </form>

        {responseData && (
          <div className="mt-4 p-4 border rounded-lg max-w-md w-full">
            <p>
              <strong>Short URL:</strong> {responseData.shortUrl}
            </p>
            <p>
              <strong>Created At:</strong> {responseData.createdAt}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormPage;
