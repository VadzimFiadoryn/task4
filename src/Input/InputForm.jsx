import React from 'react';

function InputForm(props) {
    return (
        <div>
            <input ref = {props.refLinkInput} type="text"/>
        </div>
    );
}

export default InputForm;
