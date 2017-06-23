<template>
  <div>
    <div class="app-bar">
      <mu-appbar title="V2EX"></mu-appbar>
    </div>
    <mu-row gutter>
      <mu-col desktop="20"></mu-col>
      <mu-col desktop="60">
        <div v-if="this.$store.state.topic">
          <mu-card class="topic_card">
            <mu-card-header :title="this.$store.state.topic.member.username" class="center">
              <mu-avatar :src="this.$store.state.topic.member.avatar_large" :size="50" slot="avatar"></mu-avatar>
            </mu-card-header>
            <mu-card-title :title="this.$store.state.topic.title"></mu-card-title>
            <mu-card-text v-html="this.$store.state.topic.content_rendered"></mu-card-text>
          </mu-card>
        </div>
      </mu-col>
      <mu-col desktop="20"></mu-col>
    </mu-row>

    <mu-row gutter>
      <mu-col desktop="20"></mu-col>
      <mu-col desktop="60">
        <mu-card class="reply_card">
          <div v-if="this.$store.state.replies.length !== 0">
            <mu-content-block>
              <ul v-for="reply in this.$store.state.replies">
                <li>
                  <mu-row gutter class="center">
                    <mu-col desktop="10">
                      <mu-avatar :src="reply.member.avatar_normal"></mu-avatar>
                    </mu-col>
                    <mu-col desktop="15">
                      <h4>{{ reply.member.username }}</h4>
                    </mu-col>
                    <mu-col desktop="75">
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

  export default {
    components: {
      MuAvatar,
      MuCardHeader
    },
    data () {
      return {
        topic: null,
        replies: null
      }
    },
    methods: {},
    created () {
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
</style>
