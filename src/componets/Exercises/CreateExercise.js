import React, { useState } from 'react';
import apiRequest from '../../http/request';
import { connect } from 'react-redux';
import './Exercises.css';

function CreateExercise(props) {

  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);

  async function create(e) {
    console.log('entra');
    e.preventDefault();
    const newExercise = {
      name,
      description
    };
    const result = await apiRequest('POST', 'exercise', newExercise, props.auth.accessToken);
    if (result !== null) {
      setName('');
      setDescription('');
      props.newExercise(result);
    }
  }

  return (
    <form className="AddExercise" onSubmit={create}>
      <h4>Create exercise</h4>
      <div >
        <label htmlFor="name">Name</label>
        <input value={name} className="exercise-input" onChange={e => { setName(e.target.value) }} type="text" placeholder="My exercise" name="name" />
      </div>
      <div >
        <label htmlFor="description">Description</label>
        <textarea value={description} className="exercise-input" onChange={e => { setDescription(e.target.value) }} type="text" placeholder="" name="description" />
      </div>
      <div className="AddExercise-btns">
        <input onClick={props.showAdd} className="button-default" type="button" value="Calcel" />
        <input className="button-primary" type="submit" value="create" />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  }
}

export default connect(mapStateToProps)(CreateExercise);