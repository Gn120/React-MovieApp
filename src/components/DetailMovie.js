import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./DetailMovie.module.css";

function DetailMovie({
  id,
  coverImg,
  title,
  summary,
  genres,
  rating,
  runtime,
  like_count,
}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <h3 className={styles.movie_title}>
        <h2 className={styles.link}>{title}</h2>
      </h3>
      <h2>{`${rating}⭐ | ${runtime}⏳ | ${like_count}👍`}</h2>
      <p>{summary}</p>
      <ul className={styles.genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

DetailMovie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  like_count: PropTypes.string.isRequired,
};

export default DetailMovie;
