import React from 'react';
import TodoListTask from "./TodoListTask";
import propTypes from 'prop-types'

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElements = this.props.tasks.map((t, i) => {
            return (
                <TodoListTask
                    task={t}
                    key={i}
                    ChangeTitle ={this.props.ChangeTitle}
                    changeStatus={this.props.changeStatus}
                    deleteTask = {this.props.deleteTask}
                />
            )
        });
        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        );
    }
}

export default TodoListTasks;
TodoListTasks.propTypes = {
    tasks: propTypes.arrayOf(propTypes.object)
}