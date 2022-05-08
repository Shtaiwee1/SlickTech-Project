import Main from "./views/Main";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginRegister from "./views/LoginRegister";
import PrivateRoute from "./components/PrivateRoute";
import ProjectForm from "./views/ProjectForm";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
