import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import { About, Home } from "./pages";
import SearchForm from "./components/Search/SearchForm";
import Footer from "./ui/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";

function App() {

 
  
  return (
    <div className="App">
     
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About/>} />
       
        <Route path="/*" element={<h1>Error Page</h1>} />
        
      </Routes>
   <Footer/>
      
    </div>
  );
}

export default App;
