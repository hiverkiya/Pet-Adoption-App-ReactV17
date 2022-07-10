import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
const App=()=>{
    return (
      <div id="my-app">
        <h1> Adopt Me!</h1>
       <SearchParams/>
      </div>
    );
}
/*const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Augie",
      breed: "Pomerian",
      animal: "Dog",
    }),
    React.createElement(Pet, {
      name: "Mithu",
      animal: "Parrot",
      breed: "Mix",
    }),
  ]);
};*/
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
