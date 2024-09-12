<template>
  <div class="globe-container">
    <div class="globe">
      <div class="globe-inner"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .globe-container {
    perspective: 400px;
  }

  .globe {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    transform: rotate(17.5deg);
    transform-style: preserve-3d;
  }

  .globe-inner {
    width: 100%;
    height: 100%;
    background-size: 800px;
    background-repeat: repeat-x;
    border-radius: 50%;
    animation: rotate 36.5s infinite linear;
  }

  .azion-dark {
    .globe {
      background: radial-gradient(800px at 20px 464px, rgba(1, 1, 1, .4), transparent 60%);
      box-shadow: 0 0 2px rgba(243,101,43, .35), 0 0 40px rgba(243,101,43, .2);
    }

    .globe-inner {
      background-image: v-bind(darkImg);
      box-shadow: 0 0 60px rgba(0, 0, 0, 1) inset;
    }
  }

  .azion-light {
    .globe {
      box-shadow: 0px 4px 80px 0px rgba(211, 211, 211, 1);
      background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(169, 169, 169, 0.16) 100%);
    }

    .globe-inner {
      background-image: v-bind(lightImg);
    }
  }

  @keyframes rotate {
    0% {
      background-position: 0 -42px;
    } 100% {
      background-position: -800px -42px;
    }
  }
</style>

<script setup>
  const props = defineProps({
    lightImage: {
      type: String,
      required: false,
      default: 'https://www.azion.com/assets/images/components/globe/map-light@3.png'
    },
    darkImage: {
      type: String,
      required: false,
      default: 'https://www.azion.com/assets/images/components/globe/map-dark@2x.png'
    }
  });
  const lightImg = `url(${props.lightImage})`;
  const darkImg = `url(${props.darkImage})`;
</script>
