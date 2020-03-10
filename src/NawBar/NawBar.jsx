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
                    onClick={() => this.changeStateNawBar()}>
                    <Hidden SetNewPath={this.props.SetNewPath}/>
                </span>}
                {!this.state.isHidden && <span
                    onClick={() => this.changeStateNawBar()}
                    className={styles.Show}>
                    S<br/>H<br/>O<br/>W</span>}
            </div>

        )
            ;
    }
}

export default NawBar;
