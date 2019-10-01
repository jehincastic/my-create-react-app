import "./App.css";
import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/a" render={() => <h1>Hello World</h1>} />
                    <Route exact path="/ap" render={() => <h1>Hello Worlds</h1>} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
