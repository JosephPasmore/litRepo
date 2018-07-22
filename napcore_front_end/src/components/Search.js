import React, { Component } from 'react';
import SearchField from 'terra-search-field';
import { injectIntl } from 'react-intl';

class Search extends Component {
  constructor(props) {
    super(props);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  keyPressHandler(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.searchForLocations(event.target.value);
    }
  }

  render() {
    return (
      <SearchField disableAutoSearch placeholder="Search for a location" onKeyPress={this.keyPressHandler}/>
    );
  }
}

export default injectIntl(Search);
