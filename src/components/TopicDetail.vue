<template>
  <div>
    <div class="app-bar">
      <!-- 跳转到主页 -->
      <router-link to="/">
        <mu-appbar title="V2EX"></mu-appbar>
      </router-link>
    </div>
    <mu-row gutter>
      <mu-col desktop="20"></mu-col>
      <mu-col desktop="60">
        <div v-if="this.$store.state.topic">
          <!-- 显示主题详细信息 -->
          <mu-card class="topic_card">
            <!-- 用户名及头像 -->
            <mu-card-header :title="this.$store.state.topic.member.username" class="center">
              <mu-avatar :src="this.$store.state.topic.member.avatar_large" :size="50" slot="avatar"></mu-avatar>
            </mu-card-header>
            <!-- 文章标题 -->
            <mu-card-title :title="this.$store.state.topic.title"></mu-card-title>
            <!-- 文章内容 -->
            <mu-card-text v-html="this.$store.state.topic.content_rendered"></mu-card-text>
            <!-- 文章节点信息 -->
            <mu-chip class="chip">
              <mu-avatar :src="this.$store.state.topic.node.avatar_mini" :size="25"></mu-avatar>
              {{ this.$store.state.topic.node.title }}
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
          <div v-if="this.$store.state.replies && this.$store.state.replies.length !== 0">
            <mu-content-block>
              <ul v-for="reply in this.$store.state.replies">
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

  export default {
    components: {
      MuChip,
      MuAvatar,
      MuCardHeader
    },
    data () {
      return {
        topic: null,
        replies: null
      }
    },
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
</style>
