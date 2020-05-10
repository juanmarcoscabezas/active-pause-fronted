import React, { useState, useEffect } from 'react';
import SideNav from '../Nav/SideNav';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import CreateExercise from './CreateExercise';
import ExercisesAll from './ExercisesAll';
import './Exercises.css';

function Exercises(props) {

  const [exercises, setExercises] = useState([]);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    getExercises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getExercises() {
    const result = await apiRequest('GET', 'exercise', null, props.auth.accessToken);
    if (result !== null) {
      setExercises(result);
    }
  }

  function newExercise(exercise) {
    setExercises([exercise].concat(exercises))
  }

  async function removeExercise(exercise) {
    const result = await apiRequest('DELETE', 'exercise/' + exercise._id, null, props.auth.accessToken);
    if (result !== null) {
      const newExercises = exercises.filter(p => {
        return p._id !== exercise._id;
      });
      setExercises(newExercises);
    }
  }

  function showAdd(e) {
    setCreate(!create);
  }

  return (
    <div className="Exercises">
      <section>
        <SideNav />
      </section>
      <main>
        <h1>Exercises</h1>
        <button className="button-primary" onClick={showAdd}>Add Exercise</button>
        {
          create
            ? <CreateExercise newExercise={newExercise} showAdd={showAdd} />
            : ""
        }
        <ExercisesAll exercises={exercises} removeExercise={removeExercise} />
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(Exercises);
