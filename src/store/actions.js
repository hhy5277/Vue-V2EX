import axios from 'axios'

export default {
  getHot ({ state }) {
    axios.get('https://www.v2ex.com/api/topics/hot.json').then((response) => {
      state.lastJSON = response.data
    }).catch((error) => {
      console.log(error)
    })
  }
}
