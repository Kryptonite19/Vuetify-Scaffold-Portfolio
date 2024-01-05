<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <div class="text-h1">Oops!</div>
        <div class="text-h3">This page is under construction.</div>
      </v-col>
      <v-img v-if="!mobile" aspect-ratio="1" max-width="400" src="../assets/const.png" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
</script>
