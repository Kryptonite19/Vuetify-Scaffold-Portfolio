<template>
  <v-app>
    <v-layout class="full-height">
      <app-bar />
      <v-main class="d-flex align-center justify-center" style="min-height: 300px">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import { RouterView } from 'vue-router'
</script>
