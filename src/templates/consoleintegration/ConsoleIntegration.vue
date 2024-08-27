<template>
  <Card
    :pt="{
      root: { class: ['card-bg-gradient rounded relative w-full h-[252px] shadow-none overflow-hidden'] },
      body: { class: ['rounded surface-ground absolute h-[250px] left-[1px] top-[1px]'] }
    }"
  >
    <template #content>
      <div class="relative">
        <ul class="relative z-0">
          <li class="p-1 surface-border border-b">
            <p class="p-1 flex gap-1 items-center" style="font-size: .55rem">
                <i class="pi pi-search" style="font-size: .45rem"></i>
                Search your apps
              </p>
          </li>
          <li class="p-1 surface-border border-b">
            <div class="content-skeleton flex flex-col gap-3">
              <div class="flex justify-between gap-3">
                <div class="item-skeleton w-[33%] h-[12px]"></div>
                <div class="item-skeleton w-[44%] h-[12px]"></div>
                <div class="item-skeleton w-[33%] h-[12px]"></div>
              </div>
            </div>
          </li>

          <li class="p-1 surface-border border-b" v-for="index in 12">
            <div class="content-skeleton flex flex-col gap-3">
              <div class="flex justify-between gap-3">
                <div class="item-skeleton w-[40%] h-[12px]"></div>
                <div class="item-skeleton w-[10%] h-[12px]"></div>
                <div class="item-skeleton w-[10%] h-[12px]"></div>
                <figure class="w-[14px] h-[12px]">
                  <img
                    src="https://www.azion.com/assets/pages/about/perfil-6.png?ims=12x12/filters:grayscale()"
                    alt=""
                    width="12px"
                    height="12px"
                  />
                </figure>
                <div class="item-skeleton w-[33%] h-[12px]"></div>
                <div class="w-[14px] h-[14px] flex items-center relative -top-[4px] right-[4px]">...</div>
              </div>
            </div>
          </li>
        </ul>

        <div class="min-w-[288px] absolute z-10 top-0 w-full h-full flex flex-row justify-end">
          <div class="w-[104px] relative -right-[60px]">
            <span class="icon icon-vscode relative z-20 flex justify-center items-center inline-block border surface-border rounded w-14 h-14 surface-ground">
              <i class="w-[40px] h-[40px]">
                <IconVSCode />
              </i>
            </span>
            <span class="icon icon-terminal relative z-10 flex justify-center items-center inline-block border surface-border rounded w-14 h-14 surface-ground">
              <i class="w-[33px] h-[33px]">
                <IconTerminalLight class="hide-on-dark" />
                <IconTerminalDark class="hide-on-light" />
              </i>
            </span>
          </div>

          <div class="flex flex-col justify-center items-end relative right-8">
            <p class="command flex justify-between leading-[34px] w-[180px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative z-30">
              azion init
              <Button outlined icon="pi pi-copy" @click="copy('azion init')" />
            </p>
            <p class="command flex justify-between leading-[34px] w-[220px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative -top-[.4rem] z-20">
              azion build
              <Button outlined icon="pi pi-copy" @click="copy('azion build')" />
            </p>
            <p class="command flex justify-between leading-[34px] w-[260px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative -top-[.8rem] z-10">
              azion deploy
              <Button outlined icon="pi pi-copy" @click="copy('azion deploy')" />
            </p>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<!-- Card Gradient BG/BORDER -->

<style lang="scss">
  .card-bg-gradient {
    .p-card-body {
      @apply w-[calc(100%-2px)];
    }
  }
</style>

<style lang="scss" scoped>
  .azion.azion-light .group:hover {
    .card-bg-gradient {
      .command {
        text-shadow: 0 0 8px var(--green-500);
      }
    }
  }

  .azion.azion-dark .group:hover {
    .card-bg-gradient {
      .command {
        text-shadow: 0 0 8px var(--green-300);
      }
    }
  }

  /* used to tailwind group hover */
  .group {
    &:hover {
      .card-bg-gradient {
        box-shadow: .0275rem -1px 0px var(--surface-border) !important;
        left: -1rem;
        background: linear-gradient(100deg, var(--surface-border) 0%, var(--surface-ground) 100%);

        .icon {
          transition: all 600ms ease-in-out !important;
        }

        .icon-vscode {
          left: 38px;
          top: 8px;
        }

        .icon-terminal {
          left: -20px;
          top: 10px;
        }
      }
    }
  }

  .card-bg-gradient {
    left: 0;
    transition: all 600ms ease-in-out !important;
    background-color: var(--surface-border);
    background: linear-gradient(100deg, var(--surface-border) 0%, var(--surface-ground) 100%);

    .icon {
      transition: all 600ms ease-in-out !important;
    }

    .icon-vscode {
      left: 48px;
      top: 18px;
    }

    .icon-terminal {
      left: 0;
      top: 0;
    }

    &:hover {
      box-shadow: .0275rem -1px 0px var(--surface-border) !important;
      left: -1rem;
      // background: linear-gradient(180deg, var(--surface-border) 0%, var(--surface-ground) 100%);

      .icon-vscode {
        left: 38px;
        top: 8px;
      }

      .icon-terminal {
        left: -20px;
        top: 10px;
      }
    }
  }
</style>

<!-- CLI Commands -->
<style lang="scss" scoped>
  .command {
    transition: all 400ms ease-in-out !important;
  }

  .azion {
    &.azion-dark {
      .command {
        color: var(--green-300);
      }

      .card-bg-gradient {
        &:hover {
          .command {
            text-shadow: 0 0 8px var(--green-300);
          }
        }
      }
    }

    &.azion-light {
      .command {
        color: var(--green-500);
      }

      .card-bg-gradient {
        &:hover {
          .command {
            text-shadow: 0 0 8px var(--green-500);
          }
        }
      }
    }
  }
</style>

<!-- SKELLETON COMP -->
<style lang="scss" scoped>
  .item-skeleton {
    background-color: var(--surface-border);
  }

  .azion {
    &.azion-dark {
      .content-skeleton {
        .item-skeleton {
          background: linear-gradient(90deg, var(--surface-border) 50%, #191919 100%);
        }
      }
    }

    &.azion-light {
      .content-skeleton {
        .item-skeleton {
          background: linear-gradient(90deg, var(--surface-border) 50%, #f1f1f1 100%);
        }
      }
    }
  }
</style>

<script setup>
  import Card from 'primevue/card';
  import Button from 'primevue/button';

  // import IconVSCode from '../../assets/icons/tools/VSCode.vue';
  // import IconTerminalLight from '../../assets/icons/tools/TerminalLight.vue';
  // import IconTerminalDark from '../../assets/icons/tools/TerminalDark.vue';

  import IconVSCode from '../src/assets/icons/tools/VSCode.vue';
  import IconTerminalLight from '../src/assets/icons/tools/TerminalLight.vue';
  import IconTerminalDark from '../src/assets/icons/tools/TerminalDark.vue';

  const props = defineProps({
    title: {
      type: String,
      default: 'Browse Integrations'
    }
  });

  function copy(text) {
    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(() => {
      console.log(`Copied ${text}`);
    }, (error) => {
      console.error(error);
    });
  };
</script>

