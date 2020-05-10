import React, { useState } from 'react';

function ExercisesAll({ exercises, removeExercise }) {

    const [open, setOpen] = useState('');

    function openExercise(id) {
        if (id === open) {
            setOpen('')
        } else {
            setOpen(id);
        }
    }

    function deleteExercise(exercise) {
        removeExercise(exercise);
    }

    return (
        <div className="ExercisesAll">
            <div className="exercise-list">
                {
                    exercises.map(exercise => {
                        return (
                            <div onClick={e => { e.preventDefault(); openExercise(exercise._id) }} key={exercise._id} className="exercise-card">
                                <h5>{exercise.name}</h5>
                                <button className="exercise-remove-btn" onClick={e => {e.preventDefault(); deleteExercise(exercise)}}>Remove</button>
                                <p>{exercise.description}</p>
                                {
                                    open === exercise._id
                                        ?
                                        <div className="exercise-card-footer">
                                            Footer
                                    </div>
                                        :
                                        ""
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ExercisesAll;
