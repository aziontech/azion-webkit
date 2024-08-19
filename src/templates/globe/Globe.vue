<template>
  <div class="globe-container">
    <div class="globe">
      <div class="globe-inner"></div>
    </div>
  </div>
</template>

<style>
  /* Globe Container */
  .globe-container {
    perspective: 1000px;
  }

  /* Globe */
  .globe {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(600px at 20px 464px, rgba(111, 111, 111, 0.14), transparent 60%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 2px rgba(243,101,43, .4), 0 0 14px rgba(243,101,43, .2);
  }

  /* Inner Globe */
  .globe-inner {
    width: 100%;
    height: 100%;
    background: url('./map-dark@2x.png');
    background-size: 600px;
    border-radius: 50%;
    transform-style: preserve-3d;
    animation: rotate 36.5s infinite linear;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5) inset;
  }

  /* Rotation Animation */
  @keyframes rotate {
    0% {
      background-position: 0 -60px;
    } 100% {
      background-position: -600px -60px;
    }
  }
</style>

<script setup>

</script>
