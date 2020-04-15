import React from 'react';
import PropTypes from 'prop-types';

class TodoListHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        error: false,
        title: ""
    };

    onAddTaskClick = () => {
        let newTitle = this.state.title;
        this.setState({title: ''});
        if (newTitle === "") {
            // сетаем в стейт {error: true}
            this.setState({error: true})
        } else {
            this.setState({error: false})
            this.props.addTask(newTitle);
        }
    }
    onKeyPress = (e) => {
        if (e.key === "Enter")
            this.onAddTaskClick();
    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input onKeyPress={this.onKeyPress}
                           onChange={(e) => {
                               this.setState({error: false, title: e.currentTarget.value})
                           }}
                           className={this.state.error ? "error" : ""}
                           type="text"
                           value={this.state.title}
                           placeholder="New task name"/>
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

TodoListHeader.propTypes = {
    refTitleTask: PropTypes.object,
    onAddTaskClick: PropTypes.func,
}

