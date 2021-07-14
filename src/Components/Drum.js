
import './Drum.css';
import React, { useState } from 'react';



function Drum() {

    let scale = "paradiddles";
    let [showing, setShowing] = useState(0);
    console.log(scale);
    let [exercise, setExercise] = useState(scale);

    function selected() {
        setExercise(scale);
        setShowing(1);
    }

    return (
        <div className="drum">
            <h1>My Drum Exercises</h1>
            <h2>Choose an Exercise</h2>
            <div className="select-option">

                <select id="drumexercises" onChange={(event) => { scale = event.target.value; console.log(scale) }}>
                    <option value="singles">Singles</option>
                    <option value="doubles">Doubles</option>
                    <option value="triplets">Triplets</option>
                    <option value="paradiddles" selected>Paradiddles</option>
                    <option value="flams">Flams</option>
                </select>
                <button className="submit" onClick={() => selected()}>Submit</button>
            </div>
            <div className="sep"></div>
            <div className="tempo-box" style={{ display: (showing ? 'flex' : 'none') }}>
                <div className="current-tempo">
                    <h2>{exercise}</h2>
                    <label>
                        <b>Current Tempo -</b>
                    </label>
                    <input type="text"></input>
                </div>
                <div className="goal-tempo">
                    <label>
                        <b>Goal Tempo -</b>
                    </label>
                    <input type="text"></input>
                </div>
                <div>
                    <button className="save">Save</button>
                </div>
            </div>

        </div>
    );
}

export default Drum;