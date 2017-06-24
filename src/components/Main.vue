<template>
  <div>
    <div class="app-bar">
      <mu-appbar title="V2EX" class="center">
        <a href="https://github.com/igaozp/Vue-V2EX" slot="right">
          <img src="../assets/GitHub.png" class="icon"/>
        </a>
      </mu-appbar>
    </div>
    <div class="app-tabs">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="latest" title="最新" @click="processTarget('latest')"></mu-tab>
        <mu-tab value="hot" title="最热" @click="processTarget('hot')"></mu-tab>
        <mu-tab value="tech" title="技术" @click="processTarget('tech')"></mu-tab>
      </mu-tabs>
      <!-- 社区最新的主题 -->
      <div v-if="activeTab === 'latest'">
        <ul v-for="topic in this.topics">
          <!-- 栅格化系统 -->
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <!-- 卡片布局 -->
              <mu-card>
                <!-- 卡片 header，显示头像和用户名 -->
                <mu-card-header :title="topic.member.username" class="center">
                  <mu-avatar :src="topic.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <!-- 标题链接 -->
                <router-link :to="{ name: 'Topic', params: { id: topic.id} }">
                  <mu-card-title :title="topic.title"></mu-card-title>
                </router-link>
                <!-- 渲染过的文章内容 -->
                <mu-card-text v-html="topic.content_rendered"></mu-card-text>
                <!-- 评论按钮，点击后弹出评论弹框 -->
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
      <!-- 社区当前最热的主题 -->
      <div v-if="activeTab === 'hot'">
        <ul v-for="topic in this.topics">
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <!-- 信息卡片 -->
              <mu-card>
                <!-- 用户名和头像 -->
                <mu-card-header :title="topic.member.username" class="center">
                  <mu-avatar :src="topic.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <!-- 跳转到主题详情页面 -->
                <router-link :to="{ name: 'Topic', params: { id: topic.id} }">
                  <mu-card-title :title="topic.title"></mu-card-title>
                </router-link>
                <!-- 当前主题内容 -->
                <mu-card-text v-html="topic.content_rendered"></mu-card-text>
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
      <!-- 社区科技节点下的主题 -->
      <div v-if="activeTab === 'tech'">
        <ul v-for="topic in this.topics">
          <mu-row gutter>
            <mu-col desktop="20"></mu-col>
            <mu-col desktop="60">
              <!-- 信息卡片 -->
              <mu-card>
                <!-- 用户名和头像 -->
                <mu-card-header :title="topic.member.username" class="center">
                  <mu-avatar :src="topic.member.avatar_normal" slot="avatar"></mu-avatar>
                </mu-card-header>
                <!-- 跳转到主题详情页面 -->
                <router-link :to="{ name: 'Topic', params: { id: topic.id} }">
                  <mu-card-title :title="topic.title"></mu-card-title>
                </router-link>
                <!-- 主题内容 -->
                <mu-card-text v-html="topic.content_rendered"></mu-card-text>
              </mu-card>
            </mu-col>
            <mu-col desktop="20"></mu-col>
          </mu-row>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import MuAvatar from '../../node_modules/muse-ui/src/avatar/avatar'
  import MuCardTitle from '../../node_modules/muse-ui/src/card/cardTitle'
  import MuFlexbox from '../../node_modules/muse-ui/src/flexbox/flexbox'
  import MuFlexboxItem from '../../node_modules/muse-ui/src/flexbox/flexboxItem'
  import MuRaisedButton from '../../node_modules/muse-ui/src/raisedButton/raisedButton'
  import MuPopup from '../../node_modules/muse-ui/src/popup/popup'
  import MuAppbar from '../../node_modules/muse-ui/src/appBar/appBar'
  import MuFlatButton from '../../node_modules/muse-ui/src/flatButton/flatButton'
  import MuContentBlock from '../../node_modules/muse-ui/src/contentBlock/contentBlock'
  import MuIconMenu from '../../node_modules/muse-ui/src/iconMenu/iconMenu'

  export default {
    components: {
      MuIconMenu,
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
        docked: true
      }
    },
    computed: mapState({
      domain: state => state.domain,
      api: state => state.api,
      topics: state => state.topics,
      nodes: state => state.nodes
    }),
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      processTarget (type) {
        switch (type) {
          case 'latest':
            this.$store.dispatch('getArticles', this.domain + this.api.latest)
            break
          case 'hot':
            this.$store.dispatch('getArticles', this.domain + this.api.hot)
            break
          case 'tech':
            this.$store.dispatch('getArticles', this.domain + this.api.topicByNodeName + 'tech')
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

  /* 子元素垂直居中 */
  .center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
</style>
