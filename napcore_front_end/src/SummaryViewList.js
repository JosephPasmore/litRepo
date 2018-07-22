import React, { Component } from 'react';
import './App.css';
import SummaryView from './SummaryView';

class SummaryViewList extends Component {
  componentDidMount() {
    console.log('Test');
  }

  render() {
    const summaries = [];
    this.props.summaries.map((summary) => {
      summaries.push((
        <div className="summary-column pointer">
          <SummaryView onClick={this.props.onClick} summary={summary}/>
        </div>
      ));
    });
    return (
      <div className="summary-grid parent-margin">
        {summaries}
      </div>
    );
  }
}

export default SummaryViewList;
