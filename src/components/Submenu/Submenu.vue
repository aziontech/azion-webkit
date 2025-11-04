<template>
  <div
    :id="menuitem.ref"
    :class="[
      'top-[4rem] group-hover:top-[3.5rem] transition-all duration-350 ease-in-out invisible opacity-1 left-0 fixed w-full flex-row rounded-md right-0 justify-start max-w-xxxl mx-auto 3xl:max-w-xxxl group-hover:delay-100 3xl:left-1/2 transform 3xl:-translate-x-1/2 z-50 lg:flex'
    ]"
  >
    <div
      @mouseleave="hideSubmenu"
      :class="[
        'flex flex-col opacity-0 py-4 px-3  transition-all duration-300 ease-in-out text-black rounded-md shadow-xl group-hover:opacity-100 group-hover:visible group-hover:top-[3.5rem] top-[3rem] group-hover:delay-100',
        menuitem.lavanderBackground ? 'bg-violet-300' : 'bg-neutral-200',
        menuitem.position === 'left'
          ? 'ml-[7rem]'
          : menuitem.subMenuColumns.length === 1
            ? 'ml-[36.5rem]'
            : menuitem.subMenuColumns.length > 2
              ? 'mx-auto'
              : 'ml-[28.25rem]'
      ]"
    >
      <div
        v-if="menuitem.subMenuColumns && menuitem.subMenuColumns.length"
        class="flex"
      >
        <ul
          v-for="(subItem, index) in menuitem.subMenuColumns"
          :key="index"
          class="gap-1 mt-1 w-72"
        >
          <template v-if="subItem.items && subItem.label && !subItem.communityComponent">
            <span
              class="font-proto-mono text-xs mb-2 pb-1 pt-1 mx-3 block border-b border-neutral-500 text-neutral-700"
            >
              {{ subItem.label }}</span
            >
            <li
              class="flex flex-col text-sm gap-1 text-black first:mt-2 transition duration-300 delay-75"
              v-for="(item, index) in subItem.items"
              :key="index"
            >
              <a
                :href="item.href"
                :title="item.label"
                class="px-3 py-2 rounded-md hover:bg-white/60"
              >
                <span class="font-sora text-sm font-semibold">
                  {{ item.label }}
                </span>

                <p class="text-xs block font-light text-slate-900">{{ item.description }}</p>
              </a>
            </li>
          </template>
          <template v-if="subItem.length">
            <div
              v-for="(item, index) in subItem"
              :key="index"
              class="gap-3 min-w-72 first:pb-2"
            >
              <template v-if="item.items && item.label && !item.communityComponent">
                <span
                  class="font-proto-mono text-xs pb-1 mb-2 pt-1 mx-3 block border-b border-neutral-500 text-neutral-700"
                >
                  {{ item.label }}</span
                >
                <li
                  class="flex flex-col text-sm gap-1 text-black"
                  v-for="(item, index) in item.items"
                  :key="index"
                >
                  <a
                    :href="item.href"
                    :title="item.label"
                    class="px-3 py-2 rounded-md hover:bg-white/60"
                  >
                    <span class="font-sora text-sm font-semibold">
                      {{ item.label }}
                    </span>

                    <p class="text-xs block font-light text-slate-900">{{ item.description }}</p>
                  </a>
                </li>
              </template>

              <template v-if="item.communityComponent">
                <span
                  class="font-proto-mono text-xs pb-1 mb-2 pt-1 mx-3 block border-b border-neutral-500 text-neutral-700"
                >
                  {{ item.label }}</span
                >
                <div class=" ">
                  <a
                    :href="communityData.href"
                    class="flex items-center gap-3 mt-2 px-3 py-2 hover:bg-white/60 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="37"
                      viewBox="0 0 35 37"
                      fill="none"
                    >
                      <path
                        d="M31.128 30L20.112 22.224V15.312L31.128 7.536L34.368 13.152L24.936 17.256V20.28L34.368 24.384L31.128 30ZM19.968 0.911997L18.744 14.376L12.696 17.832L0.456 12.144L3.696 6.6L11.976 12.648L14.64 11.136L13.488 0.983996L19.968 0.911997ZM0.456 25.392L12.696 19.704L18.744 23.16L19.968 36.624L13.488 36.552L14.64 26.4L11.976 24.888L3.696 30.936L0.456 25.392Z"
                        fill="#070707"
                      />
                    </svg>
                    <h3 class="font-sora text-sm">{{ communityData.label }}</h3>
                    <span class="pi pi-external-link text-black cursor-pointer"> </span>
                  </a>
                </div>
              </template>
            </div>
          </template>
        </ul>
      </div>
      <div
        v-if="menuitem.footerButton"
        class="flex m-3 mb-2 pt-3 border-t border-neutral-500"
      >
        <Button
          :label="menuitem.footerButton.label"
          :href="menuitem.footerButton.href"
          type="linkSecondary"
          theme="light"
          size="small"
          customClass="p-0"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from '../Button/Button.vue'

  const props = defineProps({
    menuitem: {
      type: Object,
      required: true
    },
    communityData: {
      type: Object
    }
  })

  const { menuitem, communityData } = props
</script>

<style scoped></style>
