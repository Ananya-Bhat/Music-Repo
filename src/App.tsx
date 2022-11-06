import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar";
import './style.css'
import MusicApi from "./utils/musicApi";
import HomePage from "./Views/homePage/homePage";

function App() {

  const [search, setSearch] = useState("");
  const searchMusic = (search: any) => {
    setSearch(search);
  };


  // useEffect(() => {
  //   const api = MusicApi();
  //   console.log("api", api)
  // }, [])

  return (
    <div className="App">
      <NavBar searchMusic={searchMusic} />{" "}
      <Routes>
        <Route path="/" element={<HomePage search={search} />} />
      </Routes>

    </div>
  );
}

export default App;
