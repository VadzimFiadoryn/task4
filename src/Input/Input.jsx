import React from 'react';
import styles from './Input.module.css';

class Input extends React.Component {

    state = {
        error: false,
        title: "",
    };

    onChangeTitle = (e) => {
        this.setState({
            title: e.currentTarget.value,
            error: false
        })
        if (e.currentTarget.value === "") {
            this.setState({error: true})
        }
    }

    addNewTitle = () => {
        if (this.state.title === "") {
            this.setState({
                error: true
            })
        } else {
            this.props.updateData(this.state.title)
            this.setState({
                title: ""
            })
        }
    }

    pressEnter = (e) => {
        if (e.key === "Enter") {
            this.addNewTitle()
        }
    }

    render() {
        return (
            <div className={styles.Input}>
                <input
                    className={(this.state.error) ? styles.ErrorRed : styles.InputBlue}
                    onChange={this.onChangeTitle}
                    onKeyPress={this.pressEnter}
                    value={this.state.title}
                />
                <div>
                    <button onClick={this.addNewTitle}>ADD</button>
                </div>
            </div>
        );
    };
}

export default Input;
