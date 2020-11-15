import axios from 'axios';

async function getLocations() {
    const url = ` http://138.197.24.211/DGA/web/en/api/home`;
    return await axios.get(url,{'Content-Type': 'application/json'}).then(response => response.data);
  }
async function getLocationById(id) {
    const url = `http://138.197.24.211/DGA/web/en/api/locations/show?id=${id}`;
    return await axios.get(url).then(response => response.data);
  }

exports.getLocations = getLocations;
exports.getLocationById = getLocationById; 