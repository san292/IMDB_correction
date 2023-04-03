import React, { useEffect, useState } from "react";
import style from "./SearchForm.module.css";
import DisplayResults from "../results/DisplayResults";
import { fetchSearchMovies } from "../../api/fetchSearchMovies";

function SearchForm() {
  const [inputSearchMovie, setInputSearchMovie] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearchMovie(e.target.value);
  };

  useEffect(() => {
    const response = async () => {
      const getMovies = await fetchSearchMovies(inputSearchMovie);
      setSearchMovie(getMovies);
    };
    response();
  }, [inputSearchMovie]);
  console.log('serchmovies', searchMovie);
  

  return (
    <>
      <div className={style.search}>
        <label htmlFor="nom_de_film">Trouve ton film</label>
        <input
          id="nom_de_film"
          value={inputSearchMovie}
          name="search"
          className={style.input}
          type="text"
          placeholder="tape ton titre  "
          onChange={handleChange}
        />
        <button className={style.btn} type="submit">
          Envoyer
        </button>
      </div>
      {/* <DisplayResults results={searchMovie} /> */}
    </>
  );
}

export default SearchForm;
