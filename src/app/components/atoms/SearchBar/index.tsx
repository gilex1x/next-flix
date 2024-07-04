import style from '@/app/styles/atoms/searchBar.module.css'
interface SearchBarProps {
    searchValue: string;
    setSearchValue: (newValue: string) => void;

}
const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
    return (
        <>
            <input
                className={style.searchbar}
                type='search'
                placeholder="Ingresa el nombre de una pelicula"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </>
    )
};

export default SearchBar