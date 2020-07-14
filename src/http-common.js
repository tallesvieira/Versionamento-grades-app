import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://scholl-grades-back-web.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
