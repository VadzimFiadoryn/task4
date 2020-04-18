import React from 'react';
import style from './Selector.module.css'

class SelectListTask extends React.Component {
    state = {
        selectOn: true
    }

    clickSelect = () => {
        this.setState({selectOn: (!this.state.selectOn)})
    }

    clickSelectButton = (e) => {
        this.setState({selectOn: (!this.state.selectOn)})
        this.props.changePriorityList(this.props.id, e.currentTarget.value)
    }

    render = () => {
        return (
            <div>
                {this.state.selectOn
                    ?
                    <button onClick={this.clickSelect}>SELECT</button>
                    :
                    <div>
                        <button onClick={this.clickSelectButton}
                                value='high'>
                            H
                        </button>
                        <button onClick={this.clickSelectButton}
                                value='low'>
                            L
                        </button>
                        <button onClick={this.clickSelectButton}
                                value='easy'>
                            E
                        </button>
                    </div>
                }
            </div>

        );
    }
}

export default SelectListTask;