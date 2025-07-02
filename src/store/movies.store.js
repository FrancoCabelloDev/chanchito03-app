import { create } from 'zustand';
import { getMovies } from '../services/movies.services';
import { adaptTmdbToMovie } from '../utils/movies.util';


export const useMoviesStore = create((set) => ({
  movies: [],
  getMovies: async () => {
    const data = await getMovies();
    set({ movies: data });
  },
}));