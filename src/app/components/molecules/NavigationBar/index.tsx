import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchMovie } from "@/app/redux/actions";
import SearchBar from '@/app/components/atoms/SearchBar/index'
import ActionButton from '../../atoms/ActionButton';
import style from '@/app/styles/molecules/navigationBar.module.css'
import { useRouter } from 'next/router';

interface NavigationBarProps {
    showSearchBar: boolean;
    showActionButton: boolean;
    showBackButton: boolean;
}
const NavigationBar = (props: NavigationBarProps) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const router = useRouter()
    const dispatcher = useDispatch()
    const handleSearch = () => {
        dispatcher(fetchSearchMovie({ query: searchValue }));
    }
    const handleBack = () => {
        router.back();
    }
    return (
        <nav className={style.navigation_container}>
            <div className={style.navigation_container_search}>
                {props.showBackButton && <ActionButton buttonText='Volver' callback={handleBack} isDisabled={false} />}
                {props.showSearchBar && <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />}
                {props.showActionButton && <ActionButton buttonText='Buscar' callback={handleSearch} isDisabled={searchValue === ''} />}
            </div>
            <h1>Next-Flix</h1>
        </nav>
    )
};

export default NavigationBar