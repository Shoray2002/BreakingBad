import React from "react";
// import spinner from "../../img/logo.png";
import Spinner from "../ui/spinner";
import CharItem from "./charItem";
function charGrid({ items, load }) {
  return load ? (
    <Spinner/>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharItem key={item.char_id} item={item}/>
      ))}
    </section>
  );
}

export default charGrid;
