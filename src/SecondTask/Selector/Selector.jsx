import React from 'react';
import style from './Selector.module.css'

class Selector extends React.Component {
    render = () => {
        return (
            <div className={style.MainSelector}>
                <div className={style.selector}>
                    <input type="radio" id="high"
                           name="levelPriority" value="high" />
                    <label> high </label>
                </div>
                <div className={style.selector}>
                    <input type="radio" id="low"
                           name="levelPriority" value="low" />
                    <label> low </label>
                </div>
                <div className={style.selector}>
                    <input type="radio" id="easy"
                           name="levelPriority" value="easy" />
                    <label> easy </label>
                </div>
            </div>

        );
    }
}

export default Selector;