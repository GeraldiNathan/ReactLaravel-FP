import React, { useEffect } from "react";
import { useState } from "react";

function SearchComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {}
    fetchData();
    getData();
  }, []);

  async function search(key) {
    let result;

    if (key.trim() === "") {
      result = await fetch("http://127.0.0.1:8000/api/recipe");
    } else {
      result = await fetch("http://127.0.0.1:8000/api/search/" + key);
    }

    result = await result.json();
    setData(result);
  }

  async function getData() {
    try {
      let result = await fetch("http://127.0.0.1:8000/api/recipe");
      result = await result.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center mt-7">
      <div className="mb-4">
        <input
          type="text"
          className="border border-black p-3 rounded-full"
          placeholder="Search..."
          onChange={(e) => search(e.target.value)}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left text-xs font-medium text-black uppercase">
                ID
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-black uppercase">
                Title
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-black uppercase">
                Description
              </th>
              <th className="py-2 px-4 text-left text-xs font-medium text-black uppercase">
                Image
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-100 transition duration-300"
              >
                <td className="py-2 px-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                  {data.id}
                </td>
                <td className="py-2 px-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                  {data.title}
                </td>
                <td className="py-2 px-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                  {data.description}
                </td>
                <td className="py-2 px-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                  <img
                    src={`http://127.0.0.1:8000/${data.file_path}`}
                    alt="Wait"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchComponent;
