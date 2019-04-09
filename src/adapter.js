const BASE_URL = 'http://localhost:3001/potter/'

const patchOptions = (obj) => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }
}

const postOptions = (obj) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }
}

const adapter = {
  get: () => fetch(BASE_URL).then(res => res.json()),
  patch: (obj) => fetch(BASE_URL + obj.id, patchOptions(obj)).then(res => res.json()),
  post: (obj) => fetch(BASE_URL, postOptions(obj)).then(res => res.json())
}

export default adapter