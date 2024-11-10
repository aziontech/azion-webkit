<template>
  <BFGlobe
    v-if="epochtime !== 0"
    :epoch="epochtime"
    :globeView="globeView"
    :platform="platform"
  >
  </BFGlobe>

  <UIControls
    @updateGlobeView="handle.globeView"
    @updateTimestamp="handle.updateTimestamp"
    @updateFilter="handle.platformFilter"
  >
  </UIControls>
</template>

<script setup>
  import { ref } from "vue";
  import BFGlobe from "./BFGlobe.vue";
  import UIControls from "./UIControls.vue";

  const props = defineProps({
    // (pt-br || en || es) are the default support languages by Azion
    lang: {
      type: String,
      default: 'pt-br'
    }
  })

  let epochtime = ref(0);
  let globeView = ref("sales");
  let platform = ref("all");

  let handle = {
    globeView: (globeId) => {
      globeView.value = globeId;
    },
    updateTimestamp: (epoch) => {
      epochtime.value = epoch;
    },
    platformFilter: (typeofPlatform) => {
      platform.value = typeofPlatform;
    }
  };
</script>
