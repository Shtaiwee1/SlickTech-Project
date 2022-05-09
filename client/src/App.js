import Main from "./views/Main";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegister from "./views/LoginRegister";
import PrivateRoute from "./components/PrivateRoute";
import ProjectForm from "./views/ProjectForm";
import AddProduct from "./views/AddProduct";
import Navbar from "./components/NavBar";
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about_us' element={<AboutUs/>}/>
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
          <Route path='/addProduct' element={<AddProduct />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
