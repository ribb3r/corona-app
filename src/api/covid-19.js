import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'https://api.corona-zahlen.org/'
})

export default {
  getHospitalization: daysInThePast => httpClient.get(`states/history/hospitalization`),
  getCasesForOneWeek: cityId => httpClient.get(`districts/${cityId}`)
}
