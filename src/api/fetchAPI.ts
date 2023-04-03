import { TopRatedAPI } from "./../interface/api.d";

export const fetchAPI = async (genre: string): Promise<TopRatedAPI> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${genre ? 'upcoming' :'top_Rated'
      // genre === "trending" ? "movie/top_rated" : "trending/all/day"
      
    }?api_key=${import.meta.env.VITE_MVDB_KEY}&language=en-US&page=1`
  );
  const data: TopRatedAPI = await response.json();
  return data;
};
