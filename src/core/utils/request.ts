import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: String;
    data?: object;
    params?: object;
}

const BASE_URL = 'http://localhost:3000';

const makeRequest = ({ method = 'GET', url, data, params }: RequestParams ) => {
    return axios({
        method: method,
        url: `${BASE_URL}${url}`,
        data: data,
        params: params
    });
}

export default makeRequest;