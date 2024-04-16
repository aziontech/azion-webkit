<template>
    <Menubar
      :model="mergedItems"
      class="px-container w-full border-none hidden lg:flex gap-5"
      :pt="{
        root: {
          class: 'surface-200',
        },
        button: {
          class: 'hidden',
        }
      }"
    >
      <template #start>
        <Button text tabindex="1">
          <div>
            <div class="text-lg font-medium leading-relaxed">Learning Center</div>
          </div>
        </Button>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a class="flex align-items-center p-3 leading-relaxed" v-bind="props.action">
          <span class="text-sm">{{ item.label }}</span>
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
      </template>
    </Menubar>
    <PanelMenu
      :model="mobile"
      class="block lg:hidden"
      :pt="{
        root: {
          class: 'w-full surface-c',
        },
        headerContent: {
          class: 'w-full border-none px-2 py-3 flex items-center min-h-11 bg-[var(--surface-200)] text-sm',
        },
        menuContent: {
          class: 'border-none text-sm',
        }
      }"
    >
      <template #item="{ item }">
        <a class="flex align-items-center cursor-pointer text-color px-3 py-2 w-full" :href="item.url" :target="item.target">
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
        </a>
      </template>
    </PanelMenu>
  </template>
  
  <script setup>
  import Menubar from 'primevue/menubar';
  import PanelMenu from 'primevue/panelmenu';
  
  const items = [
    {
      label: 'What is IAM?',
    },
    {
      label: 'What is SASE?',
    },
    {
      label: 'Authentication',
      items: [
        {
          label: 'Item 1',
        },
        {
          label: 'Item 2',
        },
        {
          label: 'Item 3',
        },
        {
          label: 'Item 4',
          items: [
            {
              label: 'Item 4.1',
            },
            {
              label: 'Item 4.2',
            }
          ]
        }
      ]
    },
    {
      label: 'Remote access',
      items: [
        {
          label: 'Item 1',
        },
        {
          label: 'Item 2',
        },
        {
          label: 'Item 3',
        },
        {
          label: 'Item 4',
          items: [
            {
              label: 'Item 4.1',
            },
            {
              label: 'Item 4.2',
            }
          ]
        }
      ]
    },
    {
      label: 'Access glossary',
      items: [
        {
          label: 'Item 1',
        },
        {
          label: 'Item 2',
        },
        {
          label: 'Item 3',
        },
        {
          label: 'Item 4',
          items: [
            {
              label: 'Item 4.1',
            },
            {
              label: 'Item 4.2',
            }
          ]
        }
      ]
    },
  ];
  
  const mobile = [
    {
      label: 'What is IAM?',
      items: []
    }
  ];
  
  // Adicionando os itens de 'items' para 'teste[0].items'
  items.forEach(item => mobile[0].items.push(item));
  
  const mergedItems = [...items];
  
  </script>
  