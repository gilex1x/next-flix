import style from '@/app/styles/atoms/cardInfo.module.css'

interface CardInfoProps {
    title?: string;
    poster_path?: string;
    overview?: string;
    movieId?: number;
}

const CardInfo = ({ title, poster_path, overview, movieId }: CardInfoProps) => {
    return (
        <div className={style.card_info} >
            <span>{title}</span>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}-poster`}  width={150}/>
            <div>
                <button>Favorito</button>
            </div>
        </div>
    )
};

export default CardInfo