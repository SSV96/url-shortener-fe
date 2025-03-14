const UrlList = ({ urls }) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="overflow-x-auto w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">My Short URLs </h2>

        <h3 className="text-2xl font-bold mb-4 text-center">
          Click on Custom Alias to Visit Link by Alias
        </h3>
        <h3 className="text-2xl font-bold mb-4 text-center">
          Click on topics to see analytics by by Topic
        </h3>
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Custom Alias</th>
              <th className="px-4 py-2 text-left">Topic</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Analytics</th>
            </tr>
          </thead>
          <tbody>
            {urls && urls.length > 0 ? (
              urls.map((url) => (
                <tr
                  key={url.id}
                  className="even:bg-gray-100 hover:bg-gray-200 transition"
                >
                  <td className="px-4 py-2">
                    <a
                      href={`${import.meta.env.VITE_API_URL}/api/shorten/${
                        url.customAlias
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {url.customAlias}
                    </a>
                  </td>

                  <td className="px-4 py-2">
                    <a
                      href={`${
                        import.meta.env.VITE_API_URL
                      }/api/analytics/topic${url.topic}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {url.topic}
                    </a>
                  </td>
                  <td className="px-4 py-2">
                    {new Date(url.createdAt).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">
                    <a
                      href={`${import.meta.env.VITE_API_URL}/api/analytics/${
                        url.customAlias
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      click here
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500 px-4 py-2">
                  No URLs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UrlList;
