import React from 'react';


const restoreState = () => {
    let state = {
        tasks: [],
        filterValue: "All"
    }
    let stateAsString = localStorage.getItem("our-state");
    if (stateAsString != null) {
        state = JSON.parse(stateAsString);
    }
    return state;
}

export default restoreState;