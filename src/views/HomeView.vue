<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div class="container pa-5">
        <h1>
          Hi, I'm
          <span class="typed-text">{{ typeValue }}</span>
          <span class="blinking-cursor">|</span>
          <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
        </h1>
      </div>
      <div :class="{ 'text-h3 font-weight-medium text-justify mt-3': !mobile }">
        Welcome to my portfolio website where i tell you about myself
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue'
import { useLocale, useDisplay } from 'vuetify'
const mobile = useDisplay()
const { t } = useLocale()
const typeValue = ref('')
const typeStatus = ref(false)
const displayTextArray = ref(['Oğuzhan', 'a Web Developer', 'a Mobile Developer', 'a UI/UX Designer'])
const typingSpeed = 100
const erasingSpeed = 100
const newTextDelay = 2000
const displayTextArrayIndex = ref(0)
const charIndex = ref(0)

onMounted(() => {
  setTimeout(typeText, newTextDelay + 200)
})

const typeText = () => {
  if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
    if (!typeStatus.value) typeStatus.value = true
    typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(charIndex.value)
    charIndex.value += 1
    setTimeout(typeText, typingSpeed)
  } else {
    typeStatus.value = false
    setTimeout(eraseText, newTextDelay)
  }
}

const eraseText = () => {
  if (charIndex.value > 0) {
    if (!typeStatus.value) typeStatus.value = true
    typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(
      0,
      charIndex.value - 1
    )
    charIndex.value -= 1
    setTimeout(eraseText, erasingSpeed)
  } else {
    typeStatus.value = false
    displayTextArrayIndex.value += 1
    if (displayTextArrayIndex.value >= displayTextArray.value.length)
      displayTextArrayIndex.value = 0
    setTimeout(typeText, typingSpeed + 1000)
  }
}
</script>
<style lang="scss" scoped>
.mycontainer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  font-size: 15pt;
  font-weight: bold;
  span.typed-text {
    color: #673ab7;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 15pt;
  color: #2c3e50;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
// Cursor blinking CSS Ends...
</style>
