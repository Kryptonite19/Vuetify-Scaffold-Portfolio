<template>
  <div class="pa-5">
    <div :class="{ 'd-flex align-center justify-space-between': !mobile }">
      <v-col>
        <div class="text-h3">{{ t('$vuetify.navbar.contact') }}</div>
        <v-form fast-fail @submit.prevent class="mt-5">
          <v-text-field
            variant="outlined"
            label="Your Email"
            placeholder="jondoe@gmail.com"
          ></v-text-field>

          <v-text-field variant="outlined" label="Subject"></v-text-field>

          <v-textarea variant="outlined" label="Your Message"></v-textarea>

          <v-btn type="submit" dense color="#673AB7" class="mt-2">Submit</v-btn>
        </v-form>
      </v-col>
      <v-col >
        <div class="text-h3">Lets connect</div>
        <p class="text-left mt-5">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div class="d-flex align-center justify-center">
          <v-img
            class="bg-[#121212]"
            max-width="100"
            :aspect-ratio="1"
            src="../assets/github-icon.svg"
          />
          <p class="text-left">
            <a href="https://github.com/Kryptonite19" target="_blank">Github</a>
          </p>
          <v-img
            class="bg-[#121212]"
            max-width="100"
            :aspect-ratio="1"
            src="../assets/linkedin-icon.svg"
          />
          <p class="text-left">
            <a href="https://www.linkedin.com/in/ahmet-oğuzhan-keleş-ogz1111/" target="_blank">Linkedin</a>
          </p>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay, useLocale } from 'vuetify'
const { mobile } = useDisplay()

const { t } = useLocale()
</script>
