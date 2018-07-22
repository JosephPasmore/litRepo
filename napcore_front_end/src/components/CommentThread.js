import React, { Component } from 'react';
import List from 'terra-list';
import moment from 'moment';
import Textarea from 'terra-form-textarea';
import Button from 'terra-button';
import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';
import StarRatingComponent from 'react-star-rating-component';

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
      commentBoxEnabled: true,
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
      commentBoxEnabled: false,
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
                fitStart={<span>{comment.dateTime}</span>}
                fill={<span>{comment.text}</span>}
              />
            </Spacer>
          }
        />
      );
    });

    return (
      <Spacer>
        <List isDivided>
          {commentList}
        </List>
        <Spacer marginTop="large" marginBottom="large">
          <Arrange fitStart={<span>Add a comment:</span>} fill={<div></div>} />
          <Textarea onChange={this.changeHandler} value={this.state.value} disabled={!this.state.commentBoxEnabled}/>
          <Arrange
            fill={<div></div>}
            fitEnd={
              <Button text="Add Comment" type="submit" isDisabled={!this.state.buttonEnabled} onClick={this.submitHandler} />
            }
            align="center"
          />
        </Spacer>
        <Arrange fitStart={<span>Leave a rating:</span>} fill={<div></div>} />
        <StarRatingComponent
          name="Rating"
          starCount={5}
          editing
        />
      </Spacer>
    );
  }
}

export default CommentThread;
