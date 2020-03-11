import React from 'react';
import styles from "./NawBar.module.css";
import Hidden from "./Hidden";


class NawBar extends React.Component {
    state = {
        isHidden: false
    }
    changeStateNawBar = () => {
        this.state.isHidden ? this.setState({isHidden: false}) : this.setState({isHidden: true})
    };

    render() {
        return (
            <div>
                {this.state.isHidden && <span
                    onClick={() => this.changeStateNawBar()}
                    className={styles.Hidden}>
                    {">"}
                    </span>
                || <Hidden SetNewPath={this.props.SetNewPath}/>}
                {!this.state.isHidden && <span
                    onClick={() => this.changeStateNawBar()}
                    className={styles.Show}>
                    {"<"} </span>}
            </div>

        )
            ;
    }
}

export default NawBar;
