import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://skygarden.search.windows.net/indexes/dev-productsv3',
    headers: {
      ['api-key']: "4F2408C83BBB69BB31AE97737ED6EE2F"
    },
});