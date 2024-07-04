
interface SearchBarProps {
    searchValue: string;
    setSearchValue: (newValue: string) => void;

}
const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {
    return (
        <>
            <input
                type='search'
                placeholder="Ingresa el nombre de una pelicula"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </>
    )
};

export default SearchBar