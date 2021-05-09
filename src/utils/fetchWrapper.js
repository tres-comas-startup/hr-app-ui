const fetchWrapper = (url, init = {}) => {

  const _headers = {
    'Content-Type': 'application/json'
  }

  const args = {...init, mode: 'cors'};
  const {headers} = args;

  if (headers) {
    args.headers = {...headers, _headers}
  } else {
    args.headers = _headers
  }

  return fetch(url, args);
}

export default fetchWrapper;