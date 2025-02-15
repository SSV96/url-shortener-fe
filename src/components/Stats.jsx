import { useEffect } from "react";
import server from "../apiClient";
import NavBar from "./NavBar";
import { useAuth } from "../context/AuthContext";
import MyStats from "./MyStats";

const Stats = () => {
  const { stats, setStats } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const reqUrl =
          import.meta.env.VITE_API_URL + "/api/analytics/user/overall";
        console.log(reqUrl);
        const response = await server.get(reqUrl, {
          withCredentials: true,
        });
        console.log(response.data); //
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <MyStats stats={stats || {}} />
    </div>
  );
};

export default Stats;
