import React, { useState } from 'react';
import './Pause.css'

function Pause({ pauses }) {

    const [timer, setTimer] = useState();
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);

    function getSeconds() {
        const seconds = time % 60;
        return seconds < 10 ? `0${seconds}` : seconds;
    }

    function getMinutes() {
        const minutes = Math.floor(time / 60);
        return minutes < 10 ? `0${minutes}` : minutes;
    }

    function stopExercise(e) {
        setStart(false);
        clearInterval(timer);
    }

    function startExercise(e) {
        setStart(true);
        const newTimer = setInterval(() => {
            setTime(curr => curr + 1)
        }, 1000);
        setTimer(newTimer);
    }

    return (
        <div className="Pause">
            <div className="pause-header">
                <h3>Exercises</h3>
                {
                    start === false 
                    ?
                        <button onClick={startExercise} className="button-primary" conte="asas">Start</button>
                    :   
                        <button onClick={stopExercise} className="button-primary" conte="asas">Stop</button>
                }
                
            </div>
            <div className="pause-list">
            <h4>{getMinutes()}:{getSeconds()}</h4>
                {
                    pauses.map(pause => {
                        return (
                            <div key={pause._id} className="pause-card">
                                <h5>{pause.name}</h5>
                                <p>{pause.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Pause;
