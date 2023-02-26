<template>
  <div class="home">
    <HelloWorld msg="Welkom op SubsidieRadar"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home-page',
  components: {
    HelloWorld
  }
}
</script>