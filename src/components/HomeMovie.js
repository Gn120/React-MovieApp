import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./HomeMovie.module.css";

function HomeMovie({ id, coverImg, title }) {
  return (
    <div className={styles.div_box}>
      <div className={styles.movie_box}>
        <img src={coverImg} alt={title} className={styles.movie_img} />
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`} className={styles.link}>
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );
}

HomeMovie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HomeMovie;
