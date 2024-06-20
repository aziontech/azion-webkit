 <template>
  <!-- open sidebar button -->
  <Button
    @click="visibleRight=true"
    class="lg:hidden flex text-white flex-none border-header w-8 h-8 bg-header hover:bg-header-button-hover"
    icon="pi pi-bars"
    size="small"
    aria-label="Menu"
    :pt="{
      label: { class: 'text-white hover:bg-header-button-hover' },
      icon: { class: 'text-white' }
    }"
  />

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="md:pt-3 pb-20 h-[100%] border-l surface-border w-[20rem] md:w-[22rem] text-sm"
    :show-close-icon="false"
    :pt="{
      header: { class: 'hidden' }
    }"
  >
    <!-- close sidebar button -->
    <div class="flex justify-end pb-6 pr-2 md:pr-0">
      <Button outlined @click="visibleRight=false" class="flex-none w-8 h-8" icon="pi pi-times" size="small" />
    </div>

    <!-- slot to receive custom menu -->
    <slot name="main-content" />

    <template v-if="menuSecondary">
      <Divider class="my-8" />
      <Menu
        class="w-full border-none bg-transparent"
        :model="menuSecondary"
        :pt="{
          root: {
            class: 'p-0 w-full border-none bg-transparent'
          }
        }">

        <template #item="{ item, props }">
          <a
            v-if="item.url"
            v-bind="props.action"
            :target="item.target"
            :href="item.url"
            class="p-2 flex gap-2">

              <span v-if="item.icon" :class="item.icon"></span>
              <span class="ml-2 font-medium text-sm">
                {{ item.label }}
              </span>
              <Tag v-for="tag in item.tags" :key='tag' :value="tag" severity="info"/>
          </a>
        </template>
      </Menu>
    </template>

    <template v-if="bottomButtons">
      <div class="fixed bottom-6 flex gap-2 items-center">
        <a
          v-for="(button, index) in bottomButtons"
          :key="index"
          :href="button.url"
          :title="button.urlTitle"
          :class="[button.destak ?
            'flex gap-2 justify-between p-button p-button-primary p-button-sm whitespace-nowrap' :
            'flex gap-2 p-button p-button-primary p-button-outlined p-button-sm text-white hover:surface-hover whitespace-nowrap',
            { 'p-button-info' : button.severity === 'info'}]">
          {{ button.label }}
          <i v-if="button.icon" :class="button.icon"></i>
        </a>
      </div>
    </template>
  </Sidebar>
</template>

<script setup>
  import { onUpdated, ref } from 'vue';
  import Button from 'primevue/button';
  import Divider from 'primevue/divider';
  import Menu from 'primevue/menu';
  import Sidebar from 'primevue/sidebar';
  import Tag from 'primevue/tag';

  let props = defineProps({
    menuData: Object,
    menuSecondary: Array,
    bottomButtons: Array
  });

  const { menuSecondary, bottomButtons } = props;
  const visibleRight = ref(false);

  function getHTMLElement() {
    return document.querySelector('html');
  };

  function pageScroll(action) {
    const overflow = action === 'stop' ? 'hidden' : 'auto';
    getHTMLElement().style.overflow = overflow;

    return overflow;
  };

  onUpdated(() => {
    visibleRight.value ? pageScroll('stop') : pageScroll('auto');
  });
</script>

