import api from "./api";

export const getData = (endpoint) => api.get(endpoint);

export const postData = (endpoint, data) => api.post(endpoint, data);

export const patchData = (endpoint, data) => api.patch(endpoint, data);

export const putData = (endpoint, data) => api.put(endpoint, data);

export const deleteData = (endpoint) => api.delete(endpoint);