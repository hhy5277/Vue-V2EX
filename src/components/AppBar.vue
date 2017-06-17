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
        <mu-tab value="idea" title="创意" @click="processTarget('idea')"></mu-tab>
        <mu-tab value="fun" title="好玩" @click="processTarget('fun')"></mu-tab>
        <mu-tab value="apple" title="Apple" @click="processTarget('apple')"></mu-tab>
        <mu-tab value="job" title="酷工作" @click="processTarget('job')"></mu-tab>
        <mu-tab value="deal" title="交易" @click="processTarget('deal')"></mu-tab>
        <mu-tab value="city" title="城市" @click="processTarget('city')"></mu-tab>
        <mu-tab value="ask" title="问与答" @click="processTarget('ask')"></mu-tab>
        <mu-tab value="r2" title="R2" @click="processTarget('r2')"></mu-tab>
        <mu-tab value="node" title="节点" @click="processTarget('node')"></mu-tab>
      </mu-tabs>
      <div v-if="activeTab === 'all'">
        <h2>全部</h2>
      </div>
      <div v-if="activeTab === 'hot'">
        <h2>最热</h2>
      </div>
      <div v-if="activeTab === 'tech'">
        <h2>技术</h2>
      </div>
      <div v-if="activeTab === 'idea'">
        <h2>创意</h2>
      </div>
      <div v-if="activeTab === 'fun'">
        <h2>好玩</h2>
      </div>
      <div v-if="activeTab === 'apple'">
        <h2>Apple</h2>
      </div>
      <div v-if="activeTab === 'job'">
        <h2>酷工作</h2>
      </div>
      <div v-if="activeTab === 'deal'">
        <h2>交易</h2>
      </div>
      <div v-if="activeTab === 'city'">
        <h2>城市</h2>
      </div>
      <div v-if="activeTab === 'ask'">
        <h2>问与答</h2>
      </div>
      <div v-if="activeTab === 'r2'">
        <h2>R2</h2>
      </div>
      <div v-if="activeTab === 'node'">
        <h2>节点</h2>
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
        if (val === 'hot') {
          this.$store.dispatch('getHot')
        }
      },
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      processTarget (type) {
        switch (type) {
          case 'all':
            console.log('all')
            break
          case 'hot':
            console.log('hot')
            break
          case 'tech':
            console.log('tech')
            break
          case 'idea':
            console.log('idea')
            break
          case 'fun':
            console.log('fun')
            break
          case 'apple':
            console.log('apple')
            break
          case 'job':
            console.log('job')
            break
          case 'deal':
            console.log('deal')
            break
          case 'city':
            console.log('city')
            break
          case 'ask':
            console.log('ask')
            break
          case 'r2':
            console.log('r2')
            break
          case 'node':
            console.log('node')
            break
          default:
            console.log('nothing')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
