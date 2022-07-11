import { useState , useEffect} from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
const ANIMALS=["Bird","Cat","Dog","Dinosaur","Reptile"]
const SearchParams=()=>{
    // const location = "San Francisco, CA";
    const [location,setLocation]=useState("San Francisco, CA")
    const [animal,setAnimal]=useState("")
    const [breed,setBreed]=useState("")
    const BREEDS=useBreedList(animal)
    const [pets,setPets]=useState([])
    useEffect(()=>
    {
      requestPets()
    },[]) //eslint-disable-line react-hooks/exhaustive-deps
    async function requestPets(){
      const res=await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
      )
      const json=await res.json()
      setPets(json.pets)
    }
    return (
      <div className="search-params">
        <form
        onSubmit={e=>{
          e.preventDefault()
          requestPets()
        }}
        >
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
        <Results pets={pets}/>
      </div>
    );
}
export default SearchParams