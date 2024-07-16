<template>
  <div class="home">
    <Tweet 
      v-for="tweet in tweets" 
      :key="tweet._id" 
      :tweet="tweet" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tweet from '../components/vue-tweet.vue';
import vweets from '../vweets';

const tweets = ref(vweets);
</script>