import { useState } from 'react';
import SearchBar from '@/app/components/atoms/SearchBar/index'
import ActionButton from '../../atoms/ActionButton';
import style from '@/app/styles/molecules/navigationBar.module.css'
const NavigationBar = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const handleSearch = () => {
        //dispaatch search action
    }
    return (
        <nav className={style.navigation_container}>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <ActionButton buttonText='Buscar' callback={handleSearch} isDisabled={searchValue === ''} />
        </nav>
    )
};

export default NavigationBar