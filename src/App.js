import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './config/history';
import userList from './components/userList';
import userDetail from './components/userDetail';

class App extends React.Component {

    render() {

        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={userList} />
                    <Route exact path="/userDetail/:id" component={userDetail} />
                </Switch>
            </Router>
        );
    }
}



export default App;
