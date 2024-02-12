import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState({});
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {
            <DetailMovie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title_long}
              summary={movie.description_intro}
              genres={movie.genres}
              rating={movie.rating}
              runtime={movie.runtime}
              like_count={movie.like_count}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
