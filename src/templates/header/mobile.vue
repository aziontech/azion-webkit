<template>
  <Button
    icon="pi pi-bars"
    outlined
    @click="visibleRight = true"
    class="flex lg:hidden"/>

    <Sidebar
      v-model:visible="visibleRight"
      position="right"
      class="py-5 pb-20 h-[calc(100%-56px)] top-[28px] border-l surface-border w-64 md:w-80"
      :show-close-icon="false"
      :pt="{
        header: { class: 'hidden' },
      }">

    <PanelMenu
      :model="items"
      :pt="{
        headerContent: {
          class: ['hover:surface-hover rounded-md md:px-4 px-2 py-2 border-none']
        },
        menuContent: {
          class: ['border-none']
        },
        content: {
          class: ['p-0 m-0 py-2 md:px-2']
        }
      }">
      <template #item="{ item }">
          <a
            v-if="item.href"
            :href="href"
            @click="navigate">
            <div class="p-menuitem-link !py-0">
              <span :class="item.icon"></span>
              <span class="text-color">{{ item.label }}</span>
            </div>
          </a>
          <a
            v-else
            :href="item.url"
            :target="item.target">
            <div class="p-menuitem-link !py-0">
              <span v-if="item.icon" class="mr-2" :class="item.icon"></span>
              <span>{{ item.label }}</span>
              <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto"></span>
            </div>
          </a>
      </template>
    </PanelMenu>

    <Divider class="my-8" />

    <Menu
      class="w-full border-none bg-transparent"
      :model="items2"
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
          @click="navigate"
          class="p-2 flex gap-2">

            <span v-if="item.icon" :class="item.icon"></span>
            <span class="ml-2">
              {{ item.label }}
            </span>
            <Tag v-for="tag in item.tags" :key="tag" :value="tag" severity="info"/>
        </a>
      </template>
    </Menu>

    <div class="fixed bottom-6 flex gap-2 items-center">
      <a
        href=""
        class="flex gap-2 justify-between p-button p-button-primary p-button-outlined p-button-sm border-white text-white hover:bg-header-button-hover whitespace-nowrap">
        Contact
        <i class="pi pi-chevron-right text-xs"></i>
      </a>
      <a
        target="_blank"
        href="https://sso.azion.com/login"
        class="flex gap-2 p-button p-button-primary p-button-outlined p-button-sm  text-white hover:bg-header-button-hover whitespace-nowrap">
        Sign in
      </a>
      <ButtonThemeToggle />
    </div>
  </Sidebar>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Sidebar from 'primevue/sidebar';
import Tag from 'primevue/tag';
import ButtonThemeToggle from '../button-toggle/theme/index.vue';

const visibleRight = ref(false);

function getHTMLElement() {
  return document.querySelector('html');
}

function pageScroll(action) {
  const overflow = action === 'stop' ? 'hidden' : 'auto';
  getHTMLElement().style.overflow = overflow;

  return overflow;
}

onUpdated(() => {
  visibleRight.value ? pageScroll('stop') : pageScroll('auto');
})

const items = [
    {
      label: 'Products',
      ref: 'productsPanel',
      items: [
        {
          label: 'Build',
          icon: 'pi pi-box',
          items: [
            {
              icon: '',
              label: 'Edge Application',
              description: 'Here will be a small description',
              href: '#edgeapplication'
            }, {
              icon: '',
              label: 'Application Acceleration',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Caching',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Edge Functions',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Image Processor',
              description: '',
              href: ''
            }, {
              icon: '',
              label: 'Load Balancer',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge QV',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge SQL',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Object Storage',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Secure',
          icon: 'pi pi-shield',
          items: [
            {
              icon: '',
              label: 'Edge Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'DDoS Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Network Layer Protection',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Web Application Firewall',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Deploy',
          icon: 'pi pi-code',
          items: [
            {
              icon: '',
              label: 'Edge Orchestrator',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Edge Network',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Azion Live Map',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Roadmap',
              description: '',
              href: ''
            }
          ]
        },
        {
          label: 'Observe',
          icon: 'pi pi-chart-line',
          items: [
            {
              icon: '',
              label: 'Data Streaming',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Edge Pulse',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Metrics',
              description: '',
              href: ''
            },
            {
              icon: '',
              label: 'Real-Time Events',
              description: '',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Pricing',
      href: '#pricing',
      items: []
    },
    {
      label: 'About us',
      href: '#aboutus',
      items: []
    },
    {
      label: 'Resources',
      ref: 'resourcesPanel',
      items: [
        {
          label: 'Documentation',
          items: [
            {
              label: 'Getting started',
              href: ''
            },
            {
              label: 'Dev Tools',
              href: ''
            },
            {
              label: 'Guides',
              href: ''
            },
            {
              label: 'API',
              href: ''
            },
            {
              label: 'Agreements',
              href: ''
            },
            {
              label: 'Changelog',
              href: ''
            }
          ]
        }
      ]
    },
    {
      label: 'Marketplace',
      href: '#marketplace',
      items: []
    }
];

const items2 = [
  {
    // label: 'Documents',
    items: [
      {
        label: 'Carreers',
        // icon: 'pi pi-briefcase',
        tags: ['we\'re hiring!'],
        url: '#carreers'
      },
      {
        label: 'Success Stories',
        // icon: 'pi pi-dollar'
        url: '#successstories'
      },
      {
        label: 'Support',
        // icon: 'pi pi-question-circle'
        url: '#support'
      },
      {
        label: 'Privacy Police',
        // icon: 'pi pi-exclamation-triangle'
        url: '#privacypolice'
      }
    ]
  }
]
</script>

