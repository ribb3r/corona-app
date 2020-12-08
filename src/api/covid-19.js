import axios from 'axios'

// https://public.opendatasoft.com/explore/dataset/covid-19-germany-landkreise/api
const httpClient = axios.create({
    baseURL: 'https://public.opendatasoft.com/api/records/1.0/search/'
})

export default {
  getCasesForOneWeek: params => httpClient.get('?dataset=covid-19-germany-landkreise', { params })
}
