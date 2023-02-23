import React, {useState} from "react";

function Tile({ name, url, specialty, greased, weight, highestMedal }) {

    const [showDetails, setShowDetails] = useState(false)

    function handleHogClick() {
        setShowDetails(!showDetails)
    }

    const greasedDisplay = greased ? "Yes" : "No"


    return(
        showDetails ?
        <div className="ui grid container" onClick={handleHogClick}>
            <h2 className="ui eight wide column">{name}</h2>
            <img className="ui eight wide column" src={url} />
            <p className="ui eight wide column">Specialty: {specialty}</p>
            <p className="ui eight wide column">Greased: {greasedDisplay}</p>
            <p className="ui eight wide column">Weight: {weight}lbs</p>
            <p className="ui eight wide column">Highest Medal: {highestMedal}</p>
        </div>
            :
        <div className="ui grid container" onClick={handleHogClick}>
            <h2 className="ui eight wide column">{name}</h2>
            <img className="ui eight wide column" src={url} />
        </div>
    )
}

export default Tile;
