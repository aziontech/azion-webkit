<template>
  <i class="arrow-content">
    <span
      class="arrow"
      :class="props.direction"
    ></span>
    <span
      class="shadow"
      :class="props.direction"
    ></span>
  </i>
</template>

<style scss>
  .arrow-content {
    display: block;
    min-width: 50px;
    width: v-bind(width);
    height: 2px;
    border-top: v-bind(borderStyle);
    position: relative;

    /*
    background: transparent;
    background-image: radial-gradient(#F3652B 1px, transparent 0px);
    background-size: 3px 3px;
    background-position: -40px -40px;
    */

    .shadow {
      position: absolute;
      width: 100%;
      height: 1px;
      top: -1px;
      z-index: 2;
    }

    .arrow {
      border: solid #f3652b;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 4px;
      position: absolute;
      z-index: 1;
      top: -5px;

      &.right {
        right: -2px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }

      &.left {
        left: -2px;
        transform: rotate(135deg);
        -webkit-transform: rotate(135deg);
      }

      &.up {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
      }

      &.down {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }
    }
  }

  .azion-dark {
    .arrow-content {
      .shadow {
        background: rgb(23, 23, 23);

        &.right {
          background: linear-gradient(
            90deg,
            rgba(23, 23, 23, 1) 0%,
            rgba(23, 23, 23, 0.013064600840336116) 100%
          );
        }

        &.left {
          background: linear-gradient(
            266deg,
            rgba(23, 23, 23, 1) 0%,
            rgba(23, 23, 23, 0.013064600840336116) 100%
          );
        }
      }
    }
  }

  .azion-light {
    .arrow-content {
      .shadow {
        background: rgb(255, 255, 255);

        &.right {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        &.left {
          background: linear-gradient(
            266deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }
    }
  }
</style>

<script setup>
  const props = defineProps({
    direction: {
      type: String,
      required: false,
      default: 'left',
      // options: ['left', 'right', 'top', 'bottom']
      options: ['left', 'right'] // develop top and bottom, the arrow css is already done
    },
    borderStyle: {
      type: String,
      required: false,
      default: 'dotted',
      options: ['solid', 'dotted', 'dashed', 'ridge']
    },
    width: {
      type: String,
      required: false,
      default: 'auto'
    }
  })

  const borderStyle = `${props.borderStyle} 1px #F3652B`
  const width = props.width
</script>
