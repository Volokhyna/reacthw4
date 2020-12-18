import React, {Component} from 'react';
import UserService from "../../Servise/UserService";
import {Link, Route, withRouter} from "react-router-dom";
import './FullUser.css'
import UserPosts from "../UserPosts/UserPosts";

class FullUser extends Component {
    state = {user: null};

    userService = new UserService();

    async componentDidMount() {
        let {userId} = this.props;
        let user = await this.userService.getUser(userId);
        this.setState({user})
    }

    render() {
        let {user} = this.state;
        let {match: {url}, userId} = this.props;


        return (
            <div>
                {user && <div> {user.id} - {user.name} - <Link to={url + '/posts'}> Show user posts </Link> </div>}

                <div className={'box-posts'}>
                    <Route path={url + '/posts'} render={() => {
                        return <UserPosts userId={userId} key={userId}/>;
                    }}/>
                </div>

            </div>

        );
    }
}

export default withRouter(FullUser);
