<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <component :is="currentComponent"></component>
    {{ time | date('YYYY-MM-DD') }}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ComponentA from '@/components/ComponentA.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      currentComponent: 'HelloWorld',
      time: new Date()
    }
  },
  components: {
    HelloWorld,
    ComponentA
  }
}
</script>
