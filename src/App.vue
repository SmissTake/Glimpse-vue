<template>
  <router-view/>
  <NavBar>
  </NavBar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import '@vant/touch-emulator';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>