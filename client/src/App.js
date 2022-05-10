import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginRegister from "./views/LoginRegister";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
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
          {/* Public Routes */}

          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/login_register" element={<LoginRegister />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />

          {/* Private Routes */}

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="products/:productId"
            element={
              <PrivateRoute>
                <ProductDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}

          <Route
            path="/addProduct"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/products/:productId/edit"
            element={
              <AdminRoute>
                <EditProduct />
              </AdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
