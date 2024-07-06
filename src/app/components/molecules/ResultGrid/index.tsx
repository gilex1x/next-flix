import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataRequest } from "@/app/redux/actions";
import CardInfo from "../../atoms/CardInfo";
import style from '@/app/styles/molecules/resultGrid.module.css'
import ActionButton from "../../atoms/ActionButton";
const ResultGrid = () => {
    const dataList = useSelector((state: any) => state.dataList);
    const dataSearchList = useSelector((state: any) => state.dataSearchList);
    const searchParams = useSelector((state: any) => state.searchParams);
    const dispatcher = useDispatch();
    const handleLoadMore = (): void => {
        dispatcher(fetchDataRequest({ page: searchParams.page + 1 }));
    }
    return (
        <section className={style.result_grid_container}>
            <div className={style.result_grid_results}>
                {dataList?.map((item: any, index: number) => {
                    return <CardInfo movieId={item.id} key={item.id} poster_path={item.poster_path} title={item.title} overview={item.overview} />
                })}
                {dataSearchList?.map((item: any, index: number) => {
                    return <CardInfo movieId={item.id} key={item.id} poster_path={item.poster_path} title={item.title} overview={item.overview} />
                })}
            </div>
            {
                dataSearchList.length == 0 &&
                <ActionButton buttonText="Ver más" callback={handleLoadMore} isDisabled={false} />
            }
        </section>
    )
};

export default ResultGrid