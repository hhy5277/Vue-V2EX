export default {
  domain: 'https://www.v2ex.com',
  api: {
    latest: '/api/topics/latest.json', // 最新内容
    hot: '/api/topics/hot.json', // 热门内容
    nodeAll: '/api/node/all.json', // 所有节点
    topic: '/api/topics/show.json?node_name=', // 指定节点
    user: '/api/topics/show.json?username=', // 指定用户
    commit: '/api/replies/show.json?topic_id=', // 指定文章的评论
    article: '/api/topics/show.json?id=' // 指定文章
  },
  // 存储最新的文章和评论数据
  latestJSON: {
    current: null,
    article: null,
    commit: null
  },
  remainRequest: null
}
