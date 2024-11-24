import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const defaultDogs = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

function App() {
  const dogNames = defaultDogs.dogs.map((dog) => dog.name);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dogs" element={<DogList items={dogNames} />} /> //
        what props will this need?
        <Route
          path="/dogs/:name"
          element={<DogDetails dogInfo={defaultDogs.dogs} />}
        />
        // what props will this need?
        <Route path="*" element={<Navigate to="/dogs" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
