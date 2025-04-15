<template>
  <Container>
    <BannerLaunchBackground v-bind="MOCK" />
  </Container>
</template>

<script setup>
  import Container from './templates/container'
  import BannerLaunchBackground from './templates/bannerlaunchbackground'

  const MOCK = {
    titleTag: 'h1',
    title:
      "Product</br><i class='text-orange-500 font-mono not-italic font-bold'>LaunchWeek#01</i></br>May 05-06",
    description: '2 days of new features</br>and ways change tnpmhe game',
    imageDark: 'https://www.azion.com/assets/images/components/bannerlaunch/a-background-wide.png',
    imageLight: 'https://www.azion.com/assets/images/components/bannerlaunch/a-background.png'
  }
</script>
