import React, {Component} from 'react';
import Post from "../../Component/Post/Post";
import PostService from "../../Servise/PostService";
import './Allposts.css'
import {Route, Switch, withRouter} from "react-router-dom";
import FullPost from "../../Component/FullPost/FullPost";

class AllPosts extends Component {

    postService = new PostService();

    state = {posts:[]}

    async componentDidMount() {
        let posts = await this.postService.posts();
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    posts.map(post => <Post item={post} key={post.id}/>)
                }
                <div className={'all-posts-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} exact render={(props) => {
                            let {match:{params:{id}}} = props;
                            return <FullPost postId={id} key={id}/>;
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllPosts);
