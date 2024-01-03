import React, { useState, useEffect } from "react";

function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchData() {}
    fetchData();
    getData();
  }, []);

  async function deleteData(id) {
    let result = await fetch("http://127.0.0.1:8000/api/recipe/" + id, {
      method: "DELETE",
    });

    result = await result.json();
    getData();
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
    <div class="flex flex-col justify-center items-center mt-14">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="max-w-full ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-black uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-black uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-black uppercase"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-xs font-medium text-black uppercase"
                  >
                    Path Image
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-end text-xs font-medium text-black uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((data) => (
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                      {data.id}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                      {data.title}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                      {data.description}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                      <img
                        src={"http://127.0.0.1:8000/" + data.file_path}
                        alt="Wait"
                        style={{ width: 100 }}
                      />
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        class="inline-flex items-center gap-x-2 p-2 text-sm font-semibold rounded-lg border border-blue-500 text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-700 dark:focus:outline-none dark:active:text-blue-400"
                      >
                        Update
                      </button>
                    </td>

                    <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        onClick={() => deleteData(data.id)}
                        type="submit"
                        class="inline-flex items-center gap-x-2 p-2 text-sm font-semibold rounded-lg border border-red-500 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-700 dark:focus:outline-none dark:active:text-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
