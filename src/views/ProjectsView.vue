<template>
  <v-container>
    <v-responsive>
      <div class="text-h3 font-weight-bold">{{ t('$vuetify.navbar.projects') }}</div>
      
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify'

const { t } = useLocale()
</script>
