<template>
  <v-app class="custom-font">
    <v-layout>
      <app-bar />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import { RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
@import './styles/settings.scss';
</style>
