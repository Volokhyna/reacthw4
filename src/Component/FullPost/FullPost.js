import React, {Component} from 'react';
import PostService from "../../Servise/PostService";

class FullPost extends Component {
    state ={post: null};

    postService = new PostService();

    async componentDidMount() {
        let {postId} = this.props;
        let post = await this.postService.getPost(postId);
        this.setState({post})
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {
                    post && <div> {post.body} </div>
                }
            </div>
        );
    }
}

export default FullPost;
