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
            <div class="border rounded surface-border w-28">
              <p class="p-1 px-2 flex gap-2 items-center" style="font-size: .55rem">
                <i class="pi pi-search" style="font-size: .45rem"></i>
                Search your apps
              </p>
            </div>
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
          <li class="p-1 surface-border border-b" v-for="index in 10">
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
                <div class="item-skeleton w-[35%] h-[12px]"></div>
              </div>
            </div>
          </li>
        </ul>

        <div class="absolute z-10 right-6 -top-[.725rem] w-full h-full flex flex-col justify-center items-end">
          <p class="command flex justify-between leading-[34px] w-[180px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative z-30">
            azion init
            <Button icon="pi pi-copy" outlined @click="copy('azion init')"/>
          </p>
          <p class="command flex justify-between leading-[34px] w-[220px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative -top-[.4rem] z-20">
            azion build
            <Button icon="pi pi-copy" outlined @click="copy('azion build')"/>
          </p>
          <p class="command flex justify-between leading-[34px] w-[260px] surface-ground border surface-border rounded py-2 px-4 font-mono text-xs relative -top-[.8rem] z-10">
            azion deploy
            <Button icon="pi pi-copy" outlined @click="copy('azion deploy')"/>
          </p>
        </div>
      </div>


      <!--
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
      -->
    </template>
  </Card>
</template>

<!-- Card Gradient BG/BORDER -->
<style lang="scss">
  .p-card-body {
    @apply w-[calc(100%-2px)];
  }

  /* used to tailwind group hover */
  .group {
    &:hover {
      .card-bg-gradient {
        box-shadow: 1px 1px 0px var(--surface-border) !important;
      }
    }
  }

  .card-bg-gradient {
    transition: all 1s ease-in-out !important;
    background-color: var(--surface-border);
    background: linear-gradient(140deg, var(--surface-border) 30%, var(--surface-ground) 100%);

    &:hover {
      box-shadow: 1px 1px 0px var(--surface-border) !important;
    }
  }
</style>

<!-- CLI Commands -->
<style lang="scss" scoped>
  .azion {
    &.azion-dark {
      .command {
        color: var(--green-300);
      }
    }

    &.azion-light {
      .command {
        color: var(--green-500);
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

