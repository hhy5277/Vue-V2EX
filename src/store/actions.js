import axios from 'axios'

export default {
  getArticles ({ state }, url) {
    axios.get(url).then(res => {
      state.topics = res.data
      console.log('Get articles from ' + url + '. Total: ' + state.topics.length)
    }).catch(err => {
      console.log(err)
    })
  },
  getNodes ({ state }) {
    axios.get('https://www.v2ex.com/api/nodes/all.json').then(res => {
      state.nodes = res.data
      console.log('Nodes total: ' + state.nodes.length)
    }).catch(err => {
      console.log(err)
    })
  },
  getArticleAndReplies ({ state }, id) {
    axios.get('https://www.v2ex.com/api/topics/show.json?id=' + id).then(res => {
      state.topic = res.data[0]
      console.log('Get topic from ')
    }).catch((error) => {
      console.log(error)
    })
    axios.get('https://www.v2ex.com/api/replies/show.json?topic_id=' + id).then((response) => {
      state.replies = response.data
      console.log('Replies: ' + state.replies.length)
    }).catch((error) => {
      console.log(error)
    })
  }
}
