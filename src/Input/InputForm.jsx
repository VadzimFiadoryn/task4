import React from 'react';
import Input from "./Input";
function InputForm(props) {
    return (
        <div>
            <Input refLinkInput={props.refLinkInput} updateData={props.updateData}/>
        </div>
    );
}

export default InputForm;