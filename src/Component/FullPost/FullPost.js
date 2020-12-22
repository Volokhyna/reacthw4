import React, {Component} from 'react';
import PostService from "../../Servise/PostService";
import {Link, Route, withRouter} from "react-router-dom";
import PostComments from "../PostComments/PostComments";
import './Fullpost.css'

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
        let {match: {url}, postId} = this.props;

        return (
            <div>
                {post && <div> {post.body} - <Link to={url + '/comments'}> Show all comments </Link> </div>}

                <div className={'box-comments'}>
                    <Route path={url + '/comments'} render={() => {
                        return <PostComments postId={postId} key={postId}/>
                    }}/>
                </div>

            </div>
        );
    }
}

export default withRouter(FullPost);
