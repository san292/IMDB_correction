import React, { useState } from "react";
import { fetchAPI } from "../../../api/fetchAPI";
import {useSearchParams } from "react-router-dom";
import "./GetTrending.module.css";
import { ResultTop, TopRatedAPI } from "../../../interface/api";
import style from "./GetTrending.module.css";

const GetTrending = () => {
  const [topRated, setTopRated] = useState<ResultTop[]>([]);
  const [trending, setTrending] = useState<TopRatedAPI[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleGetUpcoming = async () => {
    const value = "upcoming";

    setSearchParams(value);
    fetchAPI(value).then((res)=>setTrending(res.results))
    
    
    console.log('serchparams', searchParams.get(value));
  };
  

  const handleGetTopRated = () => {
    const value = "top_Rated";

    setSearchParams(value);
    fetchAPI(value).then((res) => setTopRated(res.results));
  };

  return (
    <>
    <div className={style.container}>
      <button className={style.link} onClick={handleGetUpcoming}>
        Trending
      </button>

      <button className={style.link} onClick={handleGetTopRated}>
        Top Rated
      </button>
    </div>
    </>
  );
};
export default GetTrending;
