import React, {Component} from 'react';
import UserService from "../../Servise/UserService";
import User from "../../Component/User/User";
import './AllUsers.css'
import {Route, Switch, withRouter,} from 'react-router-dom';
import FullUser from "../../Component/FullUser/FullUser";

class AllUsers extends Component {

    userService = new UserService();

    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(user => <User item={user} key={user.id}/>)
                }

                <div className={'all-users-router'}>
                        <Switch>
                            <Route path={`${url}/:id`} exact render={(props) => {
                                return <FullUser {...props}/>;
                            }}/>
                        </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(AllUsers);
