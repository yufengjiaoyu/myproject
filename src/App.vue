<template>
  <div id="app">
    <LuffyHeader></LuffyHeader>
  </div>
</template>

<script>
import LuffyHeader from '@/components/Common/LuffyHeader'
export default {
  name: 'App',
  components:{
      LuffyHeader
    }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
