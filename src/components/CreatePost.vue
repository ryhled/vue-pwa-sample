<template>
  <div>
    <label>Title</label>
    <p>
      <input type="text" v-model="post.title" />
    </p>
    <label>Content</label>
    <p>
      <textarea v-model="post.content"></textarea>
    </p>
    <button @click="createPost">Create post</button>
  </div>
</template>

<script>
import { createPost } from '@/api/posts';

export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    async createPost() {
      await createPost(this.post);
      this.post = {};
      console.log(JSON.stringify(this.post));
    },
  },
};
</script>
