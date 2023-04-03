import { useState, useEffect } from "react";

import style from "./Home.module.css";
import { fetchAPI } from "../../api/fetchAPI";
import DisplayResults from "../../components/results/DisplayResults";

function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getData = async () => {
      const getApi = await fetchAPI("popular");
      console.log('getApi', getApi);
      
      setMovies(getApi.results);
    };

    getData();
  }, []);
 

  return (
    <div className={style.home}>
     
      <DisplayResults results={movies} />
    </div>
  );
}

export default Home;
