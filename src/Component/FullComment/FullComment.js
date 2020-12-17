import React, {Component} from 'react';
import CommentService from "../../Servise/CommentService";

class FullComment extends Component {
    state = {comment: null};

    commentService = new CommentService();

    async componentDidMount() {
        let {commentId} = this.props;
        let comment = await this.commentService.getComment(commentId);
        this.setState({comment})
    }

    render() {
        let {comment} = this.state;
        return (
            <div>
                {
                    comment && <div>  {comment.name} - {comment.id} </div>
                }
            </div>
        );
    }
}

export default FullComment;
