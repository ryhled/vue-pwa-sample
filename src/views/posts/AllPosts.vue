<template>
  <div>
    <h1>All posts stored in application</h1>
    <button @click="$router.push({ name: 'CreatePost' })">
      Create new post (click event)
    </button>
    <h2>{{ testTitle }}</h2>
    <list-posts></list-posts>
  </div>
</template>

<script>
import ListPosts from '@/components/ListPosts.vue';
// import localForage from 'localforage';

export default {
  data() {
    return {
      testTitle: '',
    };
  },
  components: {
    ListPosts,
  },
  // async created() {
  //   await localForage.setItem('ctitle', 'Yesbox');
  //   this.testTitle = await localForage.getItem('ctitle');
  // },
};
</script>
