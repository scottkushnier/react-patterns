import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorDetail from "./ColorDetail";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import "./App.css";

const initialColorList = [
  { name: "red", colorSpec: "red" },
  { name: "green", colorSpec: "green" },
  { name: "blue", colorSpec: "blue" },
  { name: "pink", colorSpec: "#ffa0a0" },
];

function App() {
  const [colorList, setColorList] = useState(initialColorList);

  function AddColorFn(colorName, colorSpec) {
    // console.log("adding a color");
    // console.log(colorName, ": ", colorSpec);
    const newColorList = [
      { name: colorName, colorSpec: colorSpec },
      ...colorList,
    ];
    setColorList(newColorList);
    // console.log("new list: ", newColorList);
  }

  return (
    <>
      <h3> Color Factory </h3>
      <BrowserRouter>
        <Routes>
          <Route
            path="/colors/new"
            element={<ColorForm addcolorfn={AddColorFn} />}
          />
          <Route
            exact
            path="/colors"
            element={<ColorList colorList={colorList} />}
          />
          <Route
            path="/colors/:colorname"
            element={<ColorDetail colorList={colorList} />}
          />
          <Route path="*" element={<Navigate to="/colors" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
