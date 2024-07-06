import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

const MoviePage = () => {
    const searchParams = useSearchParams();
    useEffect(() => {
        console.log(searchParams?.get('movieId'))
    }, [searchParams]);
    return (
        <>
        </>
    )
};

export default MoviePage