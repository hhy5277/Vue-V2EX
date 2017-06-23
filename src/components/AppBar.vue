<template>
  <div>
    <div class="app-bar">
      <mu-appbar title="V2EX"></mu-appbar>
    </div>
    <div class="app-tabs">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="latest" title="最新" @click="processTarget('latest')"></mu-tab>
        <mu-tab value="hot" title="最热" @click="processTarget('hot')"></mu-tab>
        <mu-tab value="tech" title="技术" @click="processTarget('tech')"></mu-tab>
        <mu-tab value="nodes" title="节点" @click="processTarget('nodes')"></mu-tab>
      </mu-tabs>
      <div v-if="activeTab === 'latest'">
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <!-- 栅格化系统 -->
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <!-- 卡片布局 -->
              <mu-card>
                <!-- 卡片 header，显示头像和用户名 -->
                <mu-card-header :title="article.member.username">
                  <mu-avatar :src="article.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <!-- 标题链接 -->
                <router-link :to="{ name: 'Topic', params: { id: article.id} }">
                  <mu-card-title :title="article.title"></mu-card-title>
                </router-link>
                <!-- 渲染过的文章内容 -->
                <mu-card-text v-html="article.content_rendered"></mu-card-text>
                <!-- 评论按钮，点击后弹出评论弹框 -->
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
      <div v-if="activeTab === 'hot'">
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <mu-card>
                <mu-card-header :title="article.member.username">
                  <mu-avatar :src="article.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <a :href="article.url">
                  <mu-card-title :title="article.title"></mu-card-title>
                </a>
                <mu-card-text v-html="article.content_rendered"></mu-card-text>
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
      <div v-if="activeTab === 'tech'">
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <mu-card>
                <mu-card-header :title="article.member.username">
                  <mu-avatar :src="article.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <a :href="article.url">
                  <mu-card-title :title="article.title"></mu-card-title>
                </a>
                <mu-card-text v-html="article.content_rendered"></mu-card-text>
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
      <div v-if="activeTab === 'nodes'">
        <h2>节点</h2>
        <ul v-for="node in this.$store.state.nodes">
          <li>{{ node.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import MuAvatar from '../../node_modules/muse-ui/src/avatar/avatar'
  import MuCardTitle from '../../node_modules/muse-ui/src/card/cardTitle'
  import MuFlexbox from '../../node_modules/muse-ui/src/flexbox/flexbox'
  import MuFlexboxItem from '../../node_modules/muse-ui/src/flexbox/flexboxItem'
  import MuRaisedButton from '../../node_modules/muse-ui/src/raisedButton/raisedButton'
  import MuPopup from '../../node_modules/muse-ui/src/popup/popup'
  import MuAppbar from '../../node_modules/muse-ui/src/appBar/appBar'
  import MuFlatButton from '../../node_modules/muse-ui/src/flatButton/flatButton'
  import MuContentBlock from '../../node_modules/muse-ui/src/contentBlock/contentBlock'

  export default {
    components: {
      MuContentBlock,
      MuFlatButton,
      MuAppbar,
      MuPopup,
      MuRaisedButton,
      MuFlexboxItem,
      MuFlexbox,
      MuCardTitle,
      MuAvatar
    },
    name: 'hello',
    data () {
      return {
        activeTab: 'latest',
        open: false,
        docked: true,
        articles: null,
        bottomPopup: false
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      handleOpenPopup (position, id) {
        // 响应点击操作
        this.openPopup(position)
        // 加载相应的回复
        this.$store.dispatch('getReplies', id)
      },
      openPopup (position) {
        this[position + 'Popup'] = true
      },
      closePopup (position) {
        this[position + 'Popup'] = false
        this.$store.state.replies = null
      },
      processTarget (type) {
        switch (type) {
          case 'latest':
            console.log('latest')
            this.$store.dispatch('getArticles', 'https://www.v2ex.com/api/topics/latest.json')
            break
          case 'hot':
            console.log('hot')
            this.$store.dispatch('getArticles', 'https://www.v2ex.com/api/topics/hot.json')
            break
          case 'tech':
            console.log('tech')
            this.$store.dispatch('getArticles', 'https://www.v2ex.com/api/topics/show.json?node_name=tech')
            break
          case 'nodes':
            console.log('nodes')
            this.$store.dispatch('getNodes')
            break
          default:
            console.log('nothing')
        }
      }
    },
    created () {
      // 启动时首页加载最新的内容
      this.processTarget('latest')
    }
  }
</script>

<style>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    width: 100%;
  }

  img {
    width: calc(100%);
  }

  .popup-bottom {
    width: calc(55%);
    top: 100px !important;
  }

  .reply-content {
    overflow: scroll !important;
  }

  .reply-username {
    color: #7e57c2;
  }

  /* 子元素垂直居中 */
  .center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

</style>
