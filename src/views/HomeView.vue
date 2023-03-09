<template>
  <SearchBar></SearchBar>
  <van-tabs v-model:active="activeName" swipeable>
    <van-tab title="tab 1" icon="home-o" name="a">
      <template #title> <van-icon name="star"/></template>
      <PlaceCard></PlaceCard>
    </van-tab>
    <van-tab title="tab 2" name="b">
      <template #title><van-icon name="like-o"/></template>
      content of tab 2</van-tab>
    <van-tab title="tab 3" name="c">
      <template #title><van-icon name="send-gift-o" /></template>
      content of tab 3</van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { ref } from 'vue';
import SearchBar from '@/components/SearchBar.vue';
import PlaceCard from '@/components/PlaceCard.vue';

export default {
  setup() {
    const activeName = ref('a');
    return { activeName };
  },
  components: {
    SearchBar,
    PlaceCard,
  },
}

</script>

<style lang="scss">
@import "../assets/styles/layouts/_tabs.scss";
</style>