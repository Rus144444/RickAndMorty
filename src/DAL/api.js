import axios from "axios"

export const fetchDataId = (url, id) => {
   return axios.get(`${url}/${id}`)
}

export const fetchDataUrl = (url) => {
    return axios.get(url)
}

