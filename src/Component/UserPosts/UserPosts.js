import React, {Component} from 'react';

class UserPosts extends Component {
    state = {posts: []};

    componentDidMount() {
        let {userId} = this.props;
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => {
                this.setState({posts: value})
            })
    }

    render() {
        let {posts} = this.state;
        return (
            <div>
                {
                    posts.map(post =>
                        <div key={post.id}>
                            <ul>
                                <li>
                                     {post.title} - {post.body}
                                </li>
                            </ul>
                        </div> )
                }
            </div>
        );
    }
}

export default UserPosts;
