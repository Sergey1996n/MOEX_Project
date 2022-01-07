const BASE_URI = "https://iss.moex.com/iss/securities"

function getPapers(page) {
  const params = {  
    method: 'GET',
  }
  return fetch(`${BASE_URI}.json?start=${page}`, params).then((res) => res.json());
}

function getPaper(secid) {
  const params = {  
    method: 'GET',
  }
  return fetch(`${BASE_URI}/${secid}.json`, params).then((res) => res.json());
}

function getIndices(secid) {
  const params = {  
    method: 'GET',
  }
  return fetch(`${BASE_URI}/${secid}/indices.json`, params).then((res) => res.json());
}

function getAggregates(secid, date) {
  const params = {  
    method: 'GET',
  }
  if (date === "undefined")
    return fetch(`${BASE_URI}/iss/securities/${secid}/aggregates.json`, params).then((res) => res.json());
  else
    return fetch(`${BASE_URI}/iss/securities/${secid}/aggregates.json?date=${date}`, params).then((res) => res.json());
}

export default {
  getPapers, getPaper, getIndices, getAggregates
}
