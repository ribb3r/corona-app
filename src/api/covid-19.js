import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://api.corona-zahlen.org/'
})

export default {
  getCasesForOneWeek: cityId => httpClient.get(`districts/${cityId}`)
}
