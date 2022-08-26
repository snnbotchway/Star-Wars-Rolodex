import './search-box.css'

const SearchBox = ({className,search,placeholder}) => {
    return(
        <div>
            {<input className={`search-box ${className}`} type="search" placeholder={placeholder} onChange={search}/> }
        </div>
    )
}

export default SearchBox