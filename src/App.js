import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import ReviewPage from "./pages/ReviewPage";
import Protected from "./Protected";
import Profile from "./pages/ProfilePage";
import ListProduct from "./pages/AdminPage";
import SearchPage from "./pages/SearchPage";
import AboutComponent from "./components/AboutComponent";
import FaqPage from "./pages/FaqPage";

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
        <Route path="/aboutus" element={<Protected Cmp={AboutComponent} />} />
        <Route path="/search" element={<Protected Cmp={SearchPage} />} />/
        <Route path="/faq" element={<Protected Cmp={FaqPage} />} />/
      </Routes>
    </div>
  );
}

export default App;
