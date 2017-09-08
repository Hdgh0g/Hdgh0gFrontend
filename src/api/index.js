const API_URL = 'http://localhost:9000';
const PHOTOS_ON_PAGE = 7;

export default {

  getTechnologies() {
    return fetch(`${API_URL}/technologies`).then(processResult);
  },

  getContacts() {
    return fetch(`${API_URL}/contacts`).then(processResult);
  },

  getProjects() {
    return fetch(`${API_URL}/projects`).then(processResult);
  },

  getPhotos(page) {
    page = page ? page : 0;
    return fetch(`${API_URL}/images/withCaption?page=${page}&size=${PHOTOS_ON_PAGE}`).then(processResult)
  }
}

function processResult(r) {
  if (r.status >= 400 && r.status < 600) {
    throw new Error("Bad response from server");
  }
  return r.json()
}
