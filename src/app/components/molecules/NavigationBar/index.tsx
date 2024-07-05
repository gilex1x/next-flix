import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchMovie } from "@/app/redux/actions";
import SearchBar from '@/app/components/atoms/SearchBar/index'
import ActionButton from '../../atoms/ActionButton';
import style from '@/app/styles/molecules/navigationBar.module.css'
const NavigationBar = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const dispatcher = useDispatch()
    const handleSearch = () => {
        dispatcher(fetchSearchMovie({ query: searchValue }))
    }
    return (
        <nav className={style.naviAgation_container}>
            <div>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                <ActionButton buttonText='Buscar' callback={handleSearch} isDisabled={searchValue === ''} />
            </div>
        </nav>
    )
};

export default NavigationBar