import React from 'react';
import style from './Selector.module.css'

class Selector extends React.Component {

    changesSelector = (e) => {
        this.props.changePriority(e.currentTarget.value)
    }

    render = () => {
        return (
            <div className={style.MainSelector}>
                <div className={style.selector}>
                    <input type="radio" id="high"
                           name="levelPriority" value="high"
                           onChange={this.changesSelector}/>
                    <label> high </label>
                </div>

                <div className={style.selector}>
                    <input type="radio" id="low"
                           name="levelPriority" value="low"
                           onChange={this.changesSelector}/>
                    <label> low </label>
                </div>

                <div className={style.selector}>
                    <input type="radio" id="easy"
                           name="levelPriority" value="easy"
                           onChange={this.changesSelector}/>
                    <label> easy </label>
                </div>
            </div>

        );
    }
}

export default Selector;