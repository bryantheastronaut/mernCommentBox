import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  loadCommentsFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data });
      })
  }
  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2 style={ style.title }>Comments:</h2>
      <CommentList data={ this.state.data }/>
      <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
      </div>
    )
  }
}

export default CommentBox;
