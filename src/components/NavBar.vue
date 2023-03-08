<template>
    <van-tabbar v-model="active">
    <van-tabbar-item name="home" to="/" icon="home-o"></van-tabbar-item>
    <van-tabbar-item name="like" to="/like" icon="like-o"></van-tabbar-item>
    <van-tabbar-item name="add" to="/add" icon="add-square"></van-tabbar-item>
    <van-tabbar-item name="notification" to="/notification" icon="diamond-o"></van-tabbar-item>
    <van-tabbar-item name="user" to="/user" icon="user-o"></van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const active = ref("home");
    return { active };
  },
};
</script>