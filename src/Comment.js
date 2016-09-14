import React, { Component } from 'react';
import style from './style';
import marked from 'marked';

class Comment extends Component {
  updatePost(e) {
    e.preventDefault();
    console.log('clicked');
  }
  deletePost(e) {
    e.preventDefault();
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
        <a style={ style.updateLink} href='#' onClick={ this.updatePost }>update</a>
        <a style={ style.deleteLink} href='#' onClick={ this.deletePost }>delete</a>
      </div>
    )
  }
}

export default Comment;
