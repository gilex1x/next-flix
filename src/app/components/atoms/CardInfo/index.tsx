interface CardInfoProps {
    title: string;
    poster_path: string;
    overview: string;
    movieId: number;
}

const CardInfo = ({ title, poster_path, overview, movieId }: CardInfoProps) => {
    return (
        <div>
            <span>{title}</span>
            <p>{overview}</p>
        </div>
    )
};

export default CardInfo