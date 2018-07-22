import React, { Component } from 'react';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import Img from 'react-image';

class SummaryDetailView extends Component {
  componentDidMount() {
    console.log('Test');
  }

  render() {
    return (
      <div>
        <a onClick={this.props.onClick} className="parent-margin pointer">Back</a>
        <div className="detail-view parent-margin">
          <div className="summary-column">
            <Img src={this.props.summary.url} />
          </div>
          <div className="summary-column">
            <StarRatingComponent
              name="Rating" /* name of the radio input, it is required */
              value={this.props.summary.rating} /* number of selected icon (`0` - none, `1` - first) */
              starCount={5} /* number of icons in rating, default `5` */
              editing={false} /* is component available for editing, default `true` */
            />
            <p>{this.props.summary.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryDetailView;
