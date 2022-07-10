import { useState } from "react";
const ANIMALS=["Bird","Cat","Dog","Dinosaur","Reptile"]
const SearchParams=()=>{
    // const location = "San Francisco, CA";
    const [location,setLocation]=useState("San Francisco, CA")
    const [animal,setAnimal]=useState("")
    const [breed,setBreed]=useState("")
    const BREEDS=["Poodle","Pomerian","Chihuahua"]
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={animal}
              onChange={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
              onBlur={(e) => {
                setAnimal(e.target.value);
                setBreed("");
              }}
            >
              <option />
              {ANIMALS.map((animal) => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={breed}
              onChange={(e) => {
                
                setBreed(e.target.value);
              }}
              onBlur={(e) => {
                
                setBreed(e.target.value);
              }}
            >
              <option />
              {BREEDS.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>

          <button>Submit</button>
        </form>
      </div>
    );
}
export default SearchParams