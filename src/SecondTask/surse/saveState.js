import React from 'react';

const saveState = (state) => {
    let stateAsString = JSON.stringify(state);
    localStorage.setItem("our-state", stateAsString);
}
export default saveState;