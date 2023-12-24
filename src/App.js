import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import Protected from "./Protected";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/addproduct" element={<AddProduct />} /> */}
        {/* <Route path="/updateproduct" element={<UpdateProduct />} /> */}
        <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
        <Route
          path="/updateproduct"
          element={<Protected Cmp={UpdateProduct} />}
        />
      </Routes>
    </div>
  );
}

export default App;
