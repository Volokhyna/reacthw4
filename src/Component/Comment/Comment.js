import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.id} - {item.email} - <button> <Link to={`${url}/${item.id}`}> Chose </Link> </button>
            </div>
        );
    }
}

export default withRouter(Comment);
