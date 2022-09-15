<template lang="pug">
  <div class="test">
  <h1>{{ msg }}</h1>
  <p>{{ msg }}</p>
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
      return this.msg + name
    }
  }
}
</script>
<style>
.test {
  color: red;
  height: 100px;


}

h1 {
  color: blue;
}

#app {
  background: blue;
  width: 100px;
}

</style>
