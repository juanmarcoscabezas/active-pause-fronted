import React from 'react';

function Pause({pauses}) {
  return (
    <div className="Pause">
        <section>
            <h1>Pause</h1>
            {
                pauses.map(pause => {
                    return (
                        <div key={pause._id}>
                            <h3>{pause.name}</h3>
                            <p>{pause.description}</p>
                        </div>
                    )
                })
            }
        </section>
    </div>
  );
}

export default Pause;
