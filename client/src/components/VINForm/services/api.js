const API_URL = "http://192.168.99.100:31314",
      ROUTE_URL = `${API_URL}/prints`,
      HELLO_URL = `${API_URL}/hello`,
      POST_HEADERS = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
      };

const API = {
  /*savePrintJob(form) {
    console.info('savePrintJob', form);
    return new Promise((res, rej) => { res(form) });
  },*/
  savePrintJob(form) {
    let request = new Request(ROUTE_URL, {
      method: 'POST',
      headers: new Headers(POST_HEADERS),
      mode: 'cors',
      body: JSON.stringify(form)
    })

    console.info('savePrintJob fetch', ROUTE_URL, request)

    return fetch(request).then(r => {
      console.info('savePrintJob', r)
      return form
    })
  },
  savePrintJobInCorrect(form) {
    let fetch = window.fetch(HELLO_URL)

    console.info('savePrintJob fetch', HELLO_URL, fetch)

    return fetch.then(r => {
      console.info('savePrintJob', r)
      return form
    }).then(e => {
      console.info('error!', e)
    })
  },
}

export default API
