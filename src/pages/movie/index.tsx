import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import MoviePageTemplate from '@/app/components/templates/moviepage';
import { fetchMovieDetails } from '@/app/redux/actions';
import styles from '@/app/styles/pages/moviePage.module.css'
import MovieDetailList from '@/app/components/molecules/MovieDetailsList';

const MoviePage = () => {
    const searchParams = useSearchParams();
    const dispatcher = useDispatch();
    const movieDetails = useSelector((state: any) => state.movieDetails)
    useEffect(() => {
        const movieId = Number(searchParams?.get('movieId'));
        dispatcher(fetchMovieDetails(movieId));
        console.log(movieDetails)
    }, []);
    return (
        <MoviePageTemplate>
            <section className={styles.movie_banner_container}>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} className={styles.movie_banner_container_image} />
            </section>
            <section className={styles.movie_banner_container_details}>
                <h1>{movieDetails?.title}</h1>
                <p>{movieDetails?.overview}</p>
                <MovieDetailList details={movieDetails}/>
            </section>
        </MoviePageTemplate>
    )
};

export default MoviePage