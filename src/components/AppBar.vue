<template>
  <div>
    <div class="app-bar">
      <mu-appbar title="V2EX">
        <mu-icon-button icon="menu" slot="left" @click="toggle(true)"></mu-icon-button>
        <mu-icon-button icon="expand_more" slot="right"></mu-icon-button>
        <mu-drawer :open="open" :docked="docked" @close="toggle()">
          <mu-list @itemClick="docked ? '' : toggle()">
            <mu-list-item title="Item 1"></mu-list-item>
            <mu-list-item title="Item 2"></mu-list-item>
            <mu-list-item v-if="docked" @click.native="open = false" title="Close"></mu-list-item>
          </mu-list>
        </mu-drawer>
      </mu-appbar>
    </div>
    <div class="app-tabs">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="all" title="全部" @click="processTarget('all')"></mu-tab>
        <mu-tab value="hot" title="最热" @click="processTarget('hot')"></mu-tab>
        <mu-tab value="tech" title="技术" @click="processTarget('tech')"></mu-tab>
        <mu-tab value="node" title="节点" @click="processTarget('nodes')"></mu-tab>
      </mu-tabs>
      <div v-if="activeTab === 'all'">
        <h2>全部</h2>
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <li>{{ article.title }}</li>
        </ul>
      </div>
      <div v-if="activeTab === 'hot'">
        <h2>最热</h2>
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <li>{{ article.title }}</li>
        </ul>
      </div>
      <div v-if="activeTab === 'tech'">
        <h2>技术</h2>
        <ul v-for="article in this.$store.state.latestJSON.articles">
          <li>{{ article.title }}</li>
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
  export default {
    name: 'hello',
    data () {
      return {
        activeTab: 'all',
        open: false,
        docked: true,
        articles: null
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
      },
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      processTarget (type) {
        switch (type) {
          case 'all':
            console.log('all')
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
    }
  }
</script>

<style scoped>
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
  }

  a {
    color: #42b983;
  }
</style>
