<template>
  <div class="surface-section py-20">
    <div class="px-container w-full flex flex-col gap-40">
      <HeroBlockBase
        v-bind="{title:'Edge platform to build, secure, and scale applications anywhere', description:'Over 100+ Azion edge locations around the globe, plus your remote devices, on-premises, and cloud infrastructure.',isCentralized:true}"
      >
            <template #main>
                <div class="flex justify-center items-center">
                    <div class="w-[1440px] -mt-[400px] overflow-hidden absolute"
                        ref="movableDiv"
                    >
                        <Vue3Spline
                            :scene="{
                                url: 'https://prod.spline.design/ZSqulu6Q0K6sPCXc/scene.splinecode',
                            }"
                        />
                    </div>
                </div>
            </template>
            <template #actions>
                <LinkButton label="Free Account" link="" />
                <LinkButton label="Talk to an Expert" link="" outlined />
            </template>
    </HeroBlockBase>
    </div>
  </div>
</template>

<script setup>
  // Imports Components
  import Card from 'primevue/card'

  // Imports Templates 
  import HeroBlockBase from './templates/hero-block-base/index.vue'
</script>