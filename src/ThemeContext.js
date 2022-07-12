import { createContext } from "react";
const ThemeContext=createContext(["green",()=>{}]) //green for the type only, not the actual value
export default ThemeContext