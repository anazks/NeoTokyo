import axios from "axios";
import BaseURL from '../Static/Static'

const instance = axios.create({
    baseURL: BaseURL,
  });

export default instance