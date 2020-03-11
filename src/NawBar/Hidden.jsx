import React from 'react';
import styles from "./NawBar.module.css";
import {NavLink} from "react-router-dom";

class Hidden extends React.Component {

    SetNewPath = (path) => {
        this.props.SetNewPath(path)
    }

    render() {
        return (
            <div className={styles.Hidden}>
                <NavLink to="/Home" activeClassName={styles.activeLink}
                         onClick={() => this.SetNewPath('/Home')}> Home </NavLink>

                <NavLink to="/FirstTask" activeClassName={styles.activeLink}
                         onClick={() => this.SetNewPath('/FirstTask')}> FirstTask </NavLink>

                <NavLink to="/SecondTask" activeClassName={styles.activeLink}
                         onClick={() => this.SetNewPath('/SecondTask')}> SecondTask </NavLink>
            </div>
        );
    }
}

export default Hidden;
