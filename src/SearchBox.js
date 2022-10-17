const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input 
                className="pa3 ba bw1 b--green bg-lightest-blue" 
                type='search' 
                placeholder="search friend" 
                onChange={ searchChange }
            />
        </div>  
    );
}

export default SearchBox;