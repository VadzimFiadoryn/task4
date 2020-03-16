import React from 'react';
import './SecondTask.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import saveState from "./surse/saveState";
import restoreState from "./surse/restoreState";

class SecondTask extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let LocalStr = restoreState();
        this.setState(LocalStr, () => {
            this.state.tasks.forEach(t => {
                if (t.id >= this.nextTaskId) {
                    this.nextTaskId = t.id + 1
                }
            })
        })
    }

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: 'All'
    }

    addTask = (newTitleText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitleText,
            isDone: false,
            priority: 'low'
        }
        this.nextTaskId++
        let newTasks = [...this.state.tasks, newTask]
        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        })
    }
    deleteTask = (id) => {
        let newList = this.state.tasks.filter(t => t.id !== id)
        this.setState({tasks: newList}, () => {
            saveState(this.state)
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({filterValue: newFilterValue}, () => {
            saveState(this.state)
        })
    }

    change = (taskId, obj) => {
        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t
            } else {
                return {...t, ...obj}
            }
        })
        debugger
        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        })
    };

    changeStatus =(taskId, status)=> {
        debugger
        this.change(taskId, {isDone: status})
    };

    changeTitle = (taskId, title) => {
        debugger
        this.change(taskId, {title: title})
    }

    render = () => {
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        deleteTask={this.deleteTask}
                        changeTitle={this.changeTitle}
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                            if (this.state.filterValue === 'Active') {
                                return !t.isDone
                            } else if (this.state.filterValue === 'Completed') {
                                return t.isDone
                            } else if (this.state.filterValue === 'All') {
                                return true
                            }
                        })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default SecondTask;