import React, {Component} from 'react';

class PostComments extends Component {
    state = {comments: []};

    componentDidMount() {
        let {postId} = this.props;
        console.log(this.props)
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
            .then(value => value.json())
            .then(value => {
                this.setState({comments: value})
            })
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(comment =>
                        <div key={comment.id}>
                            <ul>
                                <li>
                                    {comment.body}
                                </li>
                            </ul>
                        </div> )
                }
            </div>
        );
    }
}

export default PostComments;
