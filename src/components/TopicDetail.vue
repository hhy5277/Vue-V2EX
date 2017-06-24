<template>
  <div>
    <div class="app-bar">
      <mu-appbar title="V2EX" class="center">
        <a href="https://github.com/igaozp/vue-v2ex" slot="right">
          <img src="../assets/GitHub.png" class="icon"/>
        </a>
      </mu-appbar>
    </div>
    <mu-row gutter>
      <mu-col desktop="20"></mu-col>
      <mu-col desktop="60">
        <div v-if="this.topic">
          <!-- 显示主题详细信息 -->
          <mu-card class="topic_card">
            <!-- 用户名及头像 -->
            <mu-card-header :title="this.topic.member.username" class="center">
              <mu-avatar :src="this.topic.member.avatar_large" :size="50" slot="avatar"></mu-avatar>
            </mu-card-header>
            <!-- 文章标题 -->
            <mu-card-title :title="this.topic.title"></mu-card-title>
            <!-- 文章内容 -->
            <mu-card-text v-html="this.topic.content_rendered"></mu-card-text>
            <!-- 文章节点信息 -->
            <mu-chip class="chip">
              <mu-avatar :src="this.topic.node.avatar_mini" :size="25"></mu-avatar>
              {{ this.topic.node.title }}
            </mu-chip>
          </mu-card>
        </div>
      </mu-col>
      <mu-col desktop="20"></mu-col>
    </mu-row>

    <mu-row gutter>
      <mu-col desktop="20"></mu-col>
      <mu-col desktop="60">
        <!-- 显示主题回复信息 -->
        <mu-card class="reply_card">
          <div v-if="this.replies && this.replies.length !== 0">
            <mu-content-block>
              <ul v-for="reply in this.replies">
                <li>
                  <mu-row gutter class="center">
                    <mu-col desktop="10">
                      <!-- 头像 -->
                      <mu-avatar :src="reply.member.avatar_normal"></mu-avatar>
                    </mu-col>
                    <mu-col desktop="15">
                      <!-- 用户名 -->
                      <h4>{{ reply.member.username }}</h4>
                    </mu-col>
                    <mu-col desktop="75">
                      <!-- 回复内容 -->
                      <span v-html="reply.content"></span>
                    </mu-col>
                  </mu-row>
                </li>
              </ul>
            </mu-content-block>
          </div>
        </mu-card>
      </mu-col>
      <mu-col desktop="20"></mu-col>
    </mu-row>
  </div>
</template>

<script>
  import MuCardHeader from '../../node_modules/muse-ui/src/card/cardHeader'
  import MuAvatar from '../../node_modules/muse-ui/src/avatar/avatar'
  import MuChip from '../../node_modules/muse-ui/src/chip/chip'
  import {mapState} from 'vuex'

  export default {
    components: {
      MuChip,
      MuAvatar,
      MuCardHeader
    },
    computed: mapState({
      topic: state => state.topic,
      replies: state => state.replies
    }),
    created () {
      // 页面加载时从 API 获取数据
      this.$store.dispatch('getArticleAndReplies', this.$route.params.id)
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

  img {
    width: calc(100%);
  }

  .topic_card {
    margin-top: 20px;
  }

  .reply_card {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  /* 子元素垂直居中 */
  .center {
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  .chip {
    margin-left: 15px;
    margin-bottom: 10px;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
</style>
