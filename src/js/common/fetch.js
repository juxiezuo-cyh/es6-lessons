const fetchPost = (url, params) => {
  return fetch(url, {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencode'
    },
    params: params,
    credentials: 'include', //请求带cookie
  }).then((res) => {
    if(!res.ok) {
      throw Error(res.statusText)
    }
    return res.json();
  })
}
export { fetchPost }