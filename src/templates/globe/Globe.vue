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
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: conic-gradient(from 180deg at 50% 50%, #0077be, #004a87, #0077be);
    transform-style: preserve-3d;
    animation: rotate 10s infinite linear;
    position: relative;
    overflow: hidden;
  }

  /* Inner Globe */
  .globe-inner {
    width: 100%;
    height: 100%;
    background: url('map-dark@2x.png') center/cover;
    border-radius: 50%;
    transform: translateZ(100px);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5) inset;
  }

  /* Rotation Animation */
  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
</style>

<script setup>

</script>
