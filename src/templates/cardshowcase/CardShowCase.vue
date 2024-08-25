<template>
  <Card
    :pt="{
      root: { class: ['card-bg-gradient rounded relative w-[378px] h-[218px] shadow-none'] },
      body: { class: ['rounded surface-ground absolute w-[376px] h-[216px] left-[1px] top-[1px] p-6'] }
    }"
  >
    <template #content>
        <div class="flex flex-col gap-5">
          <div>
            <p class="font-medium">
              <small>
                Browse Integrations
              </small>
            </p>
          </div>

          <ul class="border-icons flex flex-row gap-3">
            <li>
              <a
                class="block relative rounded w-14 h-14"
                href="https://openai.com/"
                target="_blank"
              >
                <span class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px] surface-ground">
                  <i class="w-[40px] h-[40px]">
                    <IconOpenIa />
                  </i>
                </span>
              </a>
            </li>
            <li>
              <a
                class="block relative rounded w-14 h-14"
                href="https://www.astro.build"
                target="_blank"
              >
                <span class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px] surface-ground">
                  <i class="w-[40px] h-[40px]">
                    <IconAstro />
                  </i>
                </span>
              </a>
            </li>
            <li>
              <a
                class="block relative rounded w-14 h-14"
                href="https://angular.dev/"
                target="_blank"
              >
                <span class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px] surface-ground">
                  <i class="w-[40px] h-[40px]">
                    <IconAngular />
                  </i>
                </span>
              </a>
            </li>
            <li>
              <a
                class="block relative rounded w-14 h-14"
                href="https://vuejs.org/"
                target="_blank"
              >
                <span class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px] surface-ground">
                  <i class="w-[40px] h-[40px]">
                    <IconVue />
                  </i>
                </span>
              </a>
            </li>
          </ul>

          <div class="content-skeleton flex flex-col gap-3">
            <div class="flex justify-between">
              <div class="item-skeleton w-[120px] h-[16px]"></div>
              <div class="item-skeleton w-[80px] h-[16px]"></div>
            </div>
            <div class="flex justify-between">
              <div class="item-skeleton w-[228px] h-[16px]"></div>
              <div class="item-skeleton w-[80px] h-[16px]"></div>
            </div>
          </div>
        </div>
    </template>
  </Card>
</template>

<!-- Card Gradient BG/BORDER -->
<style scss>
  .card-bg-gradient {
    transition: all 1s ease-in-out !important;
    background-color: var(--surface-border);
    background: linear-gradient(140deg, var(--surface-border) 30%, var(--surface-ground) 100%);

    &:hover {
      box-shadow: 1px 1px 0px var(--surface-border) !important;
    }
  }
</style>

<!-- Framework Icons -->
<style scss>
  .card-bg-gradient {
    &:hover {
      .border-icons {
        gap: 0px !important;

        li:nth-child(2) { left: -1rem; }
        li:nth-child(3) { left: -2rem; }
        li:nth-child(4) { left: -3rem; }
        li:nth-child(5) { left: -4rem; }

        a {
          background-color: #F3652B;
          background: linear-gradient(90deg, #F3652B 0%, var(--surface-ground) 100%);
        }
      }
    }
  }

  .border-icons {
    transition: gap 800ms ease;

    li {
      position: relative;
      left: 0;
      transition: left 800ms ease-in-out !important;

      a {
        background-color: var(--surface-border);
        position: relative;
        top: 0;
        transition: top 200ms ease-in-out !important;

        &:hover {
          top: -6px;
        }
      }
    }
  }
</style>

<!-- SKELLETON COMP -->
<style scss>
  .item-skeleton {
    background-color: var(--surface-border);
  }

  .azion {
    &.azion-dark {
      .content-skeleton {
        .item-skeleton {
          background: linear-gradient(90deg, var(--surface-border) 0%, #191919 100%);
        }
      }
    }

    &.azion-light {
      .content-skeleton {
        .item-skeleton {
          background: linear-gradient(90deg, var(--surface-border) 0%, #f1f1f1 100%);
        }
      }
    }
  }
</style>

<script setup>
  import Card from 'primevue/card';
  import IconAstro from '../../assets/icons/frameworks/Astro.vue';
  import IconAngular from '../../assets/icons/frameworks/Angular.vue';
  import IconOpenIa from '../../assets/icons/frameworks/OpenIa.vue';
  import IconVue from '../../assets/icons/frameworks/Vue.vue';
</script>

