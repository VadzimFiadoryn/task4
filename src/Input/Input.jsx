import React from 'react';
import InputForm from "./InputForm";
import InputButton from "./InputButton";

class Input extends React.Component {
    render() {
        return (
            <div>
                <InputForm refLinkInput={this.props.refLinkInput}/>
                <InputButton updateData= {this.props.updateData}/>
            </div>
        );
    }
}

export default Input;
