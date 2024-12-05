



import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Component/pages/Login/Login.jsx"));
const Home =lazy(() => import("./Component/pages/Home/Home.jsx"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
     
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

