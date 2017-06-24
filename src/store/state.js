export default {
  domain: 'https://www.v2ex.com',
  api: {
    info: '/api/site/info.json', // 社区信息
    stats: '/api/site/stats.json', // 社区状态
    nodeByID: '/api/nodes/show.json?id=', // 通过 ID 获取节点信息
    nodeByName: '/api/nodes/show.json?name=', // 通过名称获取节点
    nodeAll: '/api/node/all.json', // 所有节点
    latest: '/api/topics/latest.json', // 最新内容
    hot: '/api/topics/hot.json', // 热门内容
    topicByNodeName: '/api/topics/show.json?node_name=', // 通过节点名称获取主题
    topicByID: '/api/topics/show.json?id=', // 通过 ID 获取主题
    topicByUsername: '/api/topics/show.json?username=', // 通过用户名获取主题
    topicByNodeID: '/api/topics/show.json?node_id=', // 通过节点 ID 获取主题
    userByName: '/api/members/show.json?username=', // 通过用户名获取用户信息
    userByID: '/api/members/show.json?id=', // 通过 ID 获取用户信息
    replies: '/api/replies/show.json?topic_id=' // 通过 ID 获取指定文章的评论
  },
  remainRequest: null,
  nodes: null, // 节点列表
  replies: null, // 回复列表
  topics: null, // 主题列表
  topic: null // 主题信息
}
