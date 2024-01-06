<template>
  <v-container>
    <v-responsive>
      <div :class="{ 'd-flex align-center justify-space-between': !mobile }">
        <v-col>
          <div class="text-h3 font-weight-bold">{{ t('$vuetify.navbar.contact') }}</div>
          <v-form fast-fail @submit.prevent class="mt-5">
            <v-text-field
              variant="outlined"
              :label="t('$vuetify.contactpage.yourmail')"
              placeholder="jondoe@gmail.com"
            ></v-text-field>

            <v-text-field variant="outlined" :label="t('$vuetify.contactpage.subject')"></v-text-field>

            <v-textarea variant="outlined" :label="t('$vuetify.contactpage.message')"></v-textarea>

            <v-btn type="submit" block dense color="primary" class="mt-2">{{ t('$vuetify.contactpage.submit') }}</v-btn>
          </v-form>
        </v-col>
        <v-col>
          <div class="text-h3">{{ t('$vuetify.contactpage.connect') }}</div>
          <p class="text-left mt-5">
            {{ t('$vuetify.contactpage.connectbody') }}
          </p>
          <div class="d-flex align-center justify-center">
            <v-img max-width="100" :aspect-ratio="1" src="../assets/github-icon-dark.svg" />
            <p class="text-left">
              <a href="https://github.com/Kryptonite19" target="_blank">Github</a>
            </p>
            <v-img max-width="100" :aspect-ratio="1" src="../assets/linkedin-icon-dark.svg" />
            <p class="text-left">
              <a href="https://www.linkedin.com/in/ahmet-oğuzhan-keleş-ogz1111/" target="_blank"
                >Linkedin</a
              >
            </p>
          </div>
        </v-col>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay, useLocale, useTheme } from 'vuetify'
const { mobile } = useDisplay()

const { t } = useLocale()
</script>
