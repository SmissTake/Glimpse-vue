<template>
    <form action="/">
        <van-search
        v-model="value"
        show-action
        placeholder="Placeholder"
        @search="onSearch"
        >
        <template #action>
            <div @click="onClickButton">Search</div>
        </template>
    </van-search>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';

export default {
  setup() {
    const value = ref('');
    const onSearch = (value: string) => {
      showToast(`Search: ${value}`);
    };
    const onClickButton = () => onSearch(value.value);
    return { value, onSearch, onClickButton };
  },
};
</script>