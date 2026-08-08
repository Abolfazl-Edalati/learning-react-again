import { useState } from "react";
import UseEffect from "./components/UseEffect";

function App() {
  const [category, setCategory] = useState<string>("");

  return (
    <>
      <div className="m-2">
        <select
          name=""
          className="form-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <UseEffect category={category} />
      </div>
    </>
  );
}

export default App;
