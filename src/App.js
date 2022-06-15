import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-register/LoginPage";
import { Registration } from "./pages/login-register/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Registration />}>
            {" "}
          </Route>
          <Route path="/login" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="/" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="*" element={<h1>404 page not found</h1>}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
