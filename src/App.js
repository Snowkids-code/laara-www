import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routes/Routers";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProperty } from "./reducers/property.reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProperty());
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
