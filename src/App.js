import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import AllUsers from "./Components/AllUsers/AllUsers";
import AllPosts from "./Components/AllPosts/AllPosts";
import AllComments from "./Components/AllComments/AllComments";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <ul>
                        <li> <Link to={'/users'}> Users </Link> </li>
                        <li> <Link to={'/posts'}> Posts </Link> </li>
                        <li> <Link to={'/comments'}> Comments </Link> </li>
                    </ul>


                    <div className={'border'}>
                        <Switch>
                            <Route path={'/users'} render={() => {return <AllUsers/>}}/>
                            <Route path={'/posts'} component={AllPosts}/>
                            <Route path={'/comments'} component={AllComments}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
