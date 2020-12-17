import React, {Component} from 'react';
import UserService from "../../Servise/UserService";

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
        let {userId} = this.props;

        return (
            <div>
                {userId}
                {user && <div> {user.name} </div>}
            </div>
        );
    }
}

export default FullUser;
