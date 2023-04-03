import { ResultTrend} from "../interface/api";

export const fetchSearchMovies = async (value: string): Promise<ResultTrend> => {
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_MVDB_KEY
      }&query=${value}&language=fr-FR&page=1`
    );
    const data = await response.json();
    return data.results;
    
  } catch (error) {
    throw new Error(`probleme requete fetchSerchMovies`)
    
  }
};
