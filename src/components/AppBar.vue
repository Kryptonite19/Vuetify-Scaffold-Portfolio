<template>
  <div>
    <v-app-bar>
      <!-- Hamburger Menu -->
      <template v-if="mobile" #prepend>
        <v-app-bar-nav-icon @click.stop="isDrawerOpen = !isDrawerOpen" />
      </template>

      <!-- LOGO -->
      <div class="custom-font text-h3 font-weight-medium px-10">{{ logoText }}</div>

      <v-spacer />

      <!-- Language Switch Button -->
      <v-btn
        v-if="!mobile"
        dense
        prepend-icon="mdi-translate"
        variant="flat"
        color="#673AB7"
        @click="toggleLocale()"
      >
        {{ langLabel }}
      </v-btn>

      <!-- Theme Switch Button -->
      <v-btn v-if="!mobile" icon @click="toggleTheme()">
        <v-icon v-if="darkMode">mdi-weather-sunny</v-icon>
        <v-icon v-else>mdi-weather-night</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="isDrawerOpen" :absolute="!mobile">
      <!-- HOME -->
      <v-list-item
        link
        prepend-icon="mdi-home"
        :title="t('$vuetify.navbar.home')"
        class="mt-5"
        @click="routeToView('/')"
      />

      <!-- ABOUT -->
      <v-list-item
        link
        prepend-icon="mdi-information-outline"
        :title="t('$vuetify.navbar.aboutme')"
        @click="routeToView('about')"
      />

      <!-- PROJECTS -->
      <v-list-item
        link
        prepend-icon="mdi-application-brackets"
        :title="t('$vuetify.navbar.projects')"
        @click="routeToView('/projects')"
      />

      <!-- BLOG -->
      <v-list-item
        link
        prepend-icon="mdi-post"
        :title="t('$vuetify.navbar.blog')"
        @click="routeToView('/blog')"
      />

      <!-- CONTACT -->
      <v-list-item
        link
        prepend-icon="mdi-email"
        :title="t('$vuetify.navbar.contact')"
        @click="routeToView('/contact')"
      />

      <template #append v-if="mobile">
        <div class="pa-2">
          <div class="text-h6">{{ t('$vuetify.navbar.settings') }}</div>
          <v-divider />
          <v-btn
            class="mt-2"
            block
            dense
            prepend-icon="mdi-translate"
            color="#673AB7"
            @click="toggleLocale()"
          >
            {{ langLabel }}
          </v-btn>
          <v-btn
            class="mt-2"
            block
            dense
            :prepend-icon="darkMode ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            color="#673AB7"
            @click="toggleTheme()"
          >
            {{ darkMode ? t('$vuetify.navbar.lightmode') : t('$vuetify.navbar.darkmode') }}
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
// imports
import { computed, ref } from 'vue'
import { useDisplay, useLocale, useTheme } from 'vuetify'
import { useRouter } from 'vue-router'

// hooks
const { mobile } = useDisplay()
const theme = useTheme()
const { t } = useLocale()
const { current } = useLocale()
const router = useRouter()

// variables
const isDrawerOpen = mobile.value ? ref(false) : ref(true)

const logoText = '<OGZ.dev>'

const darkMode = ref(theme.global.current.value.dark)
const langLabel = computed(() => {
  const lang = current.value
  if (lang === 'en') {
    return 'EN'
  } else if (lang === 'tr') {
    return 'TR'
  } else {
    return 'EN'
  }
})

// methods
const toggleTheme = () => {
  darkMode.value = !darkMode.value
  theme.global.name.value = darkMode.value ? 'ogzDarkTheme' : 'ogzLightTheme'
}

const toggleLocale = () => {
  current.value = current.value === 'en' ? 'tr' : 'en'
}

const routeToView = (routePath: string) => {
  router.push(routePath)
}
</script>

<style lang="scss" scoped>
// Import your SCSS file that includes the Source Code Pro font
@import "../styles/settings.scss";

</style>