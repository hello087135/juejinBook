<template lang="pug">
  div.test
    h3 {{msg}}
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    getMsg() {
      const name = 'Webpack Vue'
      return this.msg+name
    }
  }
}
</script>
<style lang="less">
.test {
  color: red;
  height: 100px;
  h1 {
    color: blue;
  }
}
#app {
  background: blue;
  width: 100px;
}

</style>
