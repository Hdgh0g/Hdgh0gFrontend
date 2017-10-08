import config from '../config/config'

const PHOTOS_ON_PAGE = 7;
const API_URL = config.API_URL;

export default {

  getTechnologies() {
    return get(`${API_URL}/technologies`);
  },

  getContacts() {
    return get(`${API_URL}/contacts`);
  },

  getProjects() {
    return get(`${API_URL}/projects`);
  },

  getPhotos(page) {
    page = page ? page : 0;
    return get(`${API_URL}/images/withCaption?page=${page}&size=${PHOTOS_ON_PAGE}`)
  },

  login(password) {
    return postFormData(`${API_URL}/admin/login`, {password});
  }
}

function get(url) {
  return fetch(url).then(processResult);
}

function postFormData(url, body) {
  let formData = new FormData();
  Object.keys(body).forEach(key => formData.append(key, body[key]));
  return fetch(url, {
    method: "POST",
    body: formData,
  }).then(r => processResult(r, body));
}

function processResult(r, body) {
  if (r.status === 204) {
    return body;
  }
  return r.json().then(json => {
    if (r.status >= 400 && r.status < 600) {
      return Promise.reject(json);
    }
    return json;
  });
}
