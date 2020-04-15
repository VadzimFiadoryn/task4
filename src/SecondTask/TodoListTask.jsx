import React from 'react';
import PropType from 'prop-types';

class TodoListTask extends React.Component {
    state = {
        editMode: false
    }
    onIsDoneChanged = (e) => {
        // this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
        alert(e.currentTarget.checked)
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    diactivateEditMode = () => {
        this.setState({editMode: false})
    }
    onChangeTitle = (e) => {
        this.props.changeTitle(this.props.task.id, e.currentTarget.value)
    }

    onChangeStatus = (e) => {
        this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
    }


    render = () => {
        return (
            <div className={this.props.task.isDone ? "todoListTaskDone" : ""}>
                <input
                    type={'checkbox'}
                    checked={this.props.task.isDone}
                    onChange={this.onChangeStatus}/>

                {this.state.editMode
                    ? <input value={this.props.task.title}
                             autoFocus={true}
                             onBlur={this.diactivateEditMode}
                             onChange={this.onChangeTitle}/>
                    : <span onClick={this.activateEditMode}>

                        {this.props.task.id} -
                        {this.props.task.title}
                        - priority: {this.props.task.priority}
                </span>}
                <button
                    onClick={() => this.props.deleteTask(this.props.task.id)}>
                    X
                </button>
            </div>
        );
    }
}

export default TodoListTask;

TodoListTask.propTypes = {
    title: PropType.string,
    isDone: PropType.bool,
    priority: PropType.string,
}