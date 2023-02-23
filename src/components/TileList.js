import React, {useState} from "react";
import Tile from "./Tile";

function TileList({ hogs, filteredGreased, sortByCategory }) {

    const displayedHogs = filteredGreased ? hogs : hogs.filter(hog => hog.greased === true)

    function sortedHogs() {
        if (sortByCategory === "name") {
            return displayedHogs.sort((hog1, hog2) => (hog1.name > hog2.name) ? 1 : (hog1.name < hog2.name) ? -1 : 0)
        } else if (sortByCategory === "weight") {
            return displayedHogs.sort((hog1, hog2) => (hog1.weight > hog2.weight) ? 1 : (hog1.weight < hog2.weight) ? -1 : 0)
        } else {
            return displayedHogs
        }
    }
    console.log(sortedHogs())

    const hogList = sortedHogs().map(hog => {
        return <Tile name={hog.name} url={hog.image} specialty={hog.specialty}
        greased={hog.greased} weight={hog.weight} highestMedal={hog["highest medal achieved"]}/>
    })

    return(
        <div>
            {hogList}
        </div>
    )
}

export default TileList;
