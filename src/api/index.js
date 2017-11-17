import config from '../config/config'

const PHOTOS_ON_PAGE = 7;
const API_URL = config.API_URL;

export default {

  getTechnologies() {
    return get(`/technologies`);
  },

  removeTechnology(credentials, id) {
    return del(`/technologies/${id}`, credentials)
  },

  getContacts() {
    return get(`/contacts`);
  },

  postContact(credentials, contact) {
    return postJsonData(`/contacts`, contact, credentials);
  },

  removeContact(credentials, id) {
    return del(`/contacts/${id}`, credentials);
  },

  getProjects() {
    return get(`/projects`);
  },

  getPhotos(page) {
    page = page ? page : 0;
    return get(`/images/withCaption?page=${page}&size=${PHOTOS_ON_PAGE}`)
  },

  login(password) {
    return postFormData(`/admin/login`, {password});
  },

  postImage(credentials, image) {
    return postFormData(`/images`, {image}, credentials)
  }
}

function get(url) {
  return fetch(`${API_URL}${url}`).then(processResult);
}

function del(url, credentials) {
  let headers = new Headers();
  if (credentials) {
    headers.append("Authorization", credentials);
  }
  return fetch(`${API_URL}${url}`, {
    method : "DELETE",
    headers,
  }).then(processResult)
}

function postJsonData(url, body, credentials) {
  let headers = new Headers();
  if (credentials) {
    headers.append("Authorization", credentials);
  }
  headers.append("Content-Type", "application/json");
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers
  }).then(r => processResult(r, body));
}

function postFormData(url, body, credentials) {
  let formData = new FormData();
  Object.keys(body).forEach(key => formData.append(key, body[key]));

  let headers = new Headers();
  if (credentials) {
    headers.append("Authorization", credentials);
  }
  return fetch(`${API_URL}${url}`, {
    method: "POST",
    body: formData,
    headers,
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
