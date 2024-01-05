<template>
  <div class="pa-5">
    <div class="text-h3">{{ t('$vuetify.navbar.aboutme') }}</div>
    <v-img class="bg-[#121212]" max-width="500" src="../assets/DSC_1098.JPEG" cover />
    <div class="d-flex align-center justify-space-between">
      <p class="text-justify text-body-1 mt-5">
        {{ t('$vuetify.about.aboutparagraph') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify'

const { t } = useLocale()
</script>
