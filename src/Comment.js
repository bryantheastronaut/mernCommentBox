import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
  }
  updateComment(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //this.props.onCommentUpdate(id);
    console.log('clicked');
  }
  deleteComment(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onCommentDelete(id);
    console.log('oops deleted');
  }
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString());
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div style={ style.comment }>
        <h3>{this.props.author}</h3>
        <span dangerouslySetInnerHTML={ this.rawMarkup() } />
        <a style={ style.updateLink} href='#' onClick={ this.updateComment }>update</a>
        <a style={ style.deleteLink} href='#' onClick={ this.deleteComment }>delete</a>
      </div>
    )
  }
}

export default Comment;
