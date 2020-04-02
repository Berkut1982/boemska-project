import Axios from 'axios';
import config from '../config';
class carsService {
  getData(options) {
    const url = config.baseUrl + '/cars/';
    return Axios.get(url, options);
  }
}

export default new carsService();
