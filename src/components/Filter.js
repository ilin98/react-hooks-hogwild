import React, {useState} from "react";

function Filter({onFilterClick, button, onCategoryChange}) {

    return (
        <div>
            <button onClick={onFilterClick}>{button}</button>
            <h5>Sort By</h5>
            <select name="filter" onChange={onCategoryChange}>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
            <br/>
            <br/>
        </div>
    )
}

export default Filter
