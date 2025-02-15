const MyStats = ({ stats = {} }) => {
  console.log("stats", stats);

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Click Statistics
      </h2>

      {/* Overall Stats Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600">Total Clicks</h3>
          <p className="text-3xl font-bold text-blue-800">
            {stats.totalClicks || 0}
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-green-600">Unique Users</h3>
          <p className="text-3xl font-bold text-green-800">
            {stats.uniqueUsers || 0}
          </p>
        </div>
      </div>

      {/* Clicks by Date */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Clicks by Date
        </h3>
        <div className="space-y-4">
          {stats.clicksByDate?.length > 0 ? (
            stats.clicksByDate.map((item, index) => (
              <div
                key={index}
                className="flex justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <span className="text-gray-600">{item.date}</span>
                <span className="text-gray-900 font-semibold">
                  {item.clickCount}
                </span>
              </div>
            ))
          ) : (
            <span className="text-gray-400">No data available</span>
          )}
        </div>
      </div>

      {/* OS Type Section */}
      {/* OS Type Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Operating System
        </h3>
        <div className="space-y-4">
          {stats.osType?.length > 0 ? (
            stats.osType.map((os, index) => (
              <div key={index} className="bg-gray-200 p-3 rounded-lg shadow-sm">
                <span className="text-gray-800">{os.osName}</span>
                <span className="text-gray-600 ml-2">
                  (Unique Clicks: {os.uniqueClicks}, Users: {os.uniqueUsers})
                </span>
              </div>
            ))
          ) : (
            <span className="text-gray-400">No stats available</span>
          )}
        </div>
      </div>

      {/* Device Type Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Device Type
        </h3>
        <div className="space-y-4">
          {stats.deviceType?.length > 0 ? (
            stats.deviceType.map((device, index) => (
              <div key={index} className="bg-gray-200 p-3 rounded-lg shadow-sm">
                <span className="text-gray-800">{device.deviceName}</span>
                <span className="text-gray-600 ml-2">
                  (Unique Clicks: {device.uniqueClicks}, Users:{" "}
                  {device.uniqueUsers})
                </span>
              </div>
            ))
          ) : (
            <span className="text-gray-400">No stats available</span>
          )}
        </div>
      </div>
    </>
  );
};

export default MyStats;
