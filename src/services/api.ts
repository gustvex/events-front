import axios from "axios";

export function GetAll() {
  return axios.get("http://localhost:3333/event/get")
    .then((response) => {
      return response.data; 
    })
    .catch((error) => {
      throw error; 
    });
}
