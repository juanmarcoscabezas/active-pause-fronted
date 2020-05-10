import React, { useState } from 'react';
import './Top.css'

function Top({ tops }) {

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
        <div className="Top">
            <div className="top-header">
                <h3>Most popular</h3>
                {
                    start === false 
                    ?
                        <button onClick={startExercise} className="button-primary" conte="asas">Start</button>
                    :   
                        <button onClick={stopExercise} className="button-primary" conte="asas">Stop</button>
                } 
            </div>
            <h4 className="cronometer">{getMinutes()}:{getSeconds()}</h4>
            <div className="top-list">
                {
                    tops.map(top => {
                        return (
                            <div key={top._id} className="top-card">
                                <h5>{top.name}</h5>
                                <p>{top.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Top;
