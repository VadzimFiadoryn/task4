import React from 'react';
import styles from './App.module.css';
import NawBar from "./NawBar/NawBar";
import {BrowserRouter, HashRouter} from "react-router-dom";
import FirstTask from "./FirstTask/FirstTask";
import Home from "./Home/Home";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

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
                <Switch>
                    <div className={styles.app}>
                        <NawBar SetNewPath={this.SetNewPath}/>
                        <div>
                            <Route path="/Home" component={Home}/>
                            <Route path="/FirstTask" component={FirstTask}/>
                            <Route path="/SecondTask" component={FirstTask}/>
                        </div>
                    </div>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
