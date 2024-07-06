import Link from 'next/link';
import style from '@/app/styles/atoms/cardInfo.module.css';

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
            <div className={style.card_info_morebtn}>
                <Link href={`/movie?movieId=${movieId}`}>Detalle</Link>
            </div>
        </div>
    )
};

export default CardInfo