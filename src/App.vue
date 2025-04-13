<template>
  <Container>
    <BannerLaunch v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import BannerLaunch from './templates/bannerlaunch'

  const MOCK = {
    titleTag: 'h1',
    title:
      "Product</br><span class='animate-pretty bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500'>LaunchWeek#01</span></br>May 05-06",
    description: '2 days of new features</br>and ways change the game',
    imageDark: 'https://www.azion.com/assets/images/components/bannerlaunch/a_dark.png',
    imageLight: 'https://www.azion.com/assets/images/components/bannerlaunch/a_light.png'
  }
</script>
