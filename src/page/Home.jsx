import { useEffect } from "react";
import CardList from "../components/Cardlist";
import { useMoviesStore } from "../store/movies.store";

const Home = () => {
  const movies = useMoviesStore((state) => state.movies);
  const getMovies = useMoviesStore((state) => state.getMovies);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <section>
      <div className="container">
        <h2>Listado de peliculas</h2>
        <CardList data={movies} />
      </div>
    </section>
  );
}

export default Home;