import "./App.css";
import { Routes, Route } from "react-router-dom";
//COMPONENTS
import Bienvenida from "./components/bienvenida/Bienvenida";
import Home from "./components/home/Home";
import CountryDetail from "./components/countryDetail/countryDetail";
import Form from "./components/form/Form";

function App() {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={<Bienvenida />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Detail/:id" element={<CountryDetail />} />
        <Route path="/Form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
