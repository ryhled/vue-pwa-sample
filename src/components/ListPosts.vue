<template>
  <div class="list-posts">
    <ul>
      <li v-for="post in posts" :key="post.id">[{{ post.id }}] {{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import { getPosts } from '@/api/posts';

export default {
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await getPosts();
  },
};
</script>
