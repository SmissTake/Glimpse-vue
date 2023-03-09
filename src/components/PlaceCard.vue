<template>
    <div>
        <div class="place-card">
            <div class="card-image">
                <van-image
                    src=""
                    width="100%"
                    lazy-load
                    fit="cover"
                />
            </div>
            <div class="card-body flex">
                <van-row align="center" justify="space-between">
                    <div class="block">
                        <h5 class="card-title">Place Name - Place Category</h5>
                        <p class="card-text">User</p>
                    </div>
                    <van-icon name="like-o"/>
                </van-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PlaceCard',
});
</script>

<style scoped lang="scss">
.place-card {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;

    & .card-image {
        width: 100%;
        height: 150px;
        overflow: hidden;
        background-color: rgb(85, 85, 85);
    }
    & .card-body {
        padding: 5px 10px;
        background-color: rgb(218, 218, 218);

        & .card-title {
            font-size: 16px;
            font-weight: 500;
            margin: 5px 0;
        }

        & .card-text {
            font-size: 14px;
            font-weight: 400;
            margin: 0;
        }
    }
}
</style>