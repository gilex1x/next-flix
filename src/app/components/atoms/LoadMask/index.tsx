import { useSelector } from "react-redux";
import styles from '@/app/styles/atoms/loadMask.module.css'
const LoadMask = () => {
    const isLoading = useSelector((state: any) => state.isLoading);
    return isLoading ? (
        <dialog open className={styles.loadMask_container}>
            <span>Loading Data . . .</span>
        </dialog>
    ) : null
};

export default LoadMask