import axios from "axios";
//mock API
let API_URL = "https://61985cc5164fa60017c2302c.mockapi.io/api/";
export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method,
    url: `${API_URL}/${endpoint}`,
    data: body,
  }).catch((err) => {
    console.log(err);
  });
}
