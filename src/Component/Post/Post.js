import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        let {item, match:{url}} = this.props;
        return (
            <div>
                {item.userId} - {item.title} - <button> <Link to={`${url}/${item.id}`}> Chose </Link> </button>
            </div>
        );
    }
}

export default withRouter(Post);
