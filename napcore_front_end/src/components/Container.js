import React, { Component } from 'react';
import { connect } from 'react-redux';
import SummaryViewList from './SummaryViewList';
import { showDetailView, hideDetailView, retrieveNearbyLocations, searchForLocations, submitComment } from '../actions';
import SummaryDetailView from './SummaryDetailView';
import Header from './Header';
import NapCoreService from '../services';


class Container extends Component {
  componentDidMount() {
    this.props.retrieveNearbyLocations();
  }

  render() {
    let resultView = null;
    const summaries = [];
    const pictureUrls = ['https://res.cloudinary.com/gabriel333/image/upload/v1532248375/c3yua121qqzdghgxlqkv.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532248657/hjr7sbol0sahvfpp9mgz.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532248797/nswnv9gkt0oos9w6uwhg.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532248897/bjibgwxhlnxnhrcxwmpy.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532249015/nhrf8yh5m7jjosby3ckw.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532249151/qayr9dlqoqkfs6rosudq.jpg',
       'https://res.cloudinary.com/gabriel333/image/upload/v1532249151/qayr9dlqoqkfs6rosudq.jpg']

    for (let i = 0; i < 7; i++) {
      summaries.push({
        key: i,
        id: i,
        url: pictureUrls[i],
        text: `Summary Text Here ${i}. Summary Text Here ${i}. Summary Text Here ${i}.`,
        rating: i%5,
      });
    }

    if (this.props.detailViewVisible) {
      resultView = (
        <SummaryDetailView
          summary={summaries[this.props.locationId]}
          onClick={this.props.hideDetailView}
          locationId={this.props.locationId}
          comments={this.props.comments}
          submitComment={this.props.submitComment}
        />
      );
    } else {
      resultView = (
        <SummaryViewList
          summaries={summaries}
          onClick={this.props.showDetailView}
        />
      );
    }
    return (
      <div className="App">
        <Header searchForLocations={this.props.searchForLocations} />
        {resultView}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detailViewVisible: state.napcoreState.detailViewVisible,
  locationId: state.napcoreState.locationId,
  nearbyLocations: state.napcoreState.nearbyLocations,
  searchedLocations: state.napcoreState.searchedLocations,
  comments: state.napcoreState.comments,
});

const mapDispatchToProps = dispatch => ({
  showDetailView: (locationId) => (
    dispatch(showDetailView(locationId))
  ),
  hideDetailView: () => (
    dispatch(hideDetailView())
  ),
  retrieveNearbyLocations: () => (
    dispatch(retrieveNearbyLocations(NapCoreService))
  ),
  searchForLocations: searchTerm => (
    dispatch(searchForLocations(NapCoreService, searchTerm))
  ),
  submitComment: (locationId, text, dateTime) => (
    dispatch(submitComment(NapCoreService, locationId, text, dateTime))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
