import React from "react";

import "./search-box.style.css";

const SearchBox = ({name, placeholder, handleChange, style}) => {
    return(
        <div className="search-box-wrapper">
            <input type="text"
                   name={name}
                   className={style} 
                   onChange={handleChange} 
                   placeholder={placeholder}/>
        </div>
    )
}

export default SearchBox;