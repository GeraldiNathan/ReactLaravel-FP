import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ReviewPage from "./pages/ReviewPage";
import Protected from "./Protected";
import Profile from "./pages/ProfilePage";
import TeamComponent from "./components/TeamComponent";
import ListProduct from "./pages/AdminPage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<ReviewPage />} />

        {/* <Route path="/addproduct" element={<AddProduct />} /> */}
        {/* <Route path="/updateproduct" element={<UpdateProduct />} /> */}
        <Route path="/addproduct" element={<Protected Cmp={AddProduct} />} />
        <Route path="/listproduct" element={<Protected Cmp={ListProduct} />} />
        <Route path="/profile" element={<Protected Cmp={Profile} />} />
        <Route path="/aboutus" element={<Protected Cmp={TeamComponent} />} />
        <Route path="/update" element={<Protected Cmp={UpdatePage} />} />
      </Routes>
    </div>
  );
}

export default App;
