import React, { Component } from 'react';
import List from 'terra-list';
import moment from 'moment';
import Textarea from 'terra-form-textarea';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';

class CommentThread extends Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    const comments = [
      { text: "Comment 1", dateTime: moment().format('MM/DD/YYYY hh:mm') },
      { text: "Comment 1", dateTime: moment().format('MM/DD/YYYY hh:mm') },
      { text: "Comment 1", dateTime: moment().format('MM/DD/YYYY hh:mm') },
    ];
    this.state = {
      buttonEnabled: false,
      value: '',
      comments: comments,
    };
  }

  changeHandler(event) {
    let buttonEnabled = false;
    const value = event.target.value;
    if (value !== '') {
      buttonEnabled = true;
    }
    this.setState({
      buttonEnabled,
      value,
    });
  }

  submitHandler() {
    const commentText = this.state.value;
    const commentDateTime = moment();
    this.props.submitComment(this.props.locationId, commentText, commentDateTime);
    const newComments = [...this.state.comments, { text: commentText, dateTime: commentDateTime.format('MM/DD/YYYY hh:mm') }];
    this.setState({
      buttonEnabled: false,
      value: '',
      comments: newComments,
    });
  }

  render() {
    const commentList = [];
    this.state.comments.forEach((comment, index) => {
      commentList.push(
        <List.Item
          key={index}
          content={
            <Spacer padding="large">
              <Arrange
                fitStart={comment.dateTime}
                fill={comment.text}
              />
            </Spacer>
          }
        />
      );
    });

    return (
      <div>
        <List isDivided>
          {commentList}
        </List>
        <div>
          <Textarea onChange={this.changeHandler} value={this.state.value} />
          <Arrange
            fill={<div></div>}
            fitEnd={
              <Button text="Add Comment" type="submit" isDisabled={!this.state.buttonEnabled} onClick={this.submitHandler} />
            }
            align="center"
          />
        </div>
      </div>
    );
  }
}

export default CommentThread;
