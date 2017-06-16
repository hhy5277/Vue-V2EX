<template>
<div>
  <div class="app-bar">
    <mu-appbar title="V2EX">
      <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
      <mu-icon-button icon="expand_more" slot="right"/>
      <mu-drawer :open="open" :docked="docked" @close="toggle()">
        <mu-list @itemClick="docked ? '' : toggle()">
          <mu-list-item title="Item 1"/>
          <mu-list-item title="Item 2"/>
          <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
        </mu-list>
      </mu-drawer>
    </mu-appbar>
  </div>
  <div class="app-tabs">
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="tab1" title="全部"/>
      <mu-tab value="tab2" title="最热"/>
      <mu-tab value="tab3" title="技术"/>
      <mu-tab value="tab4" title="创意"/>
      <mu-tab value="tab5" title="好玩"/>
      <mu-tab value="tab6" title="Apple"/>
      <mu-tab value="tab7" title="酷工作"/>
      <mu-tab value="tab8" title="交易"/>
      <mu-tab value="tab9" title="城市"/>
      <mu-tab value="tab10" title="问与答"/>
      <mu-tab value="tab11" title="R2"/>
      <mu-tab value="tab12" title="节点"/>
    </mu-tabs>
    <div v-if="activeTab === 'tab1'">
      <h2>全部</h2>
      <p>这是第1个 tab</p>
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>最热</h2>
      <p>这是第2个 tab</p>
      <p v-for="item in articles">
        <span>item</span>
      </p>
    </div>
    <div v-if="activeTab === 'tab3'">
      <h2>技术</h2>
      <p>这是第3个 tab</p>
    </div>
    <div v-if="activeTab === 'tab4'">
      <h2>创意</h2>
      <p>这是第4个 tab</p>
    </div>
    <div v-if="activeTab === 'tab5'">
      <h2>好玩</h2>
      <p>这是第5个 tab</p>
    </div>
    <div v-if="activeTab === 'tab6'">
      <h2>Apple</h2>
      <p>这是第6个 tab</p>
    </div>
    <div v-if="activeTab === 'tab7'">
      <h2>酷工作</h2>
      <p>这是第7个 tab</p>
    </div>
    <div v-if="activeTab === 'tab8'">
      <h2>交易</h2>
      <p>这是第8个 tab</p>
    </div>
    <div v-if="activeTab === 'tab9'">
      <h2>城市</h2>
      <p>这是第9个 tab</p>
    </div>
    <div v-if="activeTab === 'tab10'">
      <h2>问与答</h2>
      <p>这是第10个 tab</p>
    </div>
    <div v-if="activeTab === 'tab11'">
      <h2>R2</h2>
      <p>这是第11个 tab</p>
    </div>
    <div v-if="activeTab === 'tab12'">
      <h2>节点</h2>
      <p>这是第12个 tab</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      activeTab: 'tab1',
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
    }
  },
  created() {
    this.$store.commit('getHot')
  }
//  created: function () {
//    axios.get('https://www.v2ex.com/api/topics/hot.json').then(function (response) {
//      this.articles = response.data
//      console.log(response.data)
//    }).catch(function (error) {
//      console.log(error)
//    })
//  }
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
