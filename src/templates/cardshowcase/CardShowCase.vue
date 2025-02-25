<template>
  <Card
    :pt="{
      root: { class: ['card-bg-gradient rounded relative w-full h-[218px] shadow-none'] },
      body: { class: ['rounded surface-ground absolute h-[216px] left-[1px] top-[1px] p-3 md:p-6'] }
    }"
  >
    <template #content>
      <div class="flex flex-col gap-4">
        <div>
          <p
            class="font-medium"
            style="line-height: 100%"
          >
            <small>
              {{ props.title }}
            </small>
          </p>
        </div>

        <ul class="border-icons flex flex-row gap-1 md:gap-2 lg:gap-3 overflow-x-auto py-2">
          <li>
            <div class="a block relative rounded w-14 h-14">
              <span
                class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px]"
              >
                <i class="w-[40px] h-[40px]">
                  <IconOpenIa />
                </i>
              </span>
            </div>
          </li>
          <li>
            <div class="a block relative rounded w-14 h-14">
              <span
                class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px]"
              >
                <i class="w-[40px] h-[40px]">
                  <IconAstroDark class="hide-on-light" />
                  <IconAstroLight class="hide-on-dark" />
                </i>
              </span>
            </div>
          </li>
          <li>
            <div class="a block relative rounded w-14 h-14">
              <span
                class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px]"
              >
                <i class="w-[40px] h-[40px]">
                  <IconAngular />
                </i>
              </span>
            </div>
          </li>
          <li>
            <div class="a block relative rounded w-14 h-14">
              <span
                class="flex items-center justify-center absolute rounded w-[54px] h-[54px] left-[1px] top-[1px]"
              >
                <i class="w-[40px] h-[40px]">
                  <IconVue />
                </i>
              </span>
            </div>
          </li>
        </ul>

        <div class="content-skeleton flex flex-col gap-3">
          <div class="flex justify-between gap-3 lg:gap-8">
            <div class="item-skeleton w-[120px] h-[16px]"></div>
            <div class="item-skeleton w-[80px] h-[16px]"></div>
          </div>
          <div class="flex justify-between gap-3 lg:gap-8">
            <div class="item-skeleton w-full h-[16px]"></div>
            <div class="item-skeleton w-[80px] h-[16px]"></div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style lang="scss">
  .card-bg-gradient {
    .p-card-body {
      @apply w-[calc(100%-2px)];
    }
  }
</style>

<!-- Card Gradient BG/BORDER -->
<style lang="scss" scoped>
  /* used to tailwind group hover */
  .group {
    &:hover {
      .card-bg-gradient {
        box-shadow: 1px 1px 0px var(--surface-border) !important;

        .border-icons {
          @media screen and (min-width: 1280px) {
            gap: 0px !important;

            li:nth-child(1) {
              left: 0rem;
            }
            li:nth-child(2) {
              left: -1rem;
            }
            li:nth-child(3) {
              left: -2rem;
            }
            li:nth-child(4) {
              left: -3rem;
            }
            li:nth-child(5) {
              left: -4rem;
            }
          }

          .a {
            background-color: #f3652b;
            background: linear-gradient(90deg, #f3652b 0%, var(--surface-ground) 100%);
          }
        }
      }
    }
  }

  .card-bg-gradient {
    transition: all 600ms ease-in-out !important;
    background-color: var(--surface-border);
    background: linear-gradient(140deg, var(--surface-border) 30%, var(--surface-ground) 100%);

    &:hover {
      box-shadow: 1px 1px 0px var(--surface-border) !important;
    }
  }
</style>

<!-- Framework Icons -->
<style lang="scss">
  .card-bg-gradient {
    &:hover {
      .border-icons {
        @media screen and (min-width: 1280px) {
          gap: 0px !important;

          li:nth-child(1) {
            left: 0rem;
          }
          li:nth-child(2) {
            left: -1rem;
          }
          li:nth-child(3) {
            left: -2rem;
          }
          li:nth-child(4) {
            left: -3rem;
          }
          li:nth-child(5) {
            left: -4rem;
          }
        }

        .a {
          background-color: #f3652b;
          background: linear-gradient(90deg, #f3652b 0%, var(--surface-ground) 100%);
        }
      }
    }
  }

  .azion.azion-light {
    .border-icons {
      li {
        .a {
          span {
            background-color: var(--surface-50);
          }
        }
      }
    }
  }

  .azion.azion-dark {
    .border-icons {
      li {
        .a {
          span {
            background-color: var(--surface-ground);
          }
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

      .a {
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
<style lang="scss">
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
  import Card from 'primevue/card'
  import IconAstroDark from '../src/assets/icons/frameworks/AstroDark.vue'
  import IconAstroLight from '../src/assets/icons/frameworks/AstroLight.vue'
  import IconAngular from '../src/assets/icons/frameworks/Angular.vue'
  import IconOpenIa from '../src/assets/icons/frameworks/OpenIa.vue'
  import IconVue from '../src/assets/icons/frameworks/Vue.vue'

  const props = defineProps({
    title: {
      type: String,
      default: 'Browse Integrations'
    }
  })
</script>
