import React, { useState, useEffect } from 'react';
import Pause from './Pause/Pause';

function Main(props) {

  const [pauses, setPauses] = useState([]);

  useEffect( () => {
    getPauses();
  }, []); 

  function getPauses() {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(localStorage.getItem('userToken'))
      }
    };

    fetch('http://localhost:3000/pause', config)
      .then(res => res.json())
      .then(
        (result) => {
          if (!result.error) {
            setPauses(result);
          } else {
            alert(result.message);
          }
        },
        (error) => {
          console.log('error', error);
        }
      )
  }

  return (
    <div className="Main">
        <section>
          <h1>Main</h1>
          <Pause pauses={pauses}/>
        </section>
    </div>
  );
}

export default Main;
