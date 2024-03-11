import axios from "axios";

export function GetAll() {
  return axios
    .get("http://localhost:3333/event/get")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function GetId(id: String) {
  return axios
    .get(`http://localhost:3333/event/get/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
