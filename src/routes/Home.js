import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    // const response = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    // );
    // const json = await response.json();
    // 위 구문과 동일한 동작, 조금 더 긴 코드

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //key는 React.js에서 map내 component들을 render할 때 사용
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
          {/* // array data가 있는 경우 각각 item을 꺼내어 활용해야 하기에 map을 사용!  */}
          {/* Optional Chaining(옵셔널 체이닝, ?.)을 이용하는 방법 */}
        </div>
      )}
    </div>
  );
}

export default Home;
