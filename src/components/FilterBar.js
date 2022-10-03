import { useState } from "react";
import "./FilterBar.css";


function FilterBar(props) {

    function handleChange(e) {
        props.search(e.target.value);
        setValue(e.target.value);
    }

    const [value, setValue] = useState("")


    return ( 
        <div className="filter-bar">
        <div className="search-bar d-flex flex-start">
            <i className="bi bi-search"></i>
            <input value={value} onChange={handleChange} className="form-control" placeholder="Search by business name" />
        </div>
        </div>
     );
}

export default FilterBar;