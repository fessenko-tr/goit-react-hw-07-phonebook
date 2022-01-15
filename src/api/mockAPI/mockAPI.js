import axios from "axios";

class MockAPI {
  static axiosInstance = axios.create({
    baseURL: "https://61e019670f3bdb0017934d83.mockapi.io",
  });

  static get(path) {
    return this.axiosInstance.get(path);
  }

  static post(path, data) {
    return this.axiosInstance.post(path, data);
  }

  static delete(path) {
    return this.axiosInstance.delete(path);
  }
}

export default MockAPI;
