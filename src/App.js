import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
const App=()=>{
    return (
      <StrictMode>
        <BrowserRouter>
          <header>
            
            <Link to="/"> Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
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
