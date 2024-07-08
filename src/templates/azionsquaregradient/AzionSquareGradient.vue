<template>
  <div class="azion-logo-container-component">
    <div class="azion-horizontal-line"></div>
    <div class="azion-logo-container">
        <div class="azion-bg"></div>
        <div class="azion-logo-wrap">
          <svg class="azion-svg-logo" viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.614 19.375L0 22.619H3.213L20.504 8.016L17.721 22.619H21.94L26.159 0.506H22.939L0.614 19.375Z" />
          </svg>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
  @keyframes border {
    0% {
      -webkit-transform: rotate3d(0, 0, 1, 0deg);
      transform: rotate3d(0, 0, 1, 0deg);
    }
    25% {
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
    }
    50% {
      -webkit-transform: rotate3d(0, 0, 1, 180deg);
      transform: rotate3d(0, 0, 1, 180deg);
    }
    75% {
      -webkit-transform: rotate3d(0, 0, 1, 270deg);
      transform: rotate3d(0, 0, 1, 270deg);
    }
    100% {
      -webkit-transform: rotate3d(0, 0, 1, 360deg);
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }

  .azion-logo-container-component {
    display: flex;
    align-items: center;
    min-width: 180px;

    &:hover {
      .azion-bg {
        -webkit-animation: border 60s normal linear infinite;
        animation: border 60s normal linear infinite;
      }
    }
  }

  .azion-logo-container {
    width: clamp(5rem, 0.5rem + 22.5vw, 8.9375rem);
    height: clamp(5rem, 0.5rem + 22.5vw, 8.9375rem);
    overflow: hidden;
    position: relative;
    border-radius: 24px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

    .azion-logo-wrap {
      position: relative;
      z-index: 10;
      width: clamp(4.875rem, 0.375rem + 22.5vw, 8.8125rem);
      height: clamp(4.875rem, 0.375rem + 22.5vw, 8.8125rem);
      border-radius: 24px;
      position: relative;
      top: 1px;
      left: 1px;
      background: linear-gradient(212deg, #222 19.12%, #000 130.55%);
      box-shadow: 0px 0px 5.768px 0px rgba(0, 0, 0, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .azion-svg-logo {
        fill: #F26522;
        width: clamp(2.5rem, -1.7857rem + 21.4286vw, 6.25rem);
        height: clamp(2.5rem, -1.7857rem + 21.4286vw, 6.25rem);
        display: block;
      }
    }
  }

  .azion-bg {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, #333 40%, #F26522 130.55%);
  }

  .azion-horizontal-line {
    background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(102,102,102,1) 35%, rgba(34,34,34,1) 100%);
    width: calc(100% - clamp(5rem, 0.5rem + 22.5vw, 8.9375rem));
    height: 1px;
  }
</style>
