import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Img from 'react-image';

class SummaryView extends Component {
  constructor(props) {
    super();
    this.renderDetailView = this.renderDetailView.bind(this);
  }
  componentDidMount() {
    console.log('Test');
  }

  renderDetailView() {
    this.props.onClick(this.props.summary.id);
  }

  render() {
    const text = this.props.summary.text;
    return (
      <div onClick={this.renderDetailView}>
        <Img src={this.props.summary.url} />
        <h4>{text.length > 60 ? text.substr(0, 57) + '...' : text}</h4>
        <StarRatingComponent
          name="Rating" /* name of the radio input, it is required */
          value={this.props.summary.rating} /* number of selected icon (`0` - none, `1` - first) */
          starCount={5} /* number of icons in rating, default `5` */
          editing={false} /* is component available for editing, default `true` */
        />
      </div>
    );
  }
}

export default SummaryView;
