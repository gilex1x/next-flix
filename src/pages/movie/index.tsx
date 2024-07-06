import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import { fetchMovieDetails } from '@/app/redux/actions';
import { useSelector } from 'react-redux';

const MoviePage = () => {
    const searchParams = useSearchParams();
    const dispatcher = useDispatch();
    const movieDetails = useSelector((state: any) => state.movieDetails)
    useEffect(() => {
        const movieId = Number(searchParams?.get('movieId'));
        dispatcher(fetchMovieDetails(movieId))
    }, []);
    return (
        <>
        <h1>{movieDetails.title}</h1>
        </>
    )
};

export default MoviePage