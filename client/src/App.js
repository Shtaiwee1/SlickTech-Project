import Main from "./views/Main";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegister from "./views/LoginRegister";
import PrivateRoute from "./components/PrivateRoute";
import ProjectForm from "./views/ProjectForm";
import AddProduct from "./views/AddProduct";
import LandingPage from "./views/LandingPage";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import ProductDetails from "./views/ProductDetails";
import "./components/FontawesomeIcons";
import ChatPage from "./views/ChatPage";
import UserProfile from "./views/UserProfile";
import Cart from "./views/Cart";
import Dashboard from "./views/Dashboard";
import EditProduct from "./views/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/login_register" element={<LoginRegister />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/new"
            element={
              <PrivateRoute>
                <ProjectForm />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
