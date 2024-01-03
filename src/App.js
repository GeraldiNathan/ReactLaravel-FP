import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/AdminPage";
import ReviewPage from "./pages/ReviewPage";
import Protected from "./Protected";
import Profile from "./pages/ProfilePage";
import TeamComponent from "./components/TeamComponent";

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
        <Route
          path="/updateproduct"
          element={<Protected Cmp={UpdateProduct} />}
        />
        <Route path="/profile" element={<Protected Cmp={Profile} />} />
        <Route path="/aboutus" element={<Protected Cmp={TeamComponent} />} />
      </Routes>
    </div>
  );
}

export default App;
