import React from 'react';
import './SecondTask.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import saveState from "./surse/saveState";
import restoreState from "./surse/restoreState";
import Selector from "./Selector/Selector";
import Loading from "../Loading/Loading";

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

        setTimeout(
            () => this.setState({loading: true}), //chenge Loading
            3000
        );
    }

    nextTaskId = 0;

    state = {
        tasks: [],
        filterValue: 'All',
        priority: '',
        loading: false
    }

    addTask = (newTitleText) => {
        if (this.state.priority === '') {
            alert("change level")
        } else {
            let newTask = {
                id: this.nextTaskId,
                title: newTitleText,
                isDone: false,
                priority: this.state.priority
            }
            this.nextTaskId++
            let newTasks = [...this.state.tasks, newTask]
            this.setState({tasks: newTasks}, () => {
                saveState(this.state)
            })
        }
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
        this.setState({tasks: newTasks}, () => {
            saveState(this.state)
        })
    };

    changeStatus = (taskId, status) => {
        this.change(taskId, {isDone: status})
    };

    changeTitle = (taskId, title) => {
        this.change(taskId, {title: title})
    }

    changePriority = (priorityValue) => {
        this.setState({priority: priorityValue}, () => {
            saveState(this.state)
        })
    }

    render = () => {
        //alert(this.state.loading)
        return (
            <div className="App">
                <div className="todoList">

                    {(this.state.loading)
                        ?
                        <div>
                            <TodoListHeader addTask={this.addTask}/>
                            <Selector changePriority={this.changePriority}/>
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
                        :
                        <Loading/>}
                </div>
            </div>
        );
    }
}

export default SecondTask;