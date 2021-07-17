import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/ui/search";
import axios from "axios";

import Header from "./components/ui/header";
import CharGrid from "./components/characters/charGrid";
function App() {
  const [itmes, setitems] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [query, setquery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(result.data);
      setitems(result.data);
      setisloading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setquery(q)} />
      <CharGrid isloading={isloading} items={itmes} />
    </div>
  );
}

export default App;
