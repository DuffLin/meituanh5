<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item to="/" badge="3">
      <span>数据统计</span>
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.inactive" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="myMoney" icon="home-o">我的钱包</van-tabbar-item>
    <van-tabbar-item to="myShop" icon="search">我的店铺</van-tabbar-item>
    <van-tabbar-item to="storeOrders" icon="friends-o">门店订单</van-tabbar-item>
  </van-tabbar>
</template>
<script setup>
import { ref } from "vue"
const active = ref(0);
const icon = ref({
  active: 'https://img01.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png'
})

</script>
<style scoped>

</style>
