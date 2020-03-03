import React from 'react';

function InputButton(props) {
    return (
        <div>
            <button onClick={() => props.updateData()}>ADD</button>
        </div>
    );
}

export default InputButton;
