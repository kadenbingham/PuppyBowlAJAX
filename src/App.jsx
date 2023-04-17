import { useState } from "react";
import "./App.css";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Search />
      <Puppies />
    </div>
  );
}

export default App;
