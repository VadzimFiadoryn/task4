import React from 'react';
import styles from './App.module.css';
import NawBar from "./NawBar/NawBar";
import {HashRouter,Switch,Route} from "react-router-dom";
import FirstTask from "./FirstTask/FirstTask";
import Home from "./Home/Home";
import SecondTask from "./SecondTask/SecondTask";

class App extends React.Component {
    state = {
        infoPage: '',
        path1: ''
    };

    SetNewPath = (path) => {
        this.setState({
            path1: path
        })
    }

    render() {
        return (
            <HashRouter>
                <div  className={styles.app}>
                    <NawBar SetNewPath={this.SetNewPath} className ={styles.NawBar}/>
                    <Switch>
                        <Route path="/Home" component={Home}/>
                        <Route path="/FirstTask" component={FirstTask}/>
                        <Route path="/SecondTask" component={SecondTask}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
