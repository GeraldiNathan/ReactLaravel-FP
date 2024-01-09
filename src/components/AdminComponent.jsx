import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function AdminPage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [flashMessage, setFlashMessage] = useState(null);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    getData();
  }, [flashMessage]);

  async function deleteData(id) {
    try {
      let result = await fetch("http://127.0.0.1:8000/api/recipe/" + id, {
        method: "DELETE",
      });

      if (result.ok) {
        const responseData = await result.json();
        console.log("responseData:", responseData);
        setFlashMessage({
          type: "success",
          message: responseData.nessage || "Data has been deleted",
        });
      } else {
        const errorData = await result.json();
        setFlashMessage({
          type: "error",
          message: errorData.message || "Failed to delete the data",
        });
      }
    } catch (error) {
      console.log(error);
      setFlashMessage({
        type: "error",
        message: "An error occured while deleting data",
      });
    } finally {
      getData();

      setTimeout(() => {
        setFlashMessage(null);
      }, 3000); //3000 refers to second or how long the message will pop up
    }
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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);

  return (
    <div class="flex flex-col justify-center items-center mt-14">
      {/* Flash Message */}
      {flashMessage && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 rounded-md ${flashMessage.type === "success" ? "bg-red-100 border border-red-400 text-red-700" : "bg-red-100 border border-red-400 text-red-700"}`}
          role="alert"
        >
          <div className="flex items-center justify-between">
            {" "}
            {/* Container for message and icon "X" */}
            <div className="flex items-center">
              {" "}
              {/* Container message */}
              <strong class="font-bold">{flashMessage.type === "success" ? "Success! " : "Error!"}</strong>
              <span class="block sm:inline ml-2">{flashMessage.message}</span>
            </div>
            <span className="ml-4" onClick={() => setFlashMessage(null)}>
              {" "}
              <svg className={`fill-current h-6 w-6 ${flashMessage.type === "success" ? "text-red-500" : "text-red-500"}`} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
      )}
      {/* Flash Message */}

      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="max-w-full ">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-black uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-black uppercase">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-black uppercase">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-black uppercase">
                    Path Image
                  </th>
                  <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-black uppercase ">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((data) => (
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">{data.id}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">{data.title}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">{data.description}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black">
                      <img src={"http://127.0.0.1:8000/storage/" + data.file_path.replace("public/", "")} alt="Wait" style={{ width: 100 }} />
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
                        
                        type="submit"
                        className="inline-flex items-center gap-x-2 p-2 text-sm font-semibold rounded-lg border border-red-500 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-700 dark:focus:outline-none dark:active:text-red-400"
                        onClick={()=>document.getElementById('my_modal_1').showModal()}
                      >
                        Delete
                      </button>
                      <dialog id="my_modal_1" className="modal rounded-2xl">
                        <div className="w-96 h-40">
                          <h3 className="font-bold text-lg px-4 py-3 text-left">⛔ Caution!</h3>
                          <p className="py-4 px-4 text-left text-md">Are you sure want to delete it !?</p>
                          <div className="modal-action">
                            <form method="dialog">
            
                              <button className="me-1 ap-x-2 p-2 rounded-lg border border-black text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-black dark:hover:text-black dark:focus:outline-none dark:active:text-red-4004" >Cancel</button>
                              <button className="me-3 gap-x-2 p-2 rounded-lg border border-red-500 text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-700 dark:focus:outline-none dark:active:text-red-4004" onClick={() => deleteData(data.id)}>Confirm</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination flex justify-center items-center mt-4 gap-4 "}
        activeClassName={"text-amber-500"}
        subContainerClassName={"pages pagination"}
        pageClassName={"ml-2"}
        previousClassName={"px-3 py-2 border rounded-full bg-amber-500 text-black"}
        nextClassName={"px-3 py-2 border rounded-full bg-amber-500 text-black"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
      />
    </div>
  );
}

export default AdminPage;
