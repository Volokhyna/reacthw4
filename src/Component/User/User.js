import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class User extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.username} - {item.email} - <Link to={`${url}/${item.id}`}> Ditails </Link>
            </div>
        );
    }
}

export default  withRouter(User);
