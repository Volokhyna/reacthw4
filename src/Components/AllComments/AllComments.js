import React, {Component} from 'react';
import CommentService from "../../Servise/CommentService";
import {Route, Switch, withRouter} from 'react-router-dom';
import Comment from "../../Component/Comment/Comment";
import './AllComments.css'
import FullComment from "../../Component/FullComment/FullComment";

class AllComments extends Component {

    commentService = new CommentService();

    state = {comments: []};

    async componentDidMount() {
        let comments = await this.commentService.comments();
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    comments.map(comment => <Comment item={comment} key={comment.id}/>)
                }

                <div className={'all-comments-router'}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match:{params:{id}}} = props;
                            return <FullComment commentId={id} key={id}/>;
                        }}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(AllComments);
