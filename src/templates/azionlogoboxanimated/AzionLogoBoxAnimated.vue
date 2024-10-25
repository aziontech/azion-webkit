<template>
  <div class="azion-logo-box surface-ground">
    <svg  class="logo" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M68.8751 0L64.3906 23.4146H87.711L92.1955 0H68.8751ZM72.5179 4.42392H86.8522L84.0623 18.9907H69.728L72.5179 4.42392Z" fill="#F3652B"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M60.0001 0L55.6094 23.4146H59.9992L64.3899 0H60.0001Z" fill="#F3652B"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3824 0L0.654522 19.9761L0 23.4146H3.41853L21.7987 7.94855L18.8361 23.4146H23.3197L27.8049 0H24.3824Z" fill="#F3652B"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M115.516 0L113.526 10.3871L117.148 14.8895L120 0H115.516ZM96.6798 0L92.1953 23.4146H96.6815L99.755 7.36298L112.711 23.4146H115.516L116.069 20.5482L99.4841 0H96.6798Z" fill="#F3652B"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M32.2893 0L31.4419 4.42401H46.9283L28.4682 19.9674L27.8047 23.4146H51.125L51.9724 18.9906H36.4861L54.9502 3.44385L55.6096 0H32.2893Z" fill="#F3652B"></path>
    </svg>
  </div>
</template>

<style lang="scss">
  :root {
    --draw-duration: 6s;
    --total-duration: var(--draw-duration);
  }

  // {
  // box-sizing: border-box;
  // }

  // body, html {
  //   margin: 0;
  //   padding: 0;
  //   width: 100%;
  //   height: 100%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   background-color: #f0f0f0;
  // }

  .azion-logo-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
    border: 2px solid #F3652B;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .logo {
    width: 150px;
    height: 140px;
    animation: fullAnimation var(--total-duration) ease-in-out infinite;
  }

  .logo path {
    stroke: #F3652B;
    stroke-width: 2;
    fill: transparent;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: draw var(--draw-duration) ease-in-out infinite;
  }

  @keyframes draw {
    0% {
      stroke-dashoffset: 400;
      fill: transparent;
    }
    25% {
      stroke-dashoffset: 200;
    }
    50% {
      stroke-dashoffset: 0;
      fill: #F3652B;
    }
    75% {
      stroke-dashoffset: 200;
      fill: #F3652B;
    }
    100% {
      stroke-dashoffset: 400;
      fill: transparent;
    }
  }
</style>

<script setup></script>
