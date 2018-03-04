import React, { Component } from 'react';
import Comment from './Comment';
import style from './style';

class CommentList extends Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <li key={comment._id}>
          <Comment
            author={ comment.author }
            uniqueID={ comment['_id'] }
            onCommentDelete={ this.props.onCommentDelete }
            onCommentUpdate={ this.props.onCommentUpdate }
            key={ comment._id }>
            { comment.text }
          </Comment>
        </li>
      )
    })
    return (
      <div style={ style.commentList }>
        <ul>
          { commentNodes }
        </ul>
      </div>
    )
  }
}

export default CommentList;
