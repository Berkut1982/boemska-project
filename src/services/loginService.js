import axios from 'axios';
import config from '../config';
class loginService {
  login(data, options) {
    const url = config.baseUrl + '/login';
    return axios.post(url, data, options);
  }
  register(data) {
    const url = config.baseUrl + '/register';
    //TODO set heraders to multipart/form-data
    return axios.post(url, data);
  }
}

export default new loginService();
