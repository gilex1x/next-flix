import style from '@/app/styles/atoms/cardInfo.module.css'
import Link from 'next/link';

interface CardInfoProps {
    title?: string;
    poster_path?: string;
    overview?: string;
    movieId?: number;
}

const CardInfo = ({ title, poster_path, overview, movieId }: CardInfoProps) => {
    return (
        <div className={style.card_info} >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}-poster`} width={180} />
            <span>{title}</span>
            <div>
                <button>Favorito</button>
                <Link href={`/movie?movieId=${movieId}`}>Detalle</Link>
            </div>
        </div>
    )
};

export default CardInfo