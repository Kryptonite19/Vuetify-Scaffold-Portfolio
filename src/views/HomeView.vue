<template>
  <div class="text-h1">{{ t('$vuetify.navbar.home') }}</div>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify'

const { t } = useLocale()
</script>
