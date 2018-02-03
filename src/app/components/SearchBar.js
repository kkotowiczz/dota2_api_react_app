import React from 'react'

const SearchBar = props => {
        return (
            <div id="heroSearchWrapper">
                <input id="heroSearch" type="text" onChangeCapture={props.searchBarChangeHandler}/>
            </div>
        )
};

export default SearchBar