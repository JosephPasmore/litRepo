import axios from 'axios';

const NapCoreService = {
  getNearbyLocations: () => {
    axios.get('http://172.16.0.170:8080/RedBull/rest/retrieve/service/locations')
      .then((response) => {
        console.log(response);
      });
  },
  searchForLocations: (searchTerm) => {
    // axios.get call
  },
  submitComment: (locationId, text, dateTime) => {
    // axios.post call
  }
};

export default  NapCoreService;
