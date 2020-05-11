<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>| <router-link to="/posts">All posts</router-link>|
      <router-link to="/posts/create">Create post</router-link>
    </div>
    <div>
      <span>Browser considers this to be installable: {{ deferredPrompt ? 'yes' : 'no' }}</span>
      <span>Using API endpoint '{{ apiUrl }}'.</span>
      <span>Running under environment '{{ env }}'.</span>
    </div>
    <router-view />
    <div class="banner" v-if="deferredPrompt">
      <p>
        Do you want to install Foo App (only shown if defferedPrompt is set from browser)?
      </p>
      <button @onClick="promptInstall">Opt for!</button>
    </div>
  </div>
</template>

<script>
import { API_URL, ENV } from '@/config';

export default {
  data() {
    return {
      apiUrl: API_URL,
      env: ENV,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/site.scss';
</style>
