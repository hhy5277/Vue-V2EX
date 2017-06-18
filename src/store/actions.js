import axios from 'axios'

export default {
  getArticles ({ state }, url) {
    axios.get(url).then((response) => {
      state.latestJSON.articles = response.data
    })
  },
  getNodes ({ state }) {
    axios.get('https://www.v2ex.com/api/nodes/all.json').then((response) => {
      state.nodes = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
