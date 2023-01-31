import React from "react";
import { Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator";
import TextUtils from "./components/TextUtils"
import { NavHeading } from "./components/NavHeading";

function App() {
  return (
    <>
      <div className="App">
        <NavHeading style={{ margin: "0 auto" }} />
        <Routes>
          <Route path="/" element={<Calculator />}></Route>
          <Route path="/textUtils" element={<TextUtils />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
