import axios from "axios";
import {basUrl} from "./constants/constants"
const instance = axios.create({
    baseURL: basUrl,
  
  });
  export default instance