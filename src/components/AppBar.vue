<template>
<div>
  <div class="app-bar">
    <mu-appbar title="V2EX">
      <mu-icon-button icon="menu" slot="left"/>
      <!--<mu-flat-button label="V2EX" slot="left"/>-->
      <!--<mu-flat-button label="expand_more" slot="right"/>
      <mu-flat-button href="333" label="expand_more" slot="right"/>-->
      <mu-icon-button icon="expand_more" slot="right"/>
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
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
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
