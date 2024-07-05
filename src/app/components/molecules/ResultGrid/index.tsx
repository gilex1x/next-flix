import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "@/app/redux/actions";
import CardInfo from "../../atoms/CardInfo";
import style from '@/app/styles/molecules/resultGrid.module.css'
const ResultGrid = () => {
    const listData = useSelector((state: any) => state.data);
    const searchParams = useSelector((state: any) => state.searchParams);
    const dispatcher = useDispatch();
    const handleLoadMore = (): void => {
        dispatcher(fetchDataRequest({ page: searchParams.page + 1 }));
    }
    useEffect(() => {
        console.log(searchParams, listData)
    }, [listData])
    return (
        <section >
            <div className={style.result_grid_container}>
                {listData?.map((item: any, index: number) => {
                    return <CardInfo key={item.id} poster_path={item.poster_path} title={item.title} overview={item.overview} />
                })}
            </div>
            <button onClick={handleLoadMore}>Ver más</button>
        </section>
    )
};

export default ResultGrid