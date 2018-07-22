import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SummaryViewList from './SummaryViewList';
import logo from './logo.svg';
import { showDetailView, hideDetailView } from './actions';
import SummaryDetailView from './SummaryDetailView';

class Container extends Component {
  componentDidMount() {
    console.log('Test');
  }

  render() {
    let resultView = null;
    const summaries = [];
    for (let i = 0; i < 7; i++) {
      summaries.push({
        key: i,
        id: i,
        url: logo,
        text: `Summary Text Here ${i}. Summary Text Here ${i}. Summary Text Here ${i}.`,
        rating: i%5,
      });
    }

    if (this.props.detailViewVisible) {
      resultView = (
        <SummaryDetailView
          summary={summaries[this.props.locationId]}
          onClick={this.props.hideDetailView}
          locationId ={this.props.locationId}
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
      <div>
        {resultView}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  detailViewVisible: state.napcoreState.detailViewVisible,
  locationId: state.napcoreState.locationId,
});

const mapDispatchToProp = dispatch => ({
  showDetailView: (locationId) => (
    dispatch(showDetailView(locationId))
  ),
  hideDetailView: () => (
    dispatch(hideDetailView())
  ),
});

export default connect(mapStateToProps, mapDispatchToProp)(Container);
