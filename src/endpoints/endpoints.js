import axios from "axios";
// eslint-disable-next-line
let dev = "http://localhost:3001";
// eslint-disable-next-line
let prod = "https://laara-api-dev-3rc4fb3npa-ew.a.run.app";

let base = prod;

const app_id = "3a2f3e5b-4a89-4fcb-a7e1-31421c7a6344";

let ourApi = {
  property: {
    getFilteredProperty: async (data) =>
      await axios.get(`${base}/search/stays/filtered`, {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": app_id,
        },
      }),
    getPropertyById: async (data) =>
      await axios.get(`${base}/search/stays/${data.id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-app-id": app_id,
        },
      }),
  },
};

export default ourApi;
