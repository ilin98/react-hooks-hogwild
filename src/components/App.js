import React, {useState} from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import Filter from "./Filter";

import hogs from "../porkers_data";

function App() {

	const [filterGreased, setFilterGreased] = useState(true)
	const [sortByCategory, setSortByCategory] = useState("name")

	function handleFilterClick(){
        setFilterGreased(!filterGreased)
    }

	const buttonDisplay = filterGreased ? "Display Greased" : "Display All";

	function handleCategoryChange(e) {
		setSortByCategory(e.target.value)
	}


	return (
		<div className="App">
			<Nav />
			<Filter onFilterClick={handleFilterClick} button={buttonDisplay}
			onCategoryChange={handleCategoryChange} />
			<TileList hogs={hogs} filteredGreased={filterGreased} sortByCategory={sortByCategory}/>
		</div>
	);
}

export default App;
