import axios from 'axios'

export default {
  getArticles ({ state }, url) {
    axios.get(url).then((response) => {
      state.latestJSON.articles = response.data
      console.log('Articles: ' + state.latestJSON.articles.length)
    }).catch((error) => {
      console.log(error)
    })
  },
  getNodes ({ state }) {
    axios.get('https://www.v2ex.com/api/nodes/all.json').then((response) => {
      state.nodes = response.data
      console.log('Nodes: ' + state.nodes.length)
    }).catch((error) => {
      console.log(error)
    })
  },
  getReplies ({ state }, id) {
    axios.get('https://www.v2ex.com/api/replies/show.json?topic_id=' + id).then((response) => {
      state.replies = response.data
      console.log('Replies: ' + state.replies.length)
    }).catch((error) => {
      console.log(error)
    })
  }
}
