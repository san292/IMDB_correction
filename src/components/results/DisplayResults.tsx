import React, { useEffect, useState } from "react";

import { fetchAPI } from "../../api/fetchAPI";
import CardResult from "./CardResult";
import style from "./DisplayResults.module.css";
import { useParams } from "react-router";
import { TopRatedAPI } from "../../interface/api";

function DisplayResults({ results }:TopRatedAPI) {


console.log('display, results', results);

  // const [moviesList, setMoviesList] = useState([]);
  // const { genre } = useParams();
  // useEffect(() => {
  //   const response = async (): Promise<TopRatedAPI> => {
  //     const data = await fetch(
  //       `https://api.themoviedb.org/3/movie/${
  //         genre ? genre : "popular"
  //         // genre === "trending" ? "movie/top_rated" : "trending/all/day"
  //       }?api_key=${import.meta.env.VITE_MVDB_KEY}&language=en-US&page=1`
  //     );
  //     const responseApi = await data.json();
  //     setMoviesList(responseApi.results);
  //   };

  //   response();
  // }, []);
  // console.log('moviesList', moviesList);
 

  return (
    <div className={style.container}>
      {results?.map((trend: any) => (
        <CardResult
          results={{
            id: trend.id,
            title: trend.title,
            vote: trend.vote_average,
            poster: trend.poster_path,
            date: trend.first_air_date,
          }}
          key={trend.id}
        />
      ))}
    </div>
  );
}

export default DisplayResults;
