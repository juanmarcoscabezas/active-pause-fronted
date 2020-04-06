import React from 'react';
import './Pause.css'

function Pause({ pauses }) {
    return (
        <div className="Pause">
            <div className="pause-header">
                <h3>Excercises</h3>
                <button className="button-primary">Start</button>
            </div>
            <div className="pause-list">
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
