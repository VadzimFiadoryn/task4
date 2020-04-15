import React from 'react';
import propTypes from 'prop-types';

class TodoListFooter extends React.Component {
    state = {
        isHidden: true
    }
    onShow = () => {
        this.setState({isHidden: true})
    }
    onHidden = () => {
        this.setState({isHidden: false})
    }
    render = () => {

        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";
        return (
            <div className="todoList-footer">
                {this.state.isHidden && <div>
                    <button onClick={() => {
                        this.props.changeFilter('All')
                    }} className={classForAll}>
                        All
                    </button>
                    <button onClick={() => {
                        this.props.changeFilter('Completed')
                    }} className={classForCompleted}>
                        Completed
                    </button>
                    <button onClick={() => {
                        this.props.changeFilter('Active')
                    }} className={classForActive}>
                        Active
                    </button>
                </div>
                }
                {!this.state.isHidden && <span onClick={() => this.onShow()}>hidden</span>}
                {this.state.isHidden && <span onClick={() => this.onHidden()}>show</span>}
            </div>
        );
    }
}

export default TodoListFooter;

TodoListFooter.propTypes = {
    filterValue: propTypes.string
}